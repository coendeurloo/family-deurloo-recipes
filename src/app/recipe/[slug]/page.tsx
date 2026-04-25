'use client'

import { useState, useEffect } from 'react'
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

  const recipe = recipes.find(r => r.slug === params.slug)
  const ui = t(lang)

  useEffect(() => {
    if (recipe) setServings(recipe.servings)
  }, [recipe])

  if (!recipe) {
    return (
      <div className={styles.notFound}>
        <p>Recipe not found.</p>
        <Link href="/">← Back</Link>
      </div>
    )
  }

  const ratio = servings / recipe.servings

  function formatAmount(amount: number): string {
    const val = amount * ratio
    if (val % 1 === 0) return String(val)
    // Round to 1 decimal
    const rounded = Math.round(val * 10) / 10
    return String(rounded)
  }

  function switchLang(l: Language) {
    setLang(l)
    router.replace(`/recipe/${recipe!.slug}?lang=${l}`)
  }

  return (
    <div className={styles.page}>
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
                {l === 'nl' ? '🇳🇱' : l === 'en' ? '🇬🇧' : '🇷🇺'}
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
        </div>

        <div className={styles.body}>
          {/* Equipment */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>🍳 {ui.equipment}</h2>
            <ul className={styles.equipList}>
              {recipe.equipment.map((item, i) => (
                <li key={i} className={styles.equipItem}>{item[lang]}</li>
              ))}
            </ul>
          </section>

          {/* Ingredients */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>📋 {ui.ingredients}</h2>
            <ul className={styles.ingredList}>
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className={styles.ingredItem}>
                  <span className={styles.ingredAmount}>
                    {formatAmount(ing.amount)}
                    {ing.unit ? ` ${translateUnit(ing.unit, lang)}` : ''}
                  </span>
                  <span className={styles.ingredName}>{ing.name[lang]}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Steps */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>👩‍🍳 {ui.steps}</h2>
            <ol className={styles.stepList}>
              {recipe.steps.map((step, i) => (
                <li key={i} className={styles.stepItem}>
                  <div className={styles.stepNumber}>{i + 1}</div>
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
              ))}
            </ol>
          </section>

          {/* Notes */}
          {recipe.notes[lang] && (
            <section className={styles.notesBox}>
              <h2 className={styles.sectionTitle}>💡 {ui.notes}</h2>
              <p className={styles.notesText}>{recipe.notes[lang]}</p>
            </section>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href={`/?lang=${lang}`} className={styles.footerBack}>{ui.backToRecipes}</Link>
        <p>Familie Deurloo · {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
