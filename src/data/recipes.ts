export type Language = 'nl' | 'en' | 'ru'

export interface Ingredient {
  amount: number
  unit: string | null
  name: { nl: string; en: string; ru: string }
}

export interface Step {
  title: { nl: string; en: string; ru: string }
  description: { nl: string; en: string; ru: string }
}

export interface Recipe {
  id: string
  slug: string
  category: { nl: string; en: string; ru: string }
  title: { nl: string; en: string; ru: string }
  description: { nl: string; en: string; ru: string }
  servings: number
  prepTime: number   // minutes
  cookTime: number   // minutes
  equipment: { nl: string; en: string; ru: string }[]
  ingredients: Ingredient[]
  steps: Step[]
  notes: { nl: string; en: string; ru: string }
  tags: string[]
  emoji: string
}

export const recipes: Recipe[] = [
  {
    id: '1',
    slug: 'honey-garlic-soy',
    emoji: '🍯',
    category: { nl: 'Kip', en: 'Chicken', ru: 'Курица' },
    tags: ['kip', 'chicken', 'marinade', 'airfryer'],
    title: {
      nl: 'Honing Knoflook Soja',
      en: 'Honey Garlic Soy',
      ru: 'Мёд, чеснок и соевый соус',
    },
    description: {
      nl: 'Een van de populairste marinades ter wereld — zoet, hartig en ontzettend lekker. Perfect voor kipfilet uit de airfryer.',
      en: 'One of the most popular marinades worldwide — sweet, savory, and deeply satisfying. Perfect for airfryer chicken breasts.',
      ru: 'Один из самых популярных маринадов в мире — сладкий, пикантный и невероятно вкусный. Идеально подходит для куриного филе в аэрогриле.',
    },
    servings: 3,
    prepTime: 10,
    cookTime: 12,
    equipment: [
      { nl: 'Airfryer', en: 'Air fryer', ru: 'Аэрогриль' },
      { nl: 'Mengkom', en: 'Mixing bowl', ru: 'Миска' },
      { nl: 'Ziplock zak of bakje met deksel', en: 'Zip-lock bag or container with lid', ru: 'Пакет с застёжкой или контейнер с крышкой' },
      { nl: 'Keukenthermometer', en: 'Meat thermometer', ru: 'Кухонный термометр' },
      { nl: 'Snijplank en mes', en: 'Cutting board and knife', ru: 'Разделочная доска и нож' },
    ],
    ingredients: [
      { amount: 500, unit: 'g', name: { nl: 'kipfilet', en: 'chicken breasts', ru: 'куриное филе' } },
      { amount: 3, unit: 'el', name: { nl: 'sojasaus', en: 'soy sauce', ru: 'соевый соус' } },
      { amount: 2, unit: 'el', name: { nl: 'honing', en: 'honey', ru: 'мёд' } },
      { amount: 1, unit: 'el', name: { nl: 'olijfolie', en: 'olive oil', ru: 'оливковое масло' } },
      { amount: 3, unit: null, name: { nl: 'teentjes knoflook, fijngehakt', en: 'garlic cloves, minced', ru: 'зубчика чеснока, измельчённых' } },
      { amount: 1, unit: 'el', name: { nl: 'appelciderazijn', en: 'apple cider vinegar', ru: 'яблочный уксус' } },
      { amount: 1, unit: 'tl', name: { nl: 'sesamolie', en: 'sesame oil', ru: 'кунжутное масло' } },
    ],
    steps: [
      {
        title: { nl: 'Kip op dikte snijden', en: 'Even the chicken thickness', ru: 'Нарезать куриное филе' },
        description: {
          nl: 'Snijd elke kipfilet horizontaal zodat ze ongeveer even dik zijn (±2 cm). Dit zorgt voor een gelijkmatige garing in de airfryer.',
          en: 'Slice each breast horizontally so they are roughly even in thickness (about 2 cm). This ensures even cooking in the air fryer.',
          ru: 'Разрежьте каждое филе горизонтально на равные части толщиной около 2 см. Это обеспечит равномерное приготовление в аэрогриле.',
        },
      },
      {
        title: { nl: 'Marinade maken', en: 'Make the marinade', ru: 'Приготовить маринад' },
        description: {
          nl: 'Meng de sojasaus, honing, olijfolie, knoflook, azijn en sesamolie in een kom totdat de honing volledig is opgelost.',
          en: 'Whisk together the soy sauce, honey, olive oil, garlic, vinegar and sesame oil until the honey is fully dissolved.',
          ru: 'Смешайте соевый соус, мёд, оливковое масло, чеснок, уксус и кунжутное масло до полного растворения мёда.',
        },
      },
      {
        title: { nl: 'Marineren', en: 'Marinate', ru: 'Мариновать' },
        description: {
          nl: 'Doe de kip in een ziplock zak of bakje, voeg de marinade toe en zorg dat alle stukken goed bedekt zijn. Sluit af en zet minimaal 2 uur in de koelkast, het liefst een nacht.',
          en: 'Add the chicken to a zip-lock bag or container, pour in the marinade, and make sure all pieces are well coated. Seal and refrigerate for at least 2 hours, ideally overnight.',
          ru: 'Поместите курицу в пакет или контейнер, залейте маринадом и убедитесь, что все кусочки хорошо покрыты. Закройте и уберите в холодильник минимум на 2 часа, лучше на ночь.',
        },
      },
      {
        title: { nl: 'Bakken in de airfryer', en: 'Air fry', ru: 'Готовить в аэрогриле' },
        description: {
          nl: 'Verwarm de airfryer voor op 200°C. Bak 10–12 minuten, halverwege omdraaien. De kip is gaar als de kerntemperatuur 75°C bereikt.',
          en: 'Preheat the air fryer to 200°C. Cook for 10–12 minutes, flipping halfway. The chicken is done when the internal temperature reaches 75°C.',
          ru: 'Разогрейте аэрогриль до 200°C. Готовьте 10–12 минут, перевернув на полпути. Курица готова, когда внутренняя температура достигает 75°C.',
        },
      },
    ],
    notes: {
      nl: 'Voor invriezen: doe de kip met marinade in een ziplock zak en vries in. De kip marineert terwijl hij\'s nachts in de koelkast ontdooit — heel handig!',
      en: 'For freezer storage: seal the chicken in a zip-lock bag with the marinade already added. It marinates as it thaws in the fridge overnight — very convenient.',
      ru: 'Для заморозки: поместите курицу с маринадом в пакет и заморозьте. Курица маринуется, пока оттаивает в холодильнике ночью — очень удобно!',
    },
  },
  {
    id: '2',
    slug: 'lemon-herb-mediterranean',
    emoji: '🍋',
    category: { nl: 'Kip', en: 'Chicken', ru: 'Курица' },
    tags: ['kip', 'chicken', 'marinade', 'airfryer', 'mediterraan', 'mediterranean'],
    title: {
      nl: 'Citroen Kruiden (Mediterraans)',
      en: 'Lemon Herb (Mediterranean)',
      ru: 'Лимон и травы (средиземноморский)',
    },
    description: {
      nl: 'Een mediterraans klassiekertje — fris, kruidig en ontzettend veelzijdig. Consequent hoog gewaardeerd als een van de lekkerste kipmarinades.',
      en: 'A Mediterranean classic — bright, herby, and incredibly versatile. Consistently rated as one of the most crowd-pleasing marinades for chicken.',
      ru: 'Средиземноморская классика — свежий, ароматный и невероятно универсальный маринад. Неизменно входит в топ самых популярных маринадов для курицы.',
    },
    servings: 3,
    prepTime: 10,
    cookTime: 12,
    equipment: [
      { nl: 'Airfryer', en: 'Air fryer', ru: 'Аэрогриль' },
      { nl: 'Mengkom of ziplock zak', en: 'Mixing bowl or zip-lock bag', ru: 'Миска или пакет с застёжкой' },
      { nl: 'Citruspers', en: 'Citrus juicer', ru: 'Соковыжималка для цитрусовых' },
      { nl: 'Rasp (voor de schil)', en: 'Zester / grater (for the zest)', ru: 'Тёрка (для цедры)' },
      { nl: 'Keukenthermometer', en: 'Meat thermometer', ru: 'Кухонный термометр' },
      { nl: 'Snijplank en mes', en: 'Cutting board and knife', ru: 'Разделочная доска и нож' },
    ],
    ingredients: [
      { amount: 500, unit: 'g', name: { nl: 'kipfilet', en: 'chicken breasts', ru: 'куриное филе' } },
      { amount: 4, unit: 'el', name: { nl: 'olijfolie', en: 'olive oil', ru: 'оливковое масло' } },
      { amount: 1, unit: null, name: { nl: 'citroen (sap en rasp)', en: 'lemon (juice and zest)', ru: 'лимон (сок и цедра)' } },
      { amount: 3, unit: null, name: { nl: 'teentjes knoflook, fijngehakt', en: 'garlic cloves, minced', ru: 'зубчика чеснока, измельчённых' } },
      { amount: 1, unit: 'tl', name: { nl: 'gedroogde oregano', en: 'dried oregano', ru: 'сушёный орегано' } },
      { amount: 1, unit: 'tl', name: { nl: 'gedroogde tijm', en: 'dried thyme', ru: 'сушёный тимьян' } },
      { amount: 1, unit: 'tl', name: { nl: 'Dijonmosterd', en: 'Dijon mustard', ru: 'дижонская горчица' } },
      { amount: 1, unit: 'tl', name: { nl: 'zout', en: 'salt', ru: 'соль' } },
      { amount: 0.5, unit: 'tl', name: { nl: 'zwarte peper', en: 'black pepper', ru: 'чёрный перец' } },
    ],
    steps: [
      {
        title: { nl: 'Kip voorbereiden', en: 'Prep the chicken', ru: 'Подготовить курицу' },
        description: {
          nl: 'Snijd elke kipfilet horizontaal tot een dikte van ±2 cm.',
          en: 'Slice each breast horizontally to an even thickness of about 2 cm.',
          ru: 'Разрежьте каждое филе горизонтально до толщины около 2 см.',
        },
      },
      {
        title: { nl: 'Marinade maken', en: 'Make the marinade', ru: 'Приготовить маринад' },
        description: {
          nl: 'Meng olijfolie, citroensap en -rasp, knoflook, oregano, tijm, mosterd, zout en peper in een kom of direct in een ziplock zak.',
          en: 'Mix together olive oil, lemon juice and zest, garlic, oregano, thyme, mustard, salt and pepper in a bowl or directly in a zip-lock bag.',
          ru: 'Смешайте оливковое масло, лимонный сок и цедру, чеснок, орегано, тимьян, горчицу, соль и перец в миске или прямо в пакете.',
        },
      },
      {
        title: { nl: 'Marineren', en: 'Marinate', ru: 'Мариновать' },
        description: {
          nl: 'Voeg de kip toe aan de marinade, goed bedekken, afsluiten en minimaal 2 uur in de koelkast zetten (een nacht is het best).',
          en: 'Add the chicken to the marinade, coat well, seal, and refrigerate for at least 2 hours — overnight is best.',
          ru: 'Добавьте курицу к маринаду, хорошо покройте, закройте и уберите в холодильник минимум на 2 часа — лучше на ночь.',
        },
      },
      {
        title: { nl: 'Bakken in de airfryer', en: 'Air fry', ru: 'Готовить в аэрогриле' },
        description: {
          nl: 'Bak op 200°C gedurende 10–12 minuten, halverwege omdraaien. Laat 3 minuten rusten voor het snijden.',
          en: 'Air fry at 200°C for 10–12 minutes, flipping halfway. Rest for 3 minutes before slicing.',
          ru: 'Готовьте при 200°C в течение 10–12 минут, перевернув на полпути. Дайте отдохнуть 3 минуты перед нарезкой.',
        },
      },
    ],
    notes: {
      nl: 'Heerlijk over een salade of in een wrap. Kan ook prima worden ingevroren — voeg de marinade voor het invriezen al toe.',
      en: 'Especially good sliced over a salad or in a wrap. Freezes beautifully — add the marinade before freezing.',
      ru: 'Прекрасно подходит для салата или ролла. Отлично замораживается — добавьте маринад перед заморозкой.',
    },
  },
  {
    id: '3',
    slug: 'shawarma-warm-spices',
    emoji: '🧄',
    category: { nl: 'Kip', en: 'Chicken', ru: 'Курица' },
    tags: ['kip', 'chicken', 'marinade', 'airfryer', 'shawarma', 'midden-oosten', 'middle eastern'],
    title: {
      nl: 'Shawarma Stijl (Warme Kruiden)',
      en: 'Shawarma-Style (Warm Spices)',
      ru: 'Шаурма (тёплые специи)',
    },
    description: {
      nl: 'Geïnspireerd op de wereldberoemde shawarma — warme kruiden zoals komijn en koriander geven enorm veel smaak zonder ook maar een beetje pikant te zijn.',
      en: 'Inspired by the globally beloved shawarma — warm spices like cumin and coriander give massive flavor without any heat. A family favorite everywhere.',
      ru: 'Вдохновлено всемирно известной шаурмой — тёплые специи, такие как тмин и кориандр, придают невероятный вкус без остроты. Семейный любимец везде.',
    },
    servings: 3,
    prepTime: 15,
    cookTime: 12,
    equipment: [
      { nl: 'Airfryer', en: 'Air fryer', ru: 'Аэрогриль' },
      { nl: 'Mengkom', en: 'Mixing bowl', ru: 'Миска' },
      { nl: 'Ziplock zak of bakje met deksel', en: 'Zip-lock bag or container with lid', ru: 'Пакет с застёжкой или контейнер с крышкой' },
      { nl: 'Keukenthermometer', en: 'Meat thermometer', ru: 'Кухонный термометр' },
      { nl: 'Snijplank en mes', en: 'Cutting board and knife', ru: 'Разделочная доска и нож' },
    ],
    ingredients: [
      { amount: 500, unit: 'g', name: { nl: 'kipfilet', en: 'chicken breasts', ru: 'куриное филе' } },
      { amount: 3, unit: 'el', name: { nl: 'olijfolie', en: 'olive oil', ru: 'оливковое масло' } },
      { amount: 2, unit: 'el', name: { nl: 'volle yoghurt', en: 'plain yogurt', ru: 'натуральный йогурт' } },
      { amount: 1, unit: null, name: { nl: 'citroen (sap)', en: 'lemon (juice only)', ru: 'лимон (только сок)' } },
      { amount: 2, unit: null, name: { nl: 'teentjes knoflook, fijngehakt', en: 'garlic cloves, minced', ru: 'зубчика чеснока, измельчённых' } },
      { amount: 1, unit: 'tl', name: { nl: 'gemalen komijn', en: 'ground cumin', ru: 'молотый тмин' } },
      { amount: 1, unit: 'tl', name: { nl: 'gemalen koriander', en: 'ground coriander', ru: 'молотый кориандр' } },
      { amount: 0.5, unit: 'tl', name: { nl: 'kurkuma', en: 'turmeric', ru: 'куркума' } },
      { amount: 0.5, unit: 'tl', name: { nl: 'kaneel', en: 'cinnamon', ru: 'корица' } },
      { amount: 1, unit: 'tl', name: { nl: 'zout', en: 'salt', ru: 'соль' } },
    ],
    steps: [
      {
        title: { nl: 'Kip voorbereiden', en: 'Prep the chicken', ru: 'Подготовить курицу' },
        description: {
          nl: 'Snijd elke kipfilet horizontaal tot een dikte van ±2 cm.',
          en: 'Slice each breast horizontally to about 2 cm thickness.',
          ru: 'Разрежьте каждое филе горизонтально до толщины около 2 см.',
        },
      },
      {
        title: { nl: 'Marinade maken', en: 'Make the marinade', ru: 'Приготовить маринад' },
        description: {
          nl: 'Meng olijfolie, yoghurt, citroensap, knoflook, komijn, koriander, kurkuma, kaneel en zout tot een gladde pasta.',
          en: 'Combine olive oil, yogurt, lemon juice, garlic, cumin, coriander, turmeric, cinnamon and salt and mix into a smooth paste.',
          ru: 'Смешайте оливковое масло, йогурт, лимонный сок, чеснок, тмин, кориандр, куркуму, корицу и соль до однородной пасты.',
        },
      },
      {
        title: { nl: 'Marineren', en: 'Marinate', ru: 'Мариновать' },
        description: {
          nl: 'Bedek de kip goed met de marinade, sluit af en zet minimaal 3 uur in de koelkast. Een nacht geeft het beste resultaat.',
          en: 'Coat the chicken thoroughly, seal, and refrigerate for at least 3 hours — overnight is best for this one.',
          ru: 'Тщательно покройте курицу маринадом, закройте и уберите в холодильник минимум на 3 часа — лучше на ночь.',
        },
      },
      {
        title: { nl: 'Bakken in de airfryer', en: 'Air fry', ru: 'Готовить в аэрогриле' },
        description: {
          nl: 'Bak op 195°C gedurende 12 minuten, halverwege omdraaien. De yoghurtlaag moet lichtgoud zijn en net gestold.',
          en: 'Air fry at 195°C for 12 minutes, flipping halfway. The yogurt coating should be lightly golden and just set.',
          ru: 'Готовьте при 195°C в течение 12 минут, перевернув на полпути. Йогуртовое покрытие должно стать светло-золотистым.',
        },
      },
    ],
    notes: {
      nl: 'De yoghurt maakt het vlees malser en houdt het sappig in de airfryer. Rauw met marinade kan ook worden ingevroren — tot 3 maanden houdbaar.',
      en: 'The yogurt tenderizes the breast meat and keeps it moist in the air fryer. Freeze before cooking — raw marinated chicken keeps up to 3 months.',
      ru: 'Йогурт делает мясо нежнее и сохраняет сочность в аэрогриле. Можно заморозить до готовки — сырая маринованная курица хранится до 3 месяцев.',
    },
  },
  {
    id: '4',
    slug: 'smoky-bbq',
    emoji: '🔥',
    category: { nl: 'Kip', en: 'Chicken', ru: 'Курица' },
    tags: ['kip', 'chicken', 'marinade', 'airfryer', 'bbq'],
    title: {
      nl: 'Rokerige BBQ',
      en: 'Smoky BBQ',
      ru: 'Копчёный BBQ',
    },
    description: {
      nl: 'Rijk, lichtzoet en rokerig — deze BBQ-marinade is een eeuwige publiekslieveling en werkt fantastisch in de airfryer.',
      en: 'Rich, slightly sweet, and smoky — this BBQ-style marinade is a perennial crowd-pleaser that works brilliantly in the air fryer.',
      ru: 'Насыщенный, слегка сладкий и дымный — этот BBQ-маринад вечно любим всеми и прекрасно работает в аэрогриле.',
    },
    servings: 3,
    prepTime: 10,
    cookTime: 12,
    equipment: [
      { nl: 'Airfryer', en: 'Air fryer', ru: 'Аэрогриль' },
      { nl: 'Mengkom', en: 'Mixing bowl', ru: 'Миска' },
      { nl: 'Ziplock zak of bakje met deksel', en: 'Zip-lock bag or container with lid', ru: 'Пакет с застёжкой или контейнер с крышкой' },
      { nl: 'Keukenthermometer', en: 'Meat thermometer', ru: 'Кухонный термометр' },
      { nl: 'Snijplank en mes', en: 'Cutting board and knife', ru: 'Разделочная доска и нож' },
    ],
    ingredients: [
      { amount: 500, unit: 'g', name: { nl: 'kipfilet', en: 'chicken breasts', ru: 'куриное филе' } },
      { amount: 3, unit: 'el', name: { nl: 'ketchup', en: 'ketchup', ru: 'кетчуп' } },
      { amount: 2, unit: 'el', name: { nl: 'Worcestershiresaus', en: 'Worcestershire sauce', ru: 'соус Вустершир' } },
      { amount: 1, unit: 'el', name: { nl: 'honing', en: 'honey', ru: 'мёд' } },
      { amount: 1, unit: 'el', name: { nl: 'bruine suiker', en: 'brown sugar', ru: 'коричневый сахар' } },
      { amount: 2, unit: 'el', name: { nl: 'olijfolie', en: 'olive oil', ru: 'оливковое масло' } },
      { amount: 2, unit: null, name: { nl: 'teentjes knoflook, fijngehakt', en: 'garlic cloves, minced', ru: 'зубчика чеснока, измельчённых' } },
      { amount: 1, unit: 'tl', name: { nl: 'gerookt paprikapoeder', en: 'smoked paprika', ru: 'копчёная паприка' } },
      { amount: 0.5, unit: 'tl', name: { nl: 'zout', en: 'salt', ru: 'соль' } },
    ],
    steps: [
      {
        title: { nl: 'Kip voorbereiden', en: 'Prep the chicken', ru: 'Подготовить курицу' },
        description: {
          nl: 'Snijd elke kipfilet horizontaal tot een dikte van ±2 cm.',
          en: 'Slice each breast horizontally to about 2 cm thickness.',
          ru: 'Разрежьте каждое филе горизонтально до толщины около 2 см.',
        },
      },
      {
        title: { nl: 'Marinade maken', en: 'Make the marinade', ru: 'Приготовить маринад' },
        description: {
          nl: 'Meng ketchup, Worcestershiresaus, honing, bruine suiker, olijfolie, knoflook, gerookt paprikapoeder en zout tot een gladde marinade.',
          en: 'Mix together ketchup, Worcestershire sauce, honey, brown sugar, olive oil, garlic, smoked paprika and salt until smooth.',
          ru: 'Смешайте кетчуп, Вустерширский соус, мёд, коричневый сахар, оливковое масло, чеснок, копчёную паприку и соль до однородности.',
        },
      },
      {
        title: { nl: 'Marineren', en: 'Marinate', ru: 'Мариновать' },
        description: {
          nl: 'Bedek de kip goed met de marinade, sluit af en zet minimaal 2 uur in de koelkast.',
          en: 'Coat the chicken well, seal in a bag or container, and marinate in the fridge for at least 2 hours.',
          ru: 'Хорошо покройте курицу маринадом, закройте и маринуйте в холодильнике минимум 2 часа.',
        },
      },
      {
        title: { nl: 'Bakken in de airfryer', en: 'Air fry', ru: 'Готовить в аэрогриле' },
        description: {
          nl: 'Bak op 195°C gedurende 10–12 minuten, halverwege omdraaien. Let goed op de laatste 2 minuten — het suiker karameliseert snel.',
          en: 'Air fry at 195°C for 10–12 minutes, flipping halfway. Watch closely in the last 2 minutes as the sugars caramelize fast.',
          ru: 'Готовьте при 195°C в течение 10–12 минут, перевернув на полпути. Следите последние 2 минуты — сахар быстро карамелизуется.',
        },
      },
    ],
    notes: {
      nl: 'Door het suikergehalte kan dit snel aanbranden in de airfryer. Houd het in de gaten! Perfect voor de koelkastporties die je binnen 2–3 dagen wilt gebruiken.',
      en: 'Because of the sugar content, keep an eye on it in the air fryer — it can catch quickly. Great for the fridge portions you plan to use within 2–3 days.',
      ru: 'Из-за содержания сахара следите за блюдом в аэрогриле — оно может быстро пригореть. Отлично подходит для порций в холодильнике, которые вы планируете использовать в течение 2–3 дней.',
    },
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD A NEW RECIPE
// ─────────────────────────────────────────────────────────────────────────────
// 1. Copy the template below into the recipes array above (before the closing `]`)
// 2. Give it the next id ("5", "6", …) and a unique slug (lowercase, hyphens)
// 3. Fill in all three languages: nl, en, ru
// 4. servings: 3 = default for Familie Deurloo (2 adults + 1 child, age 10)
// 5. Units for ingredients: 'el' (tablespoon), 'tl' (teaspoon), 'g', 'ml', 'kg', 'l'
//    Use null for unitless items (e.g. garlic cloves, eggs)
//
// TEMPLATE:
// ─────────────────────────────────────────────────────────────────────────────
// {
//   id: '5',
//   slug: 'your-recipe-slug',
//   emoji: '🍽️',
//   category: { nl: '...', en: '...', ru: '...' },
//   tags: ['tag1', 'tag2'],
//   title: { nl: '...', en: '...', ru: '...' },
//   description: { nl: '...', en: '...', ru: '...' },
//   servings: 3,
//   prepTime: 10,   // minutes
//   cookTime: 20,   // minutes
//   equipment: [
//     { nl: '...', en: '...', ru: '...' },
//   ],
//   ingredients: [
//     { amount: 500, unit: 'g',  name: { nl: '...', en: '...', ru: '...' } },
//     { amount: 2,   unit: 'el', name: { nl: '...', en: '...', ru: '...' } },
//     { amount: 1,   unit: null, name: { nl: '...', en: '...', ru: '...' } },
//   ],
//   steps: [
//     {
//       title: { nl: '...', en: '...', ru: '...' },
//       description: { nl: '...', en: '...', ru: '...' },
//     },
//   ],
//   notes: { nl: '...', en: '...', ru: '...' },
// },
