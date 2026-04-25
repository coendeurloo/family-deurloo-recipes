'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { recipes } from '@/data/recipes'
import { t } from '@/lib/i18n'
import type { Language } from '@/data/recipes'
import styles from './page.module.css'

export default function Home() {
  const [lang, setLang] = useState<Language>('nl')
  const [search, setSearch] = useState('')
  const ui = t(lang)

  const filtered = recipes.filter(r => {
    const q = search.toLowerCase()
    return (
      r.title[lang].toLowerCase().includes(q) ||
      r.description[lang].toLowerCase().includes(q) ||
      r.tags.some(tag => tag.toLowerCase().includes(q))
    )
  })

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
                {l === 'nl' ? '🇳🇱' : l === 'en' ? '🇬🇧' : '🇷🇺'}
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
      </div>

      {/* Recipe grid */}
      <main className={styles.main}>
        {filtered.length === 0 ? (
          <p className={styles.noResults}>{ui.noResults}</p>
        ) : (
          <div className={styles.grid}>
            {filtered.map(recipe => (
              <Link
                key={recipe.id}
                href={`/recipe/${recipe.slug}?lang=${lang}`}
                className={styles.card}
              >
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
                  <span>⏱ {recipe.prepTime + recipe.cookTime} {ui.minutes}</span>
                  <span>👤 {recipe.servings} {ui.servings}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>Familie Deurloo · {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
