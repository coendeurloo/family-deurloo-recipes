# Family Deurloo Recipes

A trilingual (Dutch / English / Russian) family recipe website built with Next.js, deployable on Vercel.

---

## 🚀 Deploy to Vercel

1. Push this folder to a GitHub repository (public or private)
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**
3. Import your GitHub repository
4. Leave all settings as default — Vercel auto-detects Next.js
5. Click **Deploy**

Your site will be live on a `.vercel.app` URL within ~1 minute.

### Connect your own domain

1. In Vercel dashboard → your project → **Settings → Domains**
2. Add your domain name
3. Follow the DNS instructions Vercel shows you (usually add an A record or CNAME at your domain registrar)

---

## ➕ Adding new recipes

All recipes live in one file: `src/data/recipes.ts`

To add a new recipe, copy one of the existing recipe objects in the `recipes` array and fill in your content. Each recipe needs:

```ts
{
  id: '5',                        // unique number, increment from last
  slug: 'my-recipe-name',         // URL-friendly name, lowercase, dashes only
  emoji: '🍝',                    // one emoji for the card
  category: {
    nl: 'Pasta', en: 'Pasta', ru: 'Паста'
  },
  tags: ['pasta', 'italian'],     // for search
  title: {
    nl: 'Mijn recept',
    en: 'My recipe',
    ru: 'Мой рецепт',
  },
  description: { nl: '...', en: '...', ru: '...' },
  servings: 4,                    // base serving size
  prepTime: 15,                   // minutes
  cookTime: 20,                   // minutes
  equipment: [
    { nl: 'Pan', en: 'Pan', ru: 'Сковорода' },
    // add more items...
  ],
  ingredients: [
    {
      amount: 200,
      unit: 'g',        // g, ml, kg, l, el (tbsp), tl (tsp), or null for whole items
      name: { nl: 'pasta', en: 'pasta', ru: 'паста' }
    },
    // add more ingredients...
  ],
  steps: [
    {
      title: { nl: 'Stap 1', en: 'Step 1', ru: 'Шаг 1' },
      description: { nl: '...', en: '...', ru: '...' }
    },
    // add more steps...
  ],
  notes: {
    nl: 'Optionele tips...',
    en: 'Optional tips...',
    ru: 'Необязательные советы...'
  }
}
```

After saving the file, commit and push to GitHub — Vercel deploys automatically within ~30 seconds.

---

## 🌐 Languages

The site supports Dutch (`nl`), English (`en`), and Russian (`ru`). The language selector appears on every page. UI strings can be extended in `src/lib/i18n.ts`.

## 📦 Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules** (no external UI library)
- **Google Fonts** — Playfair Display + Lora
- Deployed on **Vercel** (free tier is sufficient)
