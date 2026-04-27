export type Language = 'nl' | 'en' | 'ru'

export interface Ingredient {
  amount: number
  unit: string | null
  name: { nl: string; en: string; ru: string }
}

export interface Step {
  title: { nl: string; en: string; ru: string }
  description: { nl: string; en: string; ru: string }
  images?: string[]
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
  image?: string  // path relative to /public, e.g. '/images/honey-garlic-soy.jpg'
}

export const recipes: Recipe[] = [
  {
    id: '1',
    slug: 'honey-garlic-soy',
    emoji: '🍯',
    image: '/images/honey-garlic-soy.jpg',
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
    image: '/images/lemon-herb-mediterranean.jpg',
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
    image: '/images/shawarma-warm-spices.jpg',
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
    image: '/images/smoky-bbq.jpg',
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
  {
    id: '5',
    slug: 'carbonara',
    emoji: '🍝',
    image: 'https://www.recipetineats.com/tachyon/2023/01/Carbonara_3.jpg',
    category: { nl: 'Pasta', en: 'Pasta', ru: 'Паста' },
    tags: ['pasta', 'carbonara', 'italiaans', 'italian', 'spaghetti'],
    title: {
      nl: 'Carbonara',
      en: 'Carbonara',
      ru: 'Карбонара',
    },
    description: {
      nl: 'Klassieke carbonara zonder room: eieren, kaas, guanciale of spek en pastawater vormen samen een romige saus.',
      en: 'Classic carbonara without cream: eggs, cheese, guanciale or bacon and pasta water turn into a silky sauce.',
      ru: 'Классическая карбонара без сливок: яйца, сыр, гуанчале или бекон и вода от пасты превращаются в кремовый соус.',
    },
    servings: 4,
    prepTime: 5,
    cookTime: 15,
    equipment: [
      { nl: 'Grote kookpan', en: 'Large pot', ru: 'Большая кастрюля' },
      { nl: 'Koekenpan', en: 'Frying pan', ru: 'Сковорода' },
      { nl: 'Grote mengkom', en: 'Large mixing bowl', ru: 'Большая миска' },
      { nl: 'Rasp', en: 'Grater', ru: 'Тёрка' },
      { nl: 'Tang of houten lepel', en: 'Tongs or wooden spoon', ru: 'Щипцы или деревянная ложка' },
    ],
    ingredients: [
      { amount: 400, unit: 'g', name: { nl: 'spaghetti', en: 'spaghetti', ru: 'спагетти' } },
      { amount: 175, unit: 'g', name: { nl: 'guanciale, pancetta of spek', en: 'guanciale, pancetta or bacon', ru: 'гуанчале, панчетта или бекон' } },
      { amount: 2, unit: null, name: { nl: 'grote eieren', en: 'large eggs', ru: 'крупных яйца' } },
      { amount: 2, unit: null, name: { nl: 'eidooiers', en: 'egg yolks', ru: 'яичных желтка' } },
      { amount: 100, unit: 'g', name: { nl: 'Parmigiano Reggiano of Pecorino, fijn geraspt', en: 'Parmigiano Reggiano or Pecorino, finely grated', ru: 'Пармиджано Реджано или Пекорино, мелко натёртый' } },
      { amount: 0.25, unit: 'tl', name: { nl: 'zwarte peper', en: 'black pepper', ru: 'чёрный перец' } },
      { amount: 1, unit: 'el', name: { nl: 'zout voor het pastawater', en: 'salt for the pasta water', ru: 'соль для воды для пасты' } },
      { amount: 125, unit: 'ml', name: { nl: 'pastawater, bewaard na het koken', en: 'reserved pasta cooking water', ru: 'вода от варки пасты' } },
      { amount: 1, unit: null, name: { nl: 'teentje knoflook, fijngehakt (optioneel)', en: 'garlic clove, finely minced (optional)', ru: 'зубчик чеснока, мелко нарезанный (по желанию)' } },
    ],
    steps: [
      {
        title: { nl: 'Spek snijden', en: 'Cut the pork', ru: 'Нарезать мясо' },
        description: {
          nl: 'Snijd de guanciale, pancetta of spek in dikke reepjes zodat ze straks goudbruin bakken en nog beet houden.',
          en: 'Cut the guanciale, pancetta or bacon into chunky batons so they brown well and keep some bite.',
          ru: 'Нарежьте гуанчале, панчетту или бекон толстыми брусочками, чтобы они хорошо подрумянились.',
        },
        images: ['https://www.recipetineats.com/tachyon/2023/01/How-to-make-Carbonara-1c.jpg'],
      },
      {
        title: { nl: 'Kaas raspen', en: 'Grate the cheese', ru: 'Натереть сыр' },
        description: {
          nl: 'Rasp de kaas zo fijn mogelijk. Gebruik liever geen voorgeraspte kaas, want die smelt minder mooi in de saus.',
          en: 'Grate the cheese as finely as possible. Avoid pre-grated cheese because it does not melt as smoothly.',
          ru: 'Натрите сыр как можно мельче. Готовый тёртый сыр лучше не использовать: он хуже плавится.',
        },
        images: ['https://www.recipetineats.com/tachyon/2023/01/How-to-make-Carbonara-1a.jpg'],
      },
      {
        title: { nl: 'Saus mengen', en: 'Mix the sauce', ru: 'Смешать соус' },
        description: {
          nl: 'Klop de eieren en eidooiers los in een grote kom. Meng de geraspte kaas en zwarte peper erdoor.',
          en: 'Whisk the eggs and yolks in a large bowl. Stir in the grated cheese and black pepper.',
          ru: 'В большой миске взбейте яйца и желтки. Добавьте тёртый сыр и чёрный перец.',
        },
        images: ['https://www.recipetineats.com/tachyon/2023/01/How-to-make-Carbonara-1b.jpg'],
      },
      {
        title: { nl: 'Pasta koken', en: 'Cook the pasta', ru: 'Сварить пасту' },
        description: {
          nl: 'Kook de spaghetti in ruim gezouten water volgens de verpakking. Schep vlak voor het afgieten minimaal 125 ml pastawater apart.',
          en: 'Cook the spaghetti in plenty of salted water according to the packet. Reserve at least 125 ml pasta water before draining.',
          ru: 'Сварите спагетти в хорошо подсоленной воде по инструкции. Перед сливом сохраните минимум 125 мл воды.',
        },
        images: ['https://www.recipetineats.com/tachyon/2023/01/How-to-make-Carbonara-2d.jpg'],
      },
      {
        title: { nl: 'Spek bakken', en: 'Cook the pork', ru: 'Обжарить мясо' },
        description: {
          nl: 'Bak de reepjes in een droge koekenpan op middelhoog vuur tot ze goudbruin zijn. Voeg knoflook alleen de laatste minuut toe.',
          en: 'Cook the batons in a dry frying pan over medium-high heat until golden. Add garlic only during the final minute.',
          ru: 'Обжарьте брусочки на сухой сковороде до золотистого цвета. Чеснок добавляйте только в последнюю минуту.',
        },
        images: ['https://www.recipetineats.com/tachyon/2023/01/How-to-make-Carbonara-2a.jpg'],
      },
      {
        title: { nl: 'Pasta met vet mengen', en: 'Coat the pasta', ru: 'Смешать пасту с жиром' },
        description: {
          nl: 'Doe de hete spaghetti in de pan en meng kort met het uitgebakken vet. Schep daarna alles in de kom met ei-kaas-saus.',
          en: 'Toss the hot spaghetti in the pan with the rendered fat, then transfer everything into the bowl with the egg-cheese sauce.',
          ru: 'Перемешайте горячую пасту с вытопившимся жиром, затем переложите всё в миску с яично-сырным соусом.',
        },
        images: ['https://www.recipetineats.com/tachyon/2023/01/How-to-make-Carbonara-2b.jpg'],
      },
      {
        title: { nl: 'Romig roeren en serveren', en: 'Stir creamy and serve', ru: 'Перемешать до кремовой текстуры' },
        description: {
          nl: 'Voeg 125 ml pastawater toe en roer stevig 30 tot 60 seconden, van het vuur af, tot de saus glanst en aan de pasta hangt. Serveer direct.',
          en: 'Add 125 ml pasta water and stir vigorously off the heat for 30 to 60 seconds until the sauce turns glossy and clings to the pasta. Serve immediately.',
          ru: 'Добавьте 125 мл воды от пасты и энергично перемешивайте вне огня 30-60 секунд, пока соус не станет глянцевым. Подавайте сразу.',
        },
        images: ['https://www.recipetineats.com/tachyon/2023/01/How-to-make-Carbonara-2c.jpg'],
      },
    ],
    notes: {
      nl: 'Belangrijk: meng de ei-kaas-saus van het vuur af, anders krijg je roerei. Warm de borden alvast op; carbonara is het lekkerst direct uit de kom.',
      en: 'Important: mix the egg-cheese sauce off the heat or it can scramble. Warm the bowls first; carbonara is best served immediately.',
      ru: 'Важно: смешивайте яично-сырный соус вне огня, иначе яйца свернутся. Подавайте сразу, лучше в тёплых тарелках.',
    },
  },
  {
    id: '6',
    slug: 'smoky-bbq-kip-crunchy-aardappel-komkommersalade',
    emoji: '🍗',
    image: '/images/bbqkipaardappeltjeskomkommer.png',
    category: { nl: 'Kip', en: 'Chicken', ru: 'Курица' },
    tags: ['kip', 'chicken', 'bbq', 'oven', 'airfryer', 'aardappel', 'salade', 'kindvriendelijk'],
    title: {
      nl: 'Smoky BBQ kip met crunchy aardappelblokjes en frisse komkommersalade',
      en: 'Smoky BBQ chicken with crunchy potato cubes and cucumber salad',
      ru: 'Курица Smoky BBQ с хрустящим картофелем и свежим огуречным салатом',
    },
    description: {
      nl: 'Een complete, milde maaltijd met gekaramelliseerde BBQ-kip uit de oven, krokante aardappelblokjes uit de airfryer en een frisse komkommersalade.',
      en: 'A complete mild family meal with caramelized BBQ chicken from the oven, crispy air-fryer potato cubes, and a fresh cucumber salad.',
      ru: 'Полноценный мягкий семейный ужин: карамелизированная BBQ-курица из духовки, хрустящий картофель из аэрогриля и свежий огуречный салат.',
    },
    servings: 3,
    prepTime: 15,
    cookTime: 20,
    equipment: [
      { nl: 'Oven', en: 'Oven', ru: 'Духовка' },
      { nl: 'Airfryer', en: 'Air fryer', ru: 'Аэрогриль' },
      { nl: 'Bakplaat of rooster', en: 'Baking tray or rack', ru: 'Противень или решётка' },
      { nl: 'Mengkommen', en: 'Mixing bowls', ru: 'Миски' },
      { nl: 'Snijplank en mes', en: 'Cutting board and knife', ru: 'Разделочная доска и нож' },
    ],
    ingredients: [
      { amount: 375, unit: 'g', name: { nl: 'kipfilet of kippendij, in stukjes van ±4×3 cm', en: 'chicken breast or thigh, cut into pieces about 4×3 cm', ru: 'куриное филе или бедро, кусочками примерно 4×3 см' } },
      { amount: 1, unit: null, name: { nl: 'portie Smoky BBQ marinade, naar verhouding van het basisrecept', en: 'portion Smoky BBQ marinade, scaled from the base recipe', ru: 'порция маринада Smoky BBQ, пропорционально базовому рецепту' } },
      { amount: 350, unit: 'g', name: { nl: 'voorgegaarde aardappelblokjes', en: 'pre-cooked potato cubes', ru: 'предварительно отваренные картофельные кубики' } },
      { amount: 1, unit: 'el', name: { nl: 'zonnebloemolie', en: 'sunflower oil', ru: 'подсолнечное масло' } },
      { amount: 0.5, unit: 'tl', name: { nl: 'gerookt paprikapoeder', en: 'smoked paprika', ru: 'копчёная паприка' } },
      { amount: 0.25, unit: 'tl', name: { nl: 'knoflookpoeder', en: 'garlic powder', ru: 'чесночный порошок' } },
      { amount: 0.5, unit: 'tl', name: { nl: 'maïzena, optioneel voor extra crunch', en: 'cornstarch, optional for extra crunch', ru: 'кукурузный крахмал, по желанию для хруста' } },
      { amount: 1, unit: null, name: { nl: 'komkommer, in dunne plakjes', en: 'cucumber, thinly sliced', ru: 'огурец, тонко нарезанный' } },
      { amount: 0.5, unit: null, name: { nl: 'rode ui, dun gesneden', en: 'red onion, thinly sliced', ru: 'красная луковица, тонко нарезанная' } },
      { amount: 1, unit: 'el', name: { nl: 'witte wijnazijn of appelciderazijn', en: 'white wine vinegar or apple cider vinegar', ru: 'белый винный уксус или яблочный уксус' } },
      { amount: 0.5, unit: 'tl', name: { nl: 'honing of suiker', en: 'honey or sugar', ru: 'мёд или сахар' } },
      { amount: 1, unit: 'el', name: { nl: 'olijfolie', en: 'olive oil', ru: 'оливковое масло' } },
      { amount: 1, unit: null, name: { nl: 'snuf zout en zwarte peper', en: 'pinch salt and black pepper', ru: 'щепотка соли и чёрного перца' } },
      { amount: 1, unit: null, name: { nl: 'handje verse dille of peterselie, optioneel', en: 'small handful fresh dill or parsley, optional', ru: 'небольшая горсть свежего укропа или петрушки, по желанию' } },
    ],
    steps: [
      {
        title: { nl: 'Kip marineren', en: 'Marinate the chicken', ru: 'Замариновать курицу' },
        description: {
          nl: 'Meng de kip met de Smoky BBQ marinade. Laat minimaal 30 minuten marineren.',
          en: 'Mix the chicken with the Smoky BBQ marinade. Leave to marinate for at least 30 minutes.',
          ru: 'Смешайте курицу с маринадом Smoky BBQ. Оставьте мариноваться минимум на 30 минут.',
        },
      },
      {
        title: { nl: 'Komkommersalade maken', en: 'Make the cucumber salad', ru: 'Приготовить огуречный салат' },
        description: {
          nl: 'Meng azijn, honing, olijfolie, zout en peper. Voeg komkommer en rode ui toe en laat 10-15 minuten intrekken in de koelkast.',
          en: 'Mix vinegar, honey, olive oil, salt, and pepper. Add cucumber and red onion, then chill for 10-15 minutes.',
          ru: 'Смешайте уксус, мёд, оливковое масло, соль и перец. Добавьте огурец и красный лук, затем охладите 10-15 минут.',
        },
      },
      {
        title: { nl: 'Kip bakken in de oven', en: 'Bake the chicken', ru: 'Запечь курицу' },
        description: {
          nl: 'Verwarm de oven voor op 220°C hete lucht. Leg de kipstukjes op een bakplaat of rooster, bak 15-18 minuten en schep halverwege om. Laat 2 minuten rusten.',
          en: 'Preheat the fan oven to 220°C. Arrange the chicken on a baking tray or rack, bake for 15-18 minutes, and turn halfway. Rest for 2 minutes.',
          ru: 'Разогрейте духовку с конвекцией до 220°C. Разложите курицу на противне или решётке, запекайте 15-18 минут, перевернув в середине. Дайте отдохнуть 2 минуты.',
        },
      },
      {
        title: { nl: 'Crunchy aardappels bakken', en: 'Cook the crunchy potatoes', ru: 'Приготовить хрустящий картофель' },
        description: {
          nl: 'Dep de aardappels droog. Meng met maïzena, olie, gerookt paprikapoeder, knoflookpoeder, zout en peper. Bak in de airfryer op 200°C gedurende 10-12 minuten en schud halverwege om tot ze goudbruin en krokant zijn.',
          en: 'Pat the potatoes dry. Toss with cornstarch, oil, smoked paprika, garlic powder, salt, and pepper. Air fry at 200°C for 10-12 minutes, shaking halfway, until golden and crisp.',
          ru: 'Обсушите картофель. Смешайте с крахмалом, маслом, копчёной паприкой, чесночным порошком, солью и перцем. Готовьте в аэрогриле при 200°C 10-12 минут, встряхнув в середине, до золотистого хруста.',
        },
      },
      {
        title: { nl: 'Serveren', en: 'Serve', ru: 'Подать' },
        description: {
          nl: 'Serveer de kip warm met de aardappelblokjes. Geef de komkommersalade er koud naast voor een fris contrast.',
          en: 'Serve the chicken warm with the potato cubes. Add the chilled cucumber salad on the side for a fresh contrast.',
          ru: 'Подавайте курицу тёплой с картофелем. Охлаждённый огуречный салат подайте рядом для свежего контраста.',
        },
      },
    ],
    notes: {
      nl: 'Zonnebloemolie werkt het beste voor crunch. Laat niet te veel marinade aan de kip zitten voor betere karamellisatie. Alles is mild van smaak en geschikt voor kinderen.',
      en: 'Sunflower oil gives the best crunch. Do not leave too much marinade clinging to the chicken if you want better caramelization. Mild and kid-friendly.',
      ru: 'Подсолнечное масло лучше всего помогает получить хруст. Для лучшей карамелизации не оставляйте на курице слишком много маринада. Вкус мягкий и подходит детям.',
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
