import { Language } from '../data/recipes'

export const ui = {
  nl: {
    siteTitle: 'Familie Deurloo Recepten',
    siteSubtitle: 'Onze favoriete gerechten, altijd bij de hand',
    allRecipes: 'Alle recepten',
    backToRecipes: '← Terug naar recepten',
    ingredients: 'Ingrediënten',
    equipment: 'Benodigd keukengerei',
    steps: 'Bereidingswijze',
    notes: 'Tips & opmerkingen',
    servings: 'porties',
    prepTime: 'Voorbereidingstijd',
    cookTime: 'Bereidingstijd',
    minutes: 'min',
    searchPlaceholder: 'Zoek een recept...',
    noResults: 'Geen recepten gevonden.',
    unit_el: 'el',
    unit_tl: 'tl',
    unit_g: 'g',
    unit_ml: 'ml',
    unit_kg: 'kg',
    unit_l: 'l',
  },
  en: {
    siteTitle: 'Family Deurloo Recipes',
    siteSubtitle: 'Our favourite dishes, always at hand',
    allRecipes: 'All recipes',
    backToRecipes: '← Back to recipes',
    ingredients: 'Ingredients',
    equipment: 'Kitchen equipment',
    steps: 'Method',
    notes: 'Tips & notes',
    servings: 'servings',
    prepTime: 'Prep time',
    cookTime: 'Cook time',
    minutes: 'min',
    searchPlaceholder: 'Search a recipe...',
    noResults: 'No recipes found.',
    unit_el: 'tbsp',
    unit_tl: 'tsp',
    unit_g: 'g',
    unit_ml: 'ml',
    unit_kg: 'kg',
    unit_l: 'l',
  },
  ru: {
    siteTitle: 'Рецепты семьи Дурлоо',
    siteSubtitle: 'Наши любимые блюда — всегда под рукой',
    allRecipes: 'Все рецепты',
    backToRecipes: '← Назад к рецептам',
    ingredients: 'Ингредиенты',
    equipment: 'Кухонные принадлежности',
    steps: 'Способ приготовления',
    notes: 'Советы и примечания',
    servings: 'порции',
    prepTime: 'Время подготовки',
    cookTime: 'Время приготовления',
    minutes: 'мин',
    searchPlaceholder: 'Найти рецепт...',
    noResults: 'Рецепты не найдены.',
    unit_el: 'ст.л.',
    unit_tl: 'ч.л.',
    unit_g: 'г',
    unit_ml: 'мл',
    unit_kg: 'кг',
    unit_l: 'л',
  },
}

export type UIStrings = typeof ui.en

export function t(lang: Language): UIStrings {
  return ui[lang]
}

export function translateUnit(unit: string | null, lang: Language): string {
  if (!unit) return ''
  const key = `unit_${unit}` as keyof UIStrings
  return ui[lang][key] || unit
}
