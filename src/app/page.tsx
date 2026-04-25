'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { recipes } from '@/data/recipes'
import { t } from '@/lib/i18n'
import type { Language, Recipe } from '@/data/recipes'
import styles from './page.module.css'

export default function Home() {
  const [lang, setLang] = useState<Language>('nl')
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [favorites, setFavorites] = useState<string[]>([])
  const [shoppingRecipes, setShoppingRecipes] = useState<string[]>([])
  const [showShoppingList, setShowShoppingList] = useState(false)
  const ui = t(lang)

  useEffect(() => {
    const saved = window.localStorage.getItem('favorite-recipes')
    if (saved) setFavorites(JSON.parse(saved))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('favorite-recipes', JSON.stringify(favorites))
  }, [favorites])

  function toggleFavorite(slug: string) {
    setFavorites(current =>
      current.includes(slug)
        ? current.filter(item => item !== slug)
        : [...current, slug]
    )
  }

  function toggleShoppingRecipe(slug: string) {
    setShoppingRecipes(current =>
      current.includes(slug)
        ? current.filter(item => item !== slug)
        : [...current, slug]
    )
  }

  function isFavorite(recipe: Recipe) {
    return favorites.includes(recipe.slug)
  }

  function isSelectedForShopping(recipe: Recipe) {
    return shoppingRecipes.includes(recipe.slug)
  }

  const filters = [
    { id: 'all', label: ui.allRecipes, match: () => true },
    { id: 'favorites', label: lang === 'en' ? 'Favorites' : lang === 'ru' ? 'Избранное' : 'Favorieten', match: (r: Recipe) => isFavorite(r) },
    { id: 'kip', label: lang === 'en' ? 'Chicken' : lang === 'ru' ? 'Курица' : 'Kip', match: (r: Recipe) => r.tags.includes('kip') || r.tags.includes('chicken') },
    { id: 'pasta', label: 'Pasta', match: (r: Recipe) => r.tags.includes('pasta') },
    { id: 'marinade', label: 'Marinade', match: (r: Recipe) => r.tags.includes('marinade') },
    { id: 'airfryer', label: 'Airfryer', match: (r: Recipe) => r.tags.includes('airfryer') },
    { id: 'quick', label: lang === 'en' ? 'Quick' : lang === 'ru' ? 'Быстро' : 'Snel klaar', match: (r: Recipe) => r.prepTime + r.cookTime <= 20 },
    { id: 'italian', label: lang === 'ru' ? 'Итальянское' : lang === 'en' ? 'Italian' : 'Italiaans', match: (r: Recipe) => r.tags.includes('italian') || r.tags.includes('italiaans') },
  ]

  const filtered = recipes.filter((r) => {
    const q = search.toLowerCase()
    const filter = filters.find(item => item.id === activeFilter)
    return (
      (!filter || filter.match(r)) &&
      (
        r.title[lang].toLowerCase().includes(q) ||
        r.description[lang].toLowerCase().includes(q) ||
        r.tags.some(tag => tag.toLowerCase().includes(q))
      )
    )
  })

  const selectedRecipes = useMemo(
    () => recipes.filter(recipe => shoppingRecipes.includes(recipe.slug)),
    [shoppingRecipes]
  )

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerDecor}>✦</div>
          <h1 className={styles.siteTitle}>{ui.siteTitle}</h1>
          <p className={styles.siteSubtitle}>{ui.siteSubtitle}</p>
          <div className={styles.headerDecor}>✦</div>

          {/* Language switcher */}
          <div className={styles.langSwitcher}>
            {(['nl', 'en', 'ru'] as Language[]).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`${styles.langBtn} ${lang === l ? styles.langBtnActive : ''}`}
                aria-label={`Switch to ${l}`}
                title={l.toUpperCase()}
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

      {/* Search */}
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder={ui.searchPlaceholder}
          value={search}
          onChange={e => setSearch(e.target.value)}
          className={styles.searchInput}
        />
        <div className={styles.filterBar}>
          {filters.map(filter => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`${styles.filterBtn} ${activeFilter === filter.id ? styles.filterBtnActive : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className={styles.shoppingToolbar}>
          <span>
            {shoppingRecipes.length === 0
              ? lang === 'en' ? 'Select recipes for a shopping list' : lang === 'ru' ? 'Выберите рецепты для списка покупок' : 'Selecteer recepten voor een boodschappenlijst'
              : `${shoppingRecipes.length} ${lang === 'en' ? 'selected' : lang === 'ru' ? 'выбрано' : 'geselecteerd'}`}
          </span>
          <button
            type="button"
            className={styles.shoppingBtn}
            onClick={() => setShowShoppingList(true)}
            disabled={shoppingRecipes.length === 0}
          >
            {lang === 'en' ? 'Shopping list' : lang === 'ru' ? 'Список покупок' : 'Boodschappenlijst'}
          </button>
        </div>
      </div>

      {/* Recipe grid */}
      <main className={styles.main}>
        {filtered.length === 0 ? (
          <p className={styles.noResults}>{ui.noResults}</p>
        ) : (
          <div className={styles.grid}>
            {filtered.map(recipe => (
              <article key={recipe.id} className={styles.card}>
                <div className={styles.cardActions}>
                  <button
                    type="button"
                    className={`${styles.iconBtn} ${isFavorite(recipe) ? styles.iconBtnActive : ''}`}
                    onClick={() => toggleFavorite(recipe.slug)}
                    aria-label={isFavorite(recipe) ? 'Remove favorite' : 'Add favorite'}
                    title={lang === 'en' ? 'Favorite' : lang === 'ru' ? 'Избранное' : 'Favoriet'}
                  >
                    ★
                  </button>
                  <label className={styles.cardCheck} title={lang === 'en' ? 'Add to shopping list' : lang === 'ru' ? 'Добавить в список покупок' : 'Naar boodschappenlijst'}>
                    <input
                      type="checkbox"
                      checked={isSelectedForShopping(recipe)}
                      onChange={() => toggleShoppingRecipe(recipe.slug)}
                    />
                    <span />
                  </label>
                </div>
                <Link href={`/recipe/${recipe.slug}?lang=${lang}`} className={styles.cardLink}>
                  {recipe.image ? (
                    <div className={styles.cardImage}>
                      <Image src={recipe.image} alt={recipe.title[lang]} fill style={{ objectFit: 'cover' }} sizes="(max-width: 600px) 100vw, 400px" />
                    </div>
                  ) : (
                    <div className={styles.cardEmoji}>{recipe.emoji}</div>
                  )}
                  <div className={styles.cardCategory}>{recipe.category[lang]}</div>
                  <h2 className={styles.cardTitle}>{recipe.title[lang]}</h2>
                  <p className={styles.cardDesc}>{recipe.description[lang]}</p>
                  <div className={styles.cardMeta}>
                    <span>{recipe.prepTime + recipe.cookTime} {ui.minutes}</span>
                    <span>{recipe.servings} {ui.servings}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>

      {showShoppingList && (
        <div className={styles.modalBackdrop} role="dialog" aria-modal="true">
          <div className={styles.shoppingPanel}>
            <div className={styles.panelHeader}>
              <h2>{lang === 'en' ? 'Shopping list' : lang === 'ru' ? 'Список покупок' : 'Boodschappenlijst'}</h2>
              <button type="button" className={styles.closeBtn} onClick={() => setShowShoppingList(false)}>×</button>
            </div>
            <div className={styles.printArea}>
              {selectedRecipes.map(recipe => (
                <section key={recipe.id} className={styles.shoppingRecipe}>
                  <h3>{recipe.title[lang]}</h3>
                  <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>
                        <span>{ingredient.amount}{ingredient.unit ? ` ${ingredient.unit}` : ''}</span>
                        {ingredient.name[lang]}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
            <div className={styles.panelActions}>
              <button type="button" className={styles.secondaryBtn} onClick={() => setShoppingRecipes([])}>
                {lang === 'en' ? 'Clear' : lang === 'ru' ? 'Очистить' : 'Leegmaken'}
              </button>
              <button type="button" className={styles.primaryBtn} onClick={() => window.print()}>
                {lang === 'en' ? 'Print' : lang === 'ru' ? 'Печать' : 'Printen'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={styles.footer}>
        <p>Familie Deurloo · {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
