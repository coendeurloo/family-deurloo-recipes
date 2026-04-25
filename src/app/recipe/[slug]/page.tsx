'use client'

import { useState, useEffect, useMemo } from 'react'
import { useParams, useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { recipes } from '@/data/recipes'
import { t, translateUnit } from '@/lib/i18n'
import type { Language } from '@/data/recipes'
import styles from './page.module.css'

export default function RecipePage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()

  const [lang, setLang] = useState<Language>((searchParams.get('lang') as Language) || 'nl')
  const [servings, setServings] = useState<number>(2)
  const [cookMode, setCookMode] = useState(false)
  const [stepMode, setStepMode] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [checkedIngredients, setCheckedIngredients] = useState<number[]>([])
  const [showShoppingList, setShowShoppingList] = useState(false)

  const recipe = recipes.find(r => r.slug === params.slug)
  const ui = t(lang)

  useEffect(() => {
    if (recipe) setServings(recipe.servings)
  }, [recipe])

  useEffect(() => {
    if (!recipe) return
    const saved = window.localStorage.getItem(`checked-ingredients:${recipe.slug}`)
    setCheckedIngredients(saved ? JSON.parse(saved) : [])
    setCurrentStep(0)
  }, [recipe])

  useEffect(() => {
    if (!recipe) return
    window.localStorage.setItem(`checked-ingredients:${recipe.slug}`, JSON.stringify(checkedIngredients))
  }, [checkedIngredients, recipe])

  useEffect(() => {
    if (!cookMode || !('wakeLock' in navigator)) return

    let wakeLock: { release: () => Promise<void> } | null = null
    let cancelled = false

    async function requestWakeLock() {
      try {
        wakeLock = await (navigator as Navigator & { wakeLock: { request: (type: 'screen') => Promise<{ release: () => Promise<void> }> } }).wakeLock.request('screen')
        if (cancelled) await wakeLock.release()
      } catch {
        wakeLock = null
      }
    }

    requestWakeLock()

    return () => {
      cancelled = true
      if (wakeLock) wakeLock.release()
    }
  }, [cookMode])

  const visibleSteps = useMemo(() => {
    if (!recipe) return []
    return stepMode ? [recipe.steps[currentStep]] : recipe.steps
  }, [currentStep, recipe, stepMode])

  if (!recipe) {
    return (
      <div className={styles.notFound}>
        <p>Recipe not found.</p>
        <Link href="/">← Back</Link>
      </div>
    )
  }

  const ratio = servings / recipe.servings

  function formatAmount(amount: number, unit: string | null): string {
    const val = amount * ratio
    if (unit === 'g' || unit === 'ml') {
      return String(Math.max(1, Math.round(val / 5) * 5))
    }
    if (unit === 'kg' || unit === 'l') {
      return val % 1 === 0 ? String(val) : String(Math.round(val * 10) / 10)
    }

    const rounded = Math.round(val * 4) / 4
    const whole = Math.floor(rounded)
    const fraction = rounded - whole
    const fractions: Record<number, string> = {
      0.25: '1/4',
      0.5: '1/2',
      0.75: '3/4',
    }

    if (rounded % 1 === 0) return String(rounded)
    if (whole === 0) return fractions[fraction] || String(rounded)
    return `${whole} ${fractions[fraction] || fraction}`
  }

  function toggleIngredient(index: number) {
    setCheckedIngredients(current =>
      current.includes(index)
        ? current.filter(item => item !== index)
        : [...current, index]
    )
  }

  function switchLang(l: Language) {
    setLang(l)
    router.replace(`/recipe/${recipe!.slug}?lang=${l}`)
  }

  return (
    <div className={`${styles.page} ${cookMode ? styles.cookMode : ''}`}>
      {/* Header bar */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href={`/?lang=${lang}`} className={styles.backLink}>{ui.backToRecipes}</Link>
          <div className={styles.langSwitcher}>
            {(['nl', 'en', 'ru'] as Language[]).map(l => (
              <button
                key={l}
                onClick={() => switchLang(l)}
                className={`${styles.langBtn} ${lang === l ? styles.langBtnActive : ''}`}
              >
                <Image
                  src={`/flags/${l === 'en' ? 'gb' : l}.svg`}
                  alt={l.toUpperCase()}
                  width={22}
                  height={15}
                  className={styles.flagIcon}
                />
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className={styles.main}>
        {/* Hero */}
        <div className={styles.hero}>
          {recipe.image ? (
            <div className={styles.heroImage}>
              <Image src={recipe.image} alt={recipe.title[lang]} fill style={{ objectFit: 'cover' }} sizes="100vw" priority />
            </div>
          ) : (
            <span className={styles.heroEmoji}>{recipe.emoji}</span>
          )}
          <p className={styles.heroCategory}>{recipe.category[lang]}</p>
          <h1 className={styles.heroTitle}>{recipe.title[lang]}</h1>
          <p className={styles.heroDesc}>{recipe.description[lang]}</p>

          {/* Meta row */}
          <div className={styles.metaRow}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>{ui.prepTime}</span>
              <span className={styles.metaValue}>{recipe.prepTime} {ui.minutes}</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>{ui.cookTime}</span>
              <span className={styles.metaValue}>{recipe.cookTime} {ui.minutes}</span>
            </div>
            <div className={styles.metaDivider} />
            {/* Servings adjuster */}
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>{ui.servings}</span>
              <div className={styles.servingsControl}>
                <button onClick={() => setServings(s => Math.max(1, s - 1))} className={styles.servBtn}>−</button>
                <span className={styles.metaValue}>{servings}</span>
                <button onClick={() => setServings(s => s + 1)} className={styles.servBtn}>+</button>
              </div>
            </div>
          </div>

          <div className={styles.recipeActions}>
            <button type="button" className={`${styles.actionBtn} ${cookMode ? styles.actionBtnActive : ''}`} onClick={() => setCookMode(mode => !mode)}>
              {cookMode ? (lang === 'en' ? 'Exit cook mode' : lang === 'ru' ? 'Выйти из режима готовки' : 'Kookmodus uit') : (lang === 'en' ? 'Cook mode' : lang === 'ru' ? 'Режим готовки' : 'Kookmodus')}
            </button>
            <button type="button" className={`${styles.actionBtn} ${stepMode ? styles.actionBtnActive : ''}`} onClick={() => setStepMode(mode => !mode)}>
              {stepMode ? (lang === 'en' ? 'Show all steps' : lang === 'ru' ? 'Все шаги' : 'Alle stappen') : (lang === 'en' ? 'Step by step' : lang === 'ru' ? 'Пошагово' : 'Stap voor stap')}
            </button>
            <button type="button" className={styles.actionBtn} onClick={() => setShowShoppingList(true)}>
              {lang === 'en' ? 'Shopping list' : lang === 'ru' ? 'Список покупок' : 'Boodschappenlijst'}
            </button>
            <button type="button" className={styles.actionBtn} onClick={() => window.print()}>
              {lang === 'en' ? 'Print' : lang === 'ru' ? 'Печать' : 'Printen'}
            </button>
          </div>
        </div>

        <div className={styles.body}>
          <aside className={styles.sideColumn}>
            {/* Equipment */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{ui.equipment}</h2>
              <ul className={styles.equipList}>
                {recipe.equipment.map((item, i) => (
                  <li key={i} className={styles.equipItem}>{item[lang]}</li>
                ))}
              </ul>
            </section>

            {/* Ingredients */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{ui.ingredients}</h2>
              <ul className={styles.ingredList}>
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className={`${styles.ingredItem} ${checkedIngredients.includes(i) ? styles.ingredItemChecked : ''}`}>
                    <label>
                      <input
                        type="checkbox"
                        checked={checkedIngredients.includes(i)}
                        onChange={() => toggleIngredient(i)}
                      />
                      <span className={styles.ingredAmount}>
                        {formatAmount(ing.amount, ing.unit)}
                        {ing.unit ? ` ${translateUnit(ing.unit, lang)}` : ''}
                      </span>
                      <span className={styles.ingredName}>{ing.name[lang]}</span>
                    </label>
                  </li>
                ))}
              </ul>
              <button type="button" className={styles.clearChecksBtn} onClick={() => setCheckedIngredients([])}>
                {lang === 'en' ? 'Clear checks' : lang === 'ru' ? 'Сбросить отметки' : 'Vinkjes wissen'}
              </button>
            </section>
          </aside>

          <div className={styles.mainColumn}>
            {/* Steps */}
            <section className={`${styles.section} ${styles.stepsSection}`}>
              <div className={styles.stepsHeader}>
                <h2 className={styles.sectionTitle}>{ui.steps}</h2>
                {stepMode && (
                  <span className={styles.stepProgress}>{currentStep + 1} / {recipe.steps.length}</span>
                )}
              </div>
              <ol className={`${styles.stepList} ${stepMode ? styles.stepListSingle : ''}`}>
                {visibleSteps.map((step, i) => {
                  const stepIndex = stepMode ? currentStep : i
                  return (
                    <li key={stepIndex} className={styles.stepItem}>
                      <div className={styles.stepNumber}>{stepIndex + 1}</div>
                      <div className={styles.stepContent}>
                        <h3 className={styles.stepTitle}>{step.title[lang]}</h3>
                        <p className={styles.stepDesc}>{step.description[lang]}</p>
                        {step.images && step.images.length > 0 && (
                          <div className={styles.stepImages}>
                            {step.images.map((image, imageIndex) => (
                              <div key={image} className={styles.stepImage}>
                                <Image
                                  src={image}
                                  alt={`${step.title[lang]} ${imageIndex + 1}`}
                                  fill
                                  style={{ objectFit: 'cover' }}
                                  sizes="(max-width: 600px) 100vw, 760px"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ol>
              {stepMode && (
                <div className={styles.stepControls}>
                  <button type="button" className={styles.secondaryBtn} onClick={() => setCurrentStep(step => Math.max(0, step - 1))} disabled={currentStep === 0}>
                    {lang === 'en' ? 'Previous' : lang === 'ru' ? 'Назад' : 'Vorige'}
                  </button>
                  <button type="button" className={styles.primaryBtn} onClick={() => setCurrentStep(step => Math.min(recipe.steps.length - 1, step + 1))} disabled={currentStep === recipe.steps.length - 1}>
                    {lang === 'en' ? 'Next step' : lang === 'ru' ? 'Дальше' : 'Volgende stap'}
                  </button>
                </div>
              )}
            </section>

            {/* Notes */}
            {recipe.notes[lang] && (
              <section className={styles.notesBox}>
                <h2 className={styles.sectionTitle}>{ui.notes}</h2>
                <p className={styles.notesText}>{recipe.notes[lang]}</p>
              </section>
            )}
          </div>
        </div>
      </main>

      {showShoppingList && (
        <div className={styles.modalBackdrop} role="dialog" aria-modal="true">
          <div className={styles.shoppingPanel}>
            <div className={styles.panelHeader}>
              <h2>{lang === 'en' ? 'Shopping list' : lang === 'ru' ? 'Список покупок' : 'Boodschappenlijst'}</h2>
              <button type="button" className={styles.closeBtn} onClick={() => setShowShoppingList(false)}>×</button>
            </div>
            <div className={styles.printArea}>
              <h3>{recipe.title[lang]} ({servings} {ui.servings})</h3>
              <ul className={styles.shoppingList}>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <span>
                      {formatAmount(ingredient.amount, ingredient.unit)}
                      {ingredient.unit ? ` ${translateUnit(ingredient.unit, lang)}` : ''}
                    </span>
                    {ingredient.name[lang]}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.panelActions}>
              <button type="button" className={styles.secondaryBtn} onClick={() => setShowShoppingList(false)}>
                {lang === 'en' ? 'Close' : lang === 'ru' ? 'Закрыть' : 'Sluiten'}
              </button>
              <button type="button" className={styles.primaryBtn} onClick={() => window.print()}>
                {lang === 'en' ? 'Print' : lang === 'ru' ? 'Печать' : 'Printen'}
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className={styles.footer}>
        <Link href={`/?lang=${lang}`} className={styles.footerBack}>{ui.backToRecipes}</Link>
        <p>Familie Deurloo · {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
