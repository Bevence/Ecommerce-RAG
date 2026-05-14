import { Product } from "./schemas/product.schema";

export const seedProducts: Partial<Product>[] = [
  {
    slug: "solvane-espresso-maker",
    name: "Solvane Espresso Maker",
    subtitle: "Compact café-quality brewing for modern kitchens.",
    description:
      "15-bar stainless steel espresso machine with milk frother, rapid heat system, and programmable single or double shot brewing.",
    category: "Kitchen",
    price: 249,
    heroImage:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521302200778-33500795e128?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["espresso", "coffee", "kitchen", "appliance"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 184,
    searchableText:
      "espresso coffee machine milk frother stainless kitchen appliance",
    features: [
      { label: "Pressure", value: "15-bar pump" },
      { label: "Capacity", value: "1.5L water tank" },
    ],
    knowledgeChunks: [
      {
        title: "Brewing performance",
        body: "Produces rich crema and consistent espresso shots suitable for cappuccino and latte preparation.",
      },
    ],
    embedding: [],
  },
  {
    slug: "aetheris-smart-lamp",
    name: "Aetheris Smart Lamp",
    subtitle: "Adaptive ambient lighting with minimalist aesthetics.",
    description:
      "Wi-Fi enabled LED smart lamp with voice control compatibility, adjustable brightness, and customizable color temperature.",
    category: "Home",
    price: 119,
    heroImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["lamp", "smart", "lighting", "home"],
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 143,
    searchableText: "smart lamp LED ambient lighting voice control minimalist",
    features: [
      { label: "Connectivity", value: "Wi-Fi + Bluetooth" },
      { label: "Lighting", value: "16M color options" },
    ],
    knowledgeChunks: [
      {
        title: "Smart integration",
        body: "Works with major smart home ecosystems and supports scheduling and scene automation.",
      },
    ],
    embedding: [],
  },
  {
    slug: "nuvexa-wireless-headphones",
    name: "Nuvexa Wireless Headphones",
    subtitle: "Immersive listening engineered for long sessions.",
    description:
      "Over-ear wireless headphones with hybrid active noise cancellation, deep bass response, and up to 40 hours of battery life.",
    category: "Electronics",
    price: 199,
    heroImage:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["headphones", "wireless", "audio", "noise-cancelling"],
    featured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 512,
    searchableText: "wireless headphones ANC audio music bluetooth over-ear",
    features: [
      { label: "Battery", value: "40 hours playback" },
      { label: "Noise Control", value: "Hybrid ANC" },
    ],
    knowledgeChunks: [
      {
        title: "Listening experience",
        body: "Designed for travel and focused work with immersive sound and reduced ambient distractions.",
      },
    ],
    embedding: [],
  },
  {
    slug: "orvessa-standing-desk",
    name: "Orvessa Standing Desk",
    subtitle: "Ergonomic flexibility for productive workspaces.",
    description:
      "Motorized height-adjustable desk with memory presets, cable management tray, and durable oak finish surface.",
    category: "Furniture",
    price: 549,
    heroImage:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["desk", "standing", "office", "ergonomic"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 226,
    searchableText:
      "standing desk ergonomic office adjustable workspace furniture",
    features: [
      { label: "Adjustment", value: "Dual motor lift system" },
      { label: "Height Range", value: "72cm - 120cm" },
    ],
    knowledgeChunks: [
      {
        title: "Workspace benefits",
        body: "Encourages movement throughout the day and supports healthier posture during extended work sessions.",
      },
    ],
    embedding: [],
  },
  {
    slug: "zenvora-yoga-mat",
    name: "Zenvora Yoga Mat",
    subtitle: "Balanced comfort and grip for mindful movement.",
    description:
      "Eco-friendly non-slip yoga mat with extra cushioning and moisture-resistant surface for studio or home workouts.",
    category: "Fitness",
    price: 79,
    heroImage:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["yoga", "fitness", "exercise", "wellness"],
    featured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 132,
    searchableText: "yoga mat eco friendly non-slip fitness workout wellness",
    features: [
      { label: "Material", value: "Eco TPE foam" },
      { label: "Thickness", value: "6mm cushioning" },
    ],
    knowledgeChunks: [
      {
        title: "Exercise support",
        body: "Provides stability and comfort for yoga, stretching, pilates, and bodyweight workouts.",
      },
    ],
    embedding: [],
  },
  {
    slug: "caldris-portable-speaker",
    name: "Caldris Portable Speaker",
    subtitle: "Powerful outdoor sound in a compact frame.",
    description:
      "Water-resistant Bluetooth speaker with stereo drivers, deep bass tuning, and 18-hour battery performance.",
    category: "Electronics",
    price: 139,
    heroImage:
      "https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512446816042-444d64126727?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["speaker", "bluetooth", "portable", "audio"],
    featured: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 298,
    searchableText: "portable bluetooth speaker outdoor waterproof audio bass",
    features: [
      { label: "Battery", value: "18 hours playback" },
      { label: "Resistance", value: "IPX7 waterproof" },
    ],
    knowledgeChunks: [
      {
        title: "Outdoor use",
        body: "Suitable for travel, picnics, and poolside listening with rugged splash-resistant construction.",
      },
    ],
    embedding: [],
  },
  {
    slug: "elyndra-ceramic-cookware-set",
    name: "Elyndra Ceramic Cookware Set",
    subtitle: "Healthy non-stick cooking with timeless style.",
    description:
      "10-piece ceramic-coated cookware collection designed for even heat distribution and easy everyday cooking.",
    category: "Kitchen",
    price: 319,
    heroImage:
      "https://images.unsplash.com/photo-1584990347449-a7f4f8e3d0d4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["cookware", "kitchen", "ceramic", "cooking"],
    featured: false,
    inStock: true,
    rating: 4.8,
    reviewCount: 167,
    searchableText: "ceramic cookware pots pans non-stick healthy kitchen",
    features: [
      { label: "Pieces", value: "10-piece set" },
      { label: "Coating", value: "PFAS-free ceramic" },
    ],
    knowledgeChunks: [
      {
        title: "Cooking performance",
        body: "Supports low-oil cooking while maintaining reliable heat distribution across all pans.",
      },
    ],
    embedding: [],
  },
  {
    slug: "virello-travel-backpack",
    name: "Virello Travel Backpack",
    subtitle: "Streamlined organization for modern travelers.",
    description:
      "Expandable travel backpack with padded laptop compartment, weather-resistant fabric, and ergonomic shoulder support.",
    category: "Accessories",
    price: 149,
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["backpack", "travel", "bag", "laptop"],
    featured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 341,
    searchableText: "travel backpack laptop bag waterproof expandable commuter",
    features: [
      { label: "Capacity", value: "32L expandable" },
      { label: "Laptop Fit", value: "Up to 16-inch" },
    ],
    knowledgeChunks: [
      {
        title: "Travel convenience",
        body: "Designed for carry-on travel with organized compartments and quick-access storage pockets.",
      },
    ],
    embedding: [],
  },
  {
    slug: "lumetra-monitor-light-bar",
    name: "Lumetra Monitor Light Bar",
    subtitle: "Focused illumination without screen glare.",
    description:
      "USB-powered monitor light bar with asymmetric lighting design, touch controls, and adjustable brightness levels.",
    category: "Office",
    price: 89,
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["monitor", "light", "office", "desk"],
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 108,
    searchableText: "monitor light bar desk office workspace LED glare-free",
    features: [
      { label: "Power", value: "USB-C powered" },
      { label: "Brightness", value: "Stepless dimming" },
    ],
    knowledgeChunks: [
      {
        title: "Desk comfort",
        body: "Reduces eye strain during extended computer use while maintaining a clean workspace setup.",
      },
    ],
    embedding: [],
  },
  {
    slug: "arclune-smart-watch",
    name: "Arclune Smart Watch",
    subtitle: "Fitness tracking and connected productivity combined.",
    description:
      "Advanced smartwatch with AMOLED display, heart rate monitoring, sleep tracking, and multi-day battery life.",
    category: "Wearables",
    price: 279,
    heroImage:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["smartwatch", "fitness", "wearable", "health"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 427,
    searchableText: "smart watch wearable fitness tracker AMOLED health",
    features: [
      { label: "Display", value: "1.9-inch AMOLED" },
      { label: "Battery", value: "7-day battery life" },
    ],
    knowledgeChunks: [
      {
        title: "Daily tracking",
        body: "Monitors activity, sleep, and wellness metrics while keeping notifications accessible on the go.",
      },
    ],
    embedding: [],
  },
  {
    slug: "aurexa-electric-kettle",
    name: "Aurexa Electric Kettle",
    subtitle: "Precision boiling with refined countertop design.",
    description:
      "Variable temperature electric kettle with rapid boil technology, stainless steel interior, and automatic shutoff protection.",
    category: "Kitchen",
    price: 99,
    heroImage:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["kettle", "kitchen", "coffee", "tea"],
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 154,
    searchableText: "electric kettle variable temperature tea coffee kitchen",
    features: [
      { label: "Capacity", value: "1.7L stainless tank" },
      { label: "Heating", value: "Rapid boil system" },
    ],
    knowledgeChunks: [
      {
        title: "Brewing support",
        body: "Allows precise water temperatures for coffee, tea, and specialty brewing methods.",
      },
    ],
    embedding: [],
  },
  {
    slug: "viresta-linen-sofa",
    name: "Viresta Linen Sofa",
    subtitle: "Relaxed comfort with contemporary proportions.",
    description:
      "Three-seat linen upholstered sofa with deep cushions, solid wood frame, and soft neutral-toned finish.",
    category: "Furniture",
    price: 899,
    heroImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["sofa", "living-room", "furniture", "linen"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 218,
    searchableText: "linen sofa living room furniture modern comfortable",
    features: [
      { label: "Material", value: "Premium linen fabric" },
      { label: "Frame", value: "Solid oak wood" },
    ],
    knowledgeChunks: [
      {
        title: "Living room comfort",
        body: "Designed for everyday lounging with supportive cushioning and breathable upholstery.",
      },
    ],
    embedding: [],
  },
  {
    slug: "solvix-gaming-keyboard",
    name: "Solvix Gaming Keyboard",
    subtitle: "Responsive mechanical performance for competitive play.",
    description:
      "RGB mechanical gaming keyboard with tactile switches, programmable macros, and aluminum frame durability.",
    category: "Electronics",
    price: 149,
    heroImage:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["keyboard", "gaming", "mechanical", "rgb"],
    featured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 476,
    searchableText: "mechanical gaming keyboard RGB switches esports computer",
    features: [
      { label: "Switch Type", value: "Mechanical tactile" },
      { label: "Lighting", value: "Per-key RGB" },
    ],
    knowledgeChunks: [
      {
        title: "Gaming responsiveness",
        body: "Provides fast actuation and customizable controls for gaming and productivity workflows.",
      },
    ],
    embedding: [],
  },
  {
    slug: "elyvora-scented-candle-set",
    name: "Elyvora Scented Candle Set",
    subtitle: "Warm aromatic accents for calming interiors.",
    description:
      "Hand-poured soy wax candle collection featuring layered botanical fragrances and reusable glass vessels.",
    category: "Home",
    price: 59,
    heroImage:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["candles", "home", "decor", "wellness"],
    featured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 97,
    searchableText:
      "soy wax scented candles home decor aromatherapy relaxation",
    features: [
      { label: "Wax", value: "Natural soy blend" },
      { label: "Burn Time", value: "40 hours each" },
    ],
    knowledgeChunks: [
      {
        title: "Atmosphere enhancement",
        body: "Creates a calming environment suitable for relaxation, reading, and evening routines.",
      },
    ],
    embedding: [],
  },
  {
    slug: "norevia-running-shoes",
    name: "Norevia Running Shoes",
    subtitle: "Lightweight cushioning engineered for daily mileage.",
    description:
      "Breathable running shoes with responsive foam midsoles, flexible support, and durable road traction.",
    category: "Footwear",
    price: 139,
    heroImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["running", "shoes", "fitness", "sports"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 381,
    searchableText: "running shoes lightweight breathable sports cushioning",
    features: [
      { label: "Midsole", value: "Responsive EVA foam" },
      { label: "Upper", value: "Breathable knit mesh" },
    ],
    knowledgeChunks: [
      {
        title: "Performance support",
        body: "Optimized for road running with balanced cushioning and stable foot support.",
      },
    ],
    embedding: [],
  },
  {
    slug: "lumicore-webcam-pro",
    name: "Lumicore Webcam Pro",
    subtitle: "Sharp video clarity for meetings and streaming.",
    description:
      "4K USB webcam with autofocus, low-light enhancement, and dual microphones for professional-quality communication.",
    category: "Electronics",
    price: 179,
    heroImage:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["webcam", "streaming", "office", "video"],
    featured: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 264,
    searchableText: "4K webcam autofocus streaming meetings office creator",
    features: [
      { label: "Resolution", value: "4K Ultra HD" },
      { label: "Audio", value: "Dual noise-reduction mics" },
    ],
    knowledgeChunks: [
      {
        title: "Video conferencing",
        body: "Improves online meeting clarity and supports content creation with detailed video capture.",
      },
    ],
    embedding: [],
  },
  {
    slug: "zenvica-bamboo-bed-frame",
    name: "Zenvica Bamboo Bed Frame",
    subtitle: "Natural craftsmanship for tranquil bedrooms.",
    description:
      "Minimalist bamboo platform bed frame with reinforced support slats and sustainable wood construction.",
    category: "Furniture",
    price: 629,
    heroImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["bed", "bedroom", "furniture", "bamboo"],
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 136,
    searchableText: "bamboo bed frame sustainable bedroom furniture platform",
    features: [
      { label: "Material", value: "Natural bamboo wood" },
      { label: "Support", value: "Reinforced slat base" },
    ],
    knowledgeChunks: [
      {
        title: "Bedroom design",
        body: "Offers a clean minimalist appearance while supporting durable mattress placement.",
      },
    ],
    embedding: [],
  },
  {
    slug: "aerion-drone-lite",
    name: "Aerion Drone Lite",
    subtitle: "Portable aerial creativity for everyday exploration.",
    description:
      "Foldable camera drone with stabilized 4K recording, GPS return-home, and beginner-friendly controls.",
    category: "Electronics",
    price: 499,
    heroImage:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["drone", "camera", "4k", "travel"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 289,
    searchableText: "4K drone aerial camera travel photography GPS foldable",
    features: [
      { label: "Camera", value: "4K stabilized video" },
      { label: "Flight Time", value: "32 minutes" },
    ],
    knowledgeChunks: [
      {
        title: "Aerial capture",
        body: "Enables cinematic landscape shots and smooth travel footage with stabilized controls.",
      },
    ],
    embedding: [],
  },
  {
    slug: "orvexa-glass-water-bottle",
    name: "Orvexa Glass Water Bottle",
    subtitle: "Clean hydration with premium reusable materials.",
    description:
      "Borosilicate glass water bottle with silicone sleeve, leakproof bamboo lid, and temperature-resistant construction.",
    category: "Lifestyle",
    price: 39,
    heroImage:
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["water-bottle", "hydration", "glass", "eco"],
    featured: false,
    inStock: true,
    rating: 4.5,
    reviewCount: 88,
    searchableText: "glass water bottle reusable hydration eco friendly bamboo",
    features: [
      { label: "Material", value: "Borosilicate glass" },
      { label: "Capacity", value: "750ml" },
    ],
    knowledgeChunks: [
      {
        title: "Daily hydration",
        body: "Provides reusable eco-conscious hydration suitable for office, gym, and travel use.",
      },
    ],
    embedding: [],
  },
  {
    slug: "caldora-electric-toothbrush",
    name: "Caldora Electric Toothbrush",
    subtitle: "Advanced oral care with intelligent cleaning modes.",
    description:
      "Rechargeable sonic toothbrush featuring pressure sensors, multiple cleaning modes, and long battery endurance.",
    category: "Personal Care",
    price: 89,
    heroImage:
      "https://images.unsplash.com/photo-1559591937-abc3f4c6b0e5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["toothbrush", "personal-care", "health", "electric"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 203,
    searchableText: "electric toothbrush sonic oral care rechargeable cleaning",
    features: [
      { label: "Cleaning Modes", value: "5 smart modes" },
      { label: "Battery", value: "30-day runtime" },
    ],
    knowledgeChunks: [
      {
        title: "Oral hygiene",
        body: "Supports effective plaque removal and healthier brushing habits through guided cleaning modes.",
      },
    ],
    embedding: [],
  },
  {
    slug: "veltrix-ultrawide-monitor",
    name: "Veltrix Ultrawide Monitor",
    subtitle: "Expansive visuals for immersive productivity and gaming.",
    description:
      "34-inch curved ultrawide monitor with QHD resolution, high refresh rate, and HDR support for creative and gaming workflows.",
    category: "Electronics",
    price: 699,
    heroImage:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["monitor", "ultrawide", "gaming", "office"],
    featured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 412,
    searchableText: "ultrawide monitor curved gaming productivity HDR display",
    features: [
      { label: "Resolution", value: "3440x1440 QHD" },
      { label: "Refresh Rate", value: "144Hz" },
    ],
    knowledgeChunks: [
      {
        title: "Visual workspace",
        body: "Provides expanded screen real estate ideal for multitasking, editing, and immersive entertainment.",
      },
    ],
    embedding: [],
  },
  {
    slug: "norvella-cotton-bedding-set",
    name: "Norvella Cotton Bedding Set",
    subtitle: "Soft breathable comfort for restful sleep.",
    description:
      "Luxury cotton bedding collection featuring breathable fabric, minimalist styling, and year-round sleeping comfort.",
    category: "Home",
    price: 169,
    heroImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["bedding", "bedroom", "cotton", "home"],
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 142,
    searchableText: "cotton bedding breathable soft bedroom comfort sheets",
    features: [
      { label: "Material", value: "100% cotton weave" },
      { label: "Included", value: "4-piece bedding set" },
    ],
    knowledgeChunks: [
      {
        title: "Sleep comfort",
        body: "Promotes cooler and more comfortable sleep through breathable natural fabric.",
      },
    ],
    embedding: [],
  },
  {
    slug: "aerune-smart-scale",
    name: "Aerune Smart Scale",
    subtitle: "Connected health tracking for modern routines.",
    description:
      "Bluetooth smart body scale with body composition metrics, app syncing, and multi-user health tracking support.",
    category: "Fitness",
    price: 79,
    heroImage:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["smart-scale", "fitness", "health", "wellness"],
    featured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 115,
    searchableText: "smart scale body composition bluetooth health tracking",
    features: [
      { label: "Connectivity", value: "Bluetooth sync" },
      { label: "Metrics", value: "13 body measurements" },
    ],
    knowledgeChunks: [
      {
        title: "Health monitoring",
        body: "Tracks weight trends and body metrics to support wellness and fitness goals.",
      },
    ],
    embedding: [],
  },
  {
    slug: "solvane-air-fryer-xl",
    name: "Solvane Air Fryer XL",
    subtitle: "Crisp cooking performance with less oil.",
    description:
      "Large-capacity digital air fryer featuring rapid hot air circulation, touch controls, and multiple cooking presets.",
    category: "Kitchen",
    price: 229,
    heroImage:
      "https://images.unsplash.com/photo-1585515656973-1f7e5d7d4b8c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["air-fryer", "kitchen", "cooking", "appliance"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 307,
    searchableText: "air fryer digital cooking healthy kitchen appliance",
    features: [
      { label: "Capacity", value: "7L basket" },
      { label: "Programs", value: "10 cooking presets" },
    ],
    knowledgeChunks: [
      {
        title: "Healthy cooking",
        body: "Supports crispy cooking results with significantly reduced oil usage.",
      },
    ],
    embedding: [],
  },
  {
    slug: "elystrum-acoustic-guitar",
    name: "Elystrum Acoustic Guitar",
    subtitle: "Warm balanced tones for expressive performances.",
    description:
      "Full-size acoustic guitar crafted with spruce top construction and smooth fretboard playability for beginners and enthusiasts.",
    category: "Music",
    price: 349,
    heroImage:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["guitar", "music", "acoustic", "instrument"],
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 176,
    searchableText: "acoustic guitar instrument beginner music spruce wood",
    features: [
      { label: "Body", value: "Spruce top construction" },
      { label: "Strings", value: "Steel acoustic strings" },
    ],
    knowledgeChunks: [
      {
        title: "Sound quality",
        body: "Produces balanced acoustic tones suitable for practice, songwriting, and live performance.",
      },
    ],
    embedding: [],
  },
  {
    slug: "virexa-noise-machine",
    name: "Virexa Noise Machine",
    subtitle: "Relaxing ambient soundscapes for better rest.",
    description:
      "Portable white noise machine with nature sounds, sleep timer, and compact bedside-friendly design.",
    category: "Wellness",
    price: 69,
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["sleep", "wellness", "noise-machine", "relaxation"],
    featured: false,
    inStock: true,
    rating: 4.5,
    reviewCount: 91,
    searchableText: "white noise machine sleep relaxation ambient sounds",
    features: [
      { label: "Sound Modes", value: "20 ambient tracks" },
      { label: "Timer", value: "Auto sleep timer" },
    ],
    knowledgeChunks: [
      {
        title: "Sleep assistance",
        body: "Creates calming sound environments that help mask disruptive background noise.",
      },
    ],
    embedding: [],
  },
  {
    slug: "orvessa-leather-office-chair",
    name: "Orvessa Leather Office Chair",
    subtitle: "Premium ergonomic support for daily productivity.",
    description:
      "Executive office chair with lumbar support, breathable padding, reclining mechanism, and adjustable armrests.",
    category: "Office",
    price: 429,
    heroImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["office-chair", "ergonomic", "furniture", "workspace"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 264,
    searchableText: "ergonomic office chair leather lumbar workspace comfort",
    features: [
      { label: "Support", value: "Adjustable lumbar system" },
      { label: "Recline", value: "135-degree tilt" },
    ],
    knowledgeChunks: [
      {
        title: "Ergonomic seating",
        body: "Improves posture and sitting comfort during long work sessions.",
      },
    ],
    embedding: [],
  },
  {
    slug: "lumora-projector-mini",
    name: "Lumora Projector Mini",
    subtitle: "Portable cinematic entertainment anywhere.",
    description:
      "Compact HD projector with wireless streaming support, built-in speakers, and portable lightweight design.",
    category: "Electronics",
    price: 289,
    heroImage:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["projector", "home-theater", "portable", "streaming"],
    featured: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 198,
    searchableText: "portable projector HD streaming home theater mini",
    features: [
      { label: "Resolution", value: "1080p HD support" },
      { label: "Connectivity", value: "Wi-Fi + HDMI" },
    ],
    knowledgeChunks: [
      {
        title: "Entertainment setup",
        body: "Transforms walls or screens into portable movie and gaming experiences.",
      },
    ],
    embedding: [],
  },
  {
    slug: "caldris-travel-mug",
    name: "Caldris Travel Mug",
    subtitle: "Temperature retention for life on the move.",
    description:
      "Insulated stainless steel travel mug with leakproof lid, ergonomic grip, and all-day temperature retention.",
    category: "Lifestyle",
    price: 45,
    heroImage:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["travel-mug", "coffee", "drinkware", "insulated"],
    featured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 133,
    searchableText: "insulated travel mug coffee stainless steel reusable",
    features: [
      { label: "Insulation", value: "Double-wall vacuum" },
      { label: "Capacity", value: "500ml" },
    ],
    knowledgeChunks: [
      {
        title: "Daily commuting",
        body: "Keeps beverages hot or cold for extended periods during travel or office use.",
      },
    ],
    embedding: [],
  },
  {
    slug: "aureline-photo-printer",
    name: "Aureline Photo Printer",
    subtitle: "Instant vibrant prints from your mobile devices.",
    description:
      "Wireless compact photo printer with app integration, borderless printing, and smudge-resistant output.",
    category: "Electronics",
    price: 199,
    heroImage:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["photo-printer", "wireless", "photography", "printing"],
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 149,
    searchableText: "wireless photo printer instant printing mobile photos",
    features: [
      { label: "Printing", value: "Borderless color prints" },
      { label: "Connection", value: "Wi-Fi mobile sync" },
    ],
    knowledgeChunks: [
      {
        title: "Creative printing",
        body: "Enables fast high-quality photo printing directly from smartphones and tablets.",
      },
    ],
    embedding: [],
  },
  {
    slug: "zenvora-electric-bike",
    name: "Zenvora Electric Bike",
    subtitle: "Effortless urban commuting with extended range support.",
    description:
      "Lightweight electric bicycle with pedal assist, removable battery system, and integrated LED safety lighting.",
    category: "Transportation",
    price: 1499,
    heroImage:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["electric-bike", "commuting", "transport", "eco"],
    featured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 382,
    searchableText: "electric bike pedal assist urban commuting eco transport",
    features: [
      { label: "Range", value: "80km battery range" },
      { label: "Motor", value: "350W rear hub motor" },
    ],
    knowledgeChunks: [
      {
        title: "Urban mobility",
        body: "Provides efficient city transportation with reduced physical strain and eco-conscious travel.",
      },
    ],
    embedding: [],
  },
  {
    slug: "solvexa-smart-door-lock",
    name: "Solvexa Smart Door Lock",
    subtitle: "Secure keyless access with connected convenience.",
    description:
      "Fingerprint-enabled smart door lock with mobile app control, temporary guest access, and encrypted security protocols.",
    category: "Smart Home",
    price: 269,
    heroImage:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["smart-lock", "security", "home", "automation"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 221,
    searchableText: "smart lock fingerprint keyless home security automation",
    features: [
      { label: "Access", value: "Fingerprint + App unlock" },
      { label: "Security", value: "AES encrypted connection" },
    ],
    knowledgeChunks: [
      {
        title: "Home security",
        body: "Allows secure remote access management and temporary digital key sharing.",
      },
    ],
    embedding: [],
  },
  {
    slug: "veltris-blender-pro",
    name: "Veltris Blender Pro",
    subtitle: "High-powered blending for smoothies and meal prep.",
    description:
      "Professional countertop blender with stainless steel blades, multiple speed modes, and durable Tritan pitcher.",
    category: "Kitchen",
    price: 189,
    heroImage:
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["blender", "kitchen", "smoothies", "appliance"],
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 194,
    searchableText:
      "professional blender smoothie kitchen high power appliance",
    features: [
      { label: "Motor", value: "1200W blending power" },
      { label: "Pitcher", value: "2L Tritan container" },
    ],
    knowledgeChunks: [
      {
        title: "Meal preparation",
        body: "Handles smoothies, soups, sauces, and frozen blending with consistent performance.",
      },
    ],
    embedding: [],
  },
  {
    slug: "norvica-cashmere-scarf",
    name: "Norvica Cashmere Scarf",
    subtitle: "Soft seasonal layering with timeless elegance.",
    description:
      "Premium cashmere scarf crafted for warmth, lightweight comfort, and versatile everyday styling.",
    category: "Fashion",
    price: 129,
    heroImage:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["scarf", "fashion", "cashmere", "winter"],
    featured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 84,
    searchableText: "cashmere scarf winter fashion soft luxury accessory",
    features: [
      { label: "Fabric", value: "100% cashmere wool" },
      { label: "Texture", value: "Ultra-soft knit" },
    ],
    knowledgeChunks: [
      {
        title: "Seasonal comfort",
        body: "Provides lightweight warmth suitable for cold weather layering and travel.",
      },
    ],
    embedding: [],
  },
  {
    slug: "elyra-tablet-stand",
    name: "Elyra Tablet Stand",
    subtitle: "Flexible viewing angles for work and entertainment.",
    description:
      "Adjustable aluminum tablet stand with foldable construction, anti-slip support, and ergonomic positioning.",
    category: "Accessories",
    price: 49,
    heroImage:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["tablet-stand", "desk", "accessory", "office"],
    featured: false,
    inStock: true,
    rating: 4.5,
    reviewCount: 102,
    searchableText: "tablet stand aluminum adjustable ergonomic desk accessory",
    features: [
      { label: "Material", value: "Aluminum alloy frame" },
      { label: "Adjustment", value: "Multi-angle support" },
    ],
    knowledgeChunks: [
      {
        title: "Desk ergonomics",
        body: "Improves device viewing comfort for reading, streaming, and productivity tasks.",
      },
    ],
    embedding: [],
  },
  {
    slug: "arclune-portable-ssd",
    name: "Arclune Portable SSD",
    subtitle: "Fast secure storage for creators and professionals.",
    description:
      "High-speed external SSD with USB-C connectivity, shock-resistant construction, and compact travel-ready design.",
    category: "Electronics",
    price: 219,
    heroImage:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["ssd", "storage", "usb-c", "portable"],
    featured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 316,
    searchableText: "portable SSD high speed storage USB-C creator backup",
    features: [
      { label: "Capacity", value: "2TB storage" },
      { label: "Transfer Speed", value: "1050MB/s read speed" },
    ],
    knowledgeChunks: [
      {
        title: "Professional storage",
        body: "Supports fast media transfer, backups, and portable project workflows.",
      },
    ],
    embedding: [],
  },
  {
    slug: "virello-pet-water-fountain",
    name: "Virello Pet Water Fountain",
    subtitle: "Continuous fresh hydration for pets at home.",
    description:
      "Automatic pet water fountain with quiet filtration system, circulating water flow, and BPA-free construction.",
    category: "Pets",
    price: 69,
    heroImage:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["pets", "water-fountain", "hydration", "pet-care"],
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 127,
    searchableText:
      "pet water fountain automatic filtration hydration cats dogs",
    features: [
      { label: "Capacity", value: "2.5L reservoir" },
      { label: "Filter", value: "Triple filtration system" },
    ],
    knowledgeChunks: [
      {
        title: "Pet wellness",
        body: "Encourages pets to drink more water through continuous filtered circulation.",
      },
    ],
    embedding: [],
  },
  {
    slug: "lumetra-led-floor-lamp",
    name: "Lumetra LED Floor Lamp",
    subtitle: "Elegant ambient lighting for modern interiors.",
    description:
      "Slim LED floor lamp with adjustable brightness, warm-to-cool lighting modes, and minimalist architectural styling.",
    category: "Home",
    price: 159,
    heroImage:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["floor-lamp", "lighting", "home", "decor"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 177,
    searchableText: "LED floor lamp ambient lighting minimalist home decor",
    features: [
      { label: "Lighting", value: "Adjustable color temperature" },
      { label: "Control", value: "Touch dimming controls" },
    ],
    knowledgeChunks: [
      {
        title: "Interior atmosphere",
        body: "Enhances living spaces with soft customizable lighting for reading or relaxation.",
      },
    ],
    embedding: [],
  },
  {
    slug: "aerivox-action-camera",
    name: "Aerivox Action Camera",
    subtitle: "Adventure-ready recording in compact form.",
    description:
      "Waterproof action camera with 4K recording, image stabilization, and wide-angle capture for outdoor activities.",
    category: "Electronics",
    price: 259,
    heroImage:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["action-camera", "4k", "travel", "outdoor"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 268,
    searchableText: "4K action camera waterproof outdoor stabilization travel",
    features: [
      { label: "Video", value: "4K 60fps recording" },
      { label: "Durability", value: "Waterproof up to 30m" },
    ],
    knowledgeChunks: [
      {
        title: "Adventure capture",
        body: "Records stabilized outdoor footage suitable for sports, travel, and action scenes.",
      },
    ],
    embedding: [],
  },
  {
    slug: "orvexa-mini-greenhouse",
    name: "Orvexa Mini Greenhouse",
    subtitle: "Compact indoor gardening for year-round growth.",
    description:
      "Desktop greenhouse with transparent humidity cover, adjustable ventilation, and durable planting trays.",
    category: "Garden",
    price: 89,
    heroImage:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["greenhouse", "gardening", "plants", "indoor"],
    featured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 73,
    searchableText: "mini greenhouse indoor gardening seedlings plant care",
    features: [
      { label: "Ventilation", value: "Adjustable airflow vents" },
      { label: "Structure", value: "Transparent humidity dome" },
    ],
    knowledgeChunks: [
      {
        title: "Plant growth",
        body: "Creates controlled humidity conditions ideal for seedlings and indoor herb cultivation.",
      },
    ],
    embedding: [],
  },
  {
    slug: "velora-smart-thermostat",
    name: "Velora Smart Thermostat",
    subtitle: "Intelligent climate control for energy-efficient living.",
    description:
      "Wi-Fi enabled smart thermostat with adaptive scheduling, remote temperature control, and energy usage insights.",
    category: "Smart Home",
    price: 199,
    heroImage:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["thermostat", "smart-home", "energy", "automation"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 214,
    searchableText: "smart thermostat climate control energy automation wifi",
    features: [
      { label: "Connectivity", value: "Wi-Fi enabled" },
      { label: "Scheduling", value: "AI adaptive learning" },
    ],
    knowledgeChunks: [
      {
        title: "Energy management",
        body: "Helps reduce energy consumption through intelligent heating and cooling automation.",
      },
    ],
    embedding: [],
  },
  {
    slug: "norexa-hiking-backpack",
    name: "Norexa Hiking Backpack",
    subtitle: "Reliable outdoor storage for extended adventures.",
    description:
      "Weather-resistant hiking backpack with ergonomic support straps, hydration compatibility, and modular storage compartments.",
    category: "Outdoor",
    price: 179,
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["backpack", "hiking", "outdoor", "travel"],
    featured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 297,
    searchableText: "hiking backpack outdoor travel camping weather resistant",
    features: [
      { label: "Capacity", value: "45L storage" },
      { label: "Support", value: "Padded ergonomic straps" },
    ],
    knowledgeChunks: [
      {
        title: "Outdoor travel",
        body: "Supports multi-day hiking trips with organized compartments and durable materials.",
      },
    ],
    embedding: [],
  },
  {
    slug: "elysian-wireless-charger",
    name: "Elysian Wireless Charger",
    subtitle: "Effortless fast charging with sleek minimalist form.",
    description:
      "Qi-certified wireless charging pad with fast charging support, aluminum housing, and temperature protection.",
    category: "Electronics",
    price: 59,
    heroImage:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["wireless-charger", "charging", "mobile", "tech"],
    featured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 143,
    searchableText: "wireless charger fast charging Qi mobile accessory",
    features: [
      { label: "Charging", value: "15W fast charging" },
      { label: "Compatibility", value: "Qi-enabled devices" },
    ],
    knowledgeChunks: [
      {
        title: "Convenient charging",
        body: "Allows cable-free device charging for desks, bedside tables, and offices.",
      },
    ],
    embedding: [],
  },
  {
    slug: "aureline-coffee-grinder",
    name: "Aureline Coffee Grinder",
    subtitle: "Fresh precision grinding for richer coffee flavor.",
    description:
      "Burr coffee grinder with adjustable grind settings, low-noise motor, and stainless steel grinding chamber.",
    category: "Kitchen",
    price: 139,
    heroImage:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521302200778-33500795e128?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["coffee", "grinder", "kitchen", "espresso"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 201,
    searchableText: "coffee grinder burr espresso brewing kitchen appliance",
    features: [
      { label: "Grinding", value: "Conical burr system" },
      { label: "Settings", value: "18 grind levels" },
    ],
    knowledgeChunks: [
      {
        title: "Coffee freshness",
        body: "Enhances flavor extraction through consistent and adjustable coffee grinding.",
      },
    ],
    embedding: [],
  },
  {
    slug: "lumexa-desk-organizer",
    name: "Lumexa Desk Organizer",
    subtitle: "Streamlined organization for clutter-free workspaces.",
    description:
      "Multi-compartment desk organizer crafted from bamboo and metal for storing office essentials efficiently.",
    category: "Office",
    price: 49,
    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["desk", "organizer", "office", "workspace"],
    featured: false,
    inStock: true,
    rating: 4.5,
    reviewCount: 77,
    searchableText: "desk organizer bamboo workspace office storage",
    features: [
      { label: "Material", value: "Bamboo and steel" },
      { label: "Compartments", value: "6 storage sections" },
    ],
    knowledgeChunks: [
      {
        title: "Workspace organization",
        body: "Keeps office supplies and accessories neatly arranged for improved productivity.",
      },
    ],
    embedding: [],
  },
  {
    slug: "arclight-fitness-band",
    name: "Arclight Fitness Band",
    subtitle: "Lightweight activity tracking for everyday wellness.",
    description:
      "Slim fitness tracker with sleep monitoring, step counting, and real-time workout tracking capabilities.",
    category: "Wearables",
    price: 89,
    heroImage:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["fitness-band", "wearable", "health", "tracker"],
    featured: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 233,
    searchableText: "fitness band wearable sleep tracker wellness health",
    features: [
      { label: "Battery", value: "10-day battery life" },
      { label: "Tracking", value: "24/7 activity monitoring" },
    ],
    knowledgeChunks: [
      {
        title: "Wellness insights",
        body: "Tracks movement, sleep, and workouts to encourage healthier daily habits.",
      },
    ],
    embedding: [],
  },
  {
    slug: "virelia-silk-pillowcase",
    name: "Virelia Silk Pillowcase",
    subtitle: "Smooth luxurious comfort for restorative sleep.",
    description:
      "Mulberry silk pillowcase designed to reduce friction on hair and skin while maintaining cooling comfort.",
    category: "Home",
    price: 69,
    heroImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["silk", "pillowcase", "bedroom", "luxury"],
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 98,
    searchableText: "silk pillowcase luxury bedding cooling sleep comfort",
    features: [
      { label: "Fabric", value: "22 momme mulberry silk" },
      { label: "Closure", value: "Hidden zipper design" },
    ],
    knowledgeChunks: [
      {
        title: "Sleep quality",
        body: "Provides breathable softness that supports comfortable overnight rest.",
      },
    ],
    embedding: [],
  },
  {
    slug: "orvion-camping-tent",
    name: "Orvion Camping Tent",
    subtitle: "Reliable shelter engineered for outdoor escapes.",
    description:
      "Four-person waterproof camping tent with quick-setup frame, ventilation panels, and reinforced weather protection.",
    category: "Outdoor",
    price: 259,
    heroImage:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["camping", "tent", "outdoor", "travel"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 189,
    searchableText: "camping tent waterproof outdoor shelter hiking",
    features: [
      { label: "Capacity", value: "4-person tent" },
      { label: "Protection", value: "Waterproof rainfly" },
    ],
    knowledgeChunks: [
      {
        title: "Outdoor shelter",
        body: "Offers weather-resistant protection and ventilation for comfortable camping experiences.",
      },
    ],
    embedding: [],
  },
  {
    slug: "caldora-hair-dryer-pro",
    name: "Caldora Hair Dryer Pro",
    subtitle: "Fast gentle drying with salon-grade performance.",
    description:
      "Ionic hair dryer with temperature control, lightweight body, and low-noise airflow technology.",
    category: "Personal Care",
    price: 159,
    heroImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["hair-dryer", "beauty", "personal-care", "styling"],
    featured: false,
    inStock: true,
    rating: 4.8,
    reviewCount: 173,
    searchableText: "ionic hair dryer beauty styling salon personal care",
    features: [
      { label: "Technology", value: "Negative ion airflow" },
      { label: "Power", value: "1800W motor" },
    ],
    knowledgeChunks: [
      {
        title: "Hair styling",
        body: "Reduces drying time while minimizing heat damage and frizz.",
      },
    ],
    embedding: [],
  },
  {
    slug: "solstice-mini-fridge",
    name: "Solstice Mini Fridge",
    subtitle: "Compact cooling convenience for personal spaces.",
    description:
      "Energy-efficient mini refrigerator with adjustable shelves, silent operation, and compact modern styling.",
    category: "Appliances",
    price: 329,
    heroImage:
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["mini-fridge", "appliance", "cooling", "home"],
    featured: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 158,
    searchableText: "mini fridge compact refrigerator cooling appliance",
    features: [
      { label: "Capacity", value: "90L interior space" },
      { label: "Cooling", value: "Low-noise compressor" },
    ],
    knowledgeChunks: [
      {
        title: "Compact storage",
        body: "Provides convenient refrigerated storage for bedrooms, offices, and studio apartments.",
      },
    ],
    embedding: [],
  },
  {
    slug: "aeris-smart-ceiling-fan",
    name: "Aeris Smart Ceiling Fan",
    subtitle: "Quiet airflow with connected climate convenience.",
    description:
      "Modern ceiling fan with app control, reversible airflow modes, integrated LED lighting, and silent DC motor efficiency.",
    category: "Home",
    price: 349,
    heroImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["ceiling-fan", "smart-home", "cooling", "lighting"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 184,
    searchableText: "smart ceiling fan LED cooling home automation",
    features: [
      { label: "Motor", value: "Silent DC motor" },
      { label: "Control", value: "App + remote support" },
    ],
    knowledgeChunks: [
      {
        title: "Home comfort",
        body: "Improves airflow efficiency while maintaining low-noise operation for bedrooms and living spaces.",
      },
    ],
    embedding: [],
  },
  {
    slug: "veltrix-laptop-dock",
    name: "Veltrix Laptop Dock",
    subtitle: "Expanded connectivity for streamlined workflows.",
    description:
      "USB-C docking station with dual monitor support, Ethernet connectivity, and multiple high-speed USB ports.",
    category: "Electronics",
    price: 189,
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["dock", "usb-c", "office", "accessories"],
    featured: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 213,
    searchableText: "USB-C dock laptop workstation connectivity office",
    features: [
      { label: "Display Support", value: "Dual 4K monitors" },
      { label: "Ports", value: "11-in-1 connectivity" },
    ],
    knowledgeChunks: [
      {
        title: "Workspace expansion",
        body: "Simplifies workstation setup with centralized charging, display, and peripheral connectivity.",
      },
    ],
    embedding: [],
  },
  {
    slug: "norvale-picnic-blanket",
    name: "Norvale Picnic Blanket",
    subtitle: "Comfortable outdoor lounging with waterproof protection.",
    description:
      "Foldable picnic blanket featuring soft woven fabric, waterproof underside, and portable carry handle.",
    category: "Outdoor",
    price: 59,
    heroImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["picnic", "outdoor", "blanket", "travel"],
    featured: false,
    inStock: true,
    rating: 4.5,
    reviewCount: 69,
    searchableText: "picnic blanket waterproof outdoor camping travel",
    features: [
      { label: "Material", value: "Soft woven polyester" },
      { label: "Base", value: "Waterproof backing" },
    ],
    knowledgeChunks: [
      {
        title: "Outdoor relaxation",
        body: "Provides comfortable seating for picnics, beach trips, and outdoor gatherings.",
      },
    ],
    embedding: [],
  },
  {
    slug: "elyra-ring-light-studio",
    name: "Elyra Ring Light Studio",
    subtitle: "Professional lighting for creators and streamers.",
    description:
      "Adjustable LED ring light with tripod stand, phone mount, and customizable brightness for content production.",
    category: "Creator Gear",
    price: 129,
    heroImage:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["ring-light", "creator", "streaming", "lighting"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 201,
    searchableText: "ring light creator streaming studio lighting content",
    features: [
      { label: "Brightness", value: "10 adjustable levels" },
      { label: "Mount", value: "Universal phone holder" },
    ],
    knowledgeChunks: [
      {
        title: "Content creation",
        body: "Enhances video quality and portrait lighting for streaming, photography, and tutorials.",
      },
    ],
    embedding: [],
  },
  {
    slug: "caldris-electric-grill",
    name: "Caldris Electric Grill",
    subtitle: "Indoor grilling with smoky flavor performance.",
    description:
      "Countertop electric grill with adjustable heat control, non-stick cooking surface, and removable drip tray.",
    category: "Kitchen",
    price: 239,
    heroImage:
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["grill", "kitchen", "cooking", "appliance"],
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 149,
    searchableText: "electric grill indoor cooking non-stick appliance",
    features: [
      { label: "Cooking Area", value: "Large grill plate" },
      { label: "Temperature", value: "Adjustable heat control" },
    ],
    knowledgeChunks: [
      {
        title: "Indoor cooking",
        body: "Enables convenient grilling of meats and vegetables without outdoor equipment.",
      },
    ],
    embedding: [],
  },
  {
    slug: "orvexa-memory-foam-pillow",
    name: "Orvexa Memory Foam Pillow",
    subtitle: "Adaptive support engineered for restorative sleep.",
    description:
      "Ergonomic memory foam pillow with breathable cooling cover and pressure-relieving neck support.",
    category: "Home",
    price: 89,
    heroImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["pillow", "sleep", "memory-foam", "bedroom"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 276,
    searchableText: "memory foam pillow ergonomic cooling sleep support",
    features: [
      { label: "Foam", value: "High-density memory foam" },
      { label: "Cover", value: "Breathable cooling fabric" },
    ],
    knowledgeChunks: [
      {
        title: "Sleep posture",
        body: "Supports neck alignment and pressure relief for improved overnight comfort.",
      },
    ],
    embedding: [],
  },
  {
    slug: "virello-bike-helmet",
    name: "Virello Bike Helmet",
    subtitle: "Lightweight protection for urban and trail riders.",
    description:
      "Ventilated cycling helmet with adjustable fit system, impact-resistant shell, and reflective safety details.",
    category: "Sports",
    price: 119,
    heroImage:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["helmet", "cycling", "sports", "safety"],
    featured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 124,
    searchableText: "bike helmet cycling safety lightweight adjustable",
    features: [
      { label: "Ventilation", value: "18 airflow vents" },
      { label: "Safety", value: "Impact-resistant shell" },
    ],
    knowledgeChunks: [
      {
        title: "Cycling safety",
        body: "Provides protective head coverage with comfortable airflow during long rides.",
      },
    ],
    embedding: [],
  },
  {
    slug: "lumora-smart-speaker",
    name: "Lumora Smart Speaker",
    subtitle: "Voice-controlled audio with room-filling sound.",
    description:
      "Compact smart speaker featuring voice assistant integration, multi-room audio support, and balanced acoustic tuning.",
    category: "Electronics",
    price: 149,
    heroImage:
      "https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512446816042-444d64126727?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["smart-speaker", "audio", "voice-control", "music"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 301,
    searchableText: "smart speaker voice assistant wireless audio home",
    features: [
      { label: "Assistant", value: "Voice control support" },
      { label: "Audio", value: "360-degree sound" },
    ],
    knowledgeChunks: [
      {
        title: "Connected audio",
        body: "Supports music playback, voice commands, and smart home integration.",
      },
    ],
    embedding: [],
  },
  {
    slug: "zenith-portable-power-bank",
    name: "Zenith Portable Power Bank",
    subtitle: "Reliable backup charging for devices on the go.",
    description:
      "High-capacity power bank with USB-C fast charging, dual device support, and compact travel-ready construction.",
    category: "Electronics",
    price: 79,
    heroImage:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["power-bank", "charging", "mobile", "travel"],
    featured: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 259,
    searchableText: "portable power bank fast charging USB-C travel",
    features: [
      { label: "Capacity", value: "20000mAh battery" },
      { label: "Output", value: "20W fast charging" },
    ],
    knowledgeChunks: [
      {
        title: "Portable power",
        body: "Keeps smartphones and accessories charged during travel, commuting, and outdoor use.",
      },
    ],
    embedding: [],
  },
  {
    slug: "solvane-barista-milk-frother",
    name: "Solvane Barista Milk Frother",
    subtitle: "Creamy textured milk for café-inspired drinks.",
    description:
      "Electric milk frother with hot and cold foam settings, stainless steel jug, and automatic shutoff safety.",
    category: "Kitchen",
    price: 89,
    heroImage:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521302200778-33500795e128?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["milk-frother", "coffee", "kitchen", "barista"],
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 166,
    searchableText: "milk frother coffee latte cappuccino kitchen appliance",
    features: [
      { label: "Modes", value: "Hot & cold frothing" },
      { label: "Capacity", value: "300ml stainless jug" },
    ],
    knowledgeChunks: [
      {
        title: "Coffee preparation",
        body: "Creates smooth milk foam suitable for cappuccinos, lattes, and specialty drinks.",
      },
    ],
    embedding: [],
  },
  {
    slug: "arclume-portable-monitor",
    name: "Arclume Portable Monitor",
    subtitle: "Dual-screen productivity wherever work happens.",
    description:
      "Ultra-slim portable monitor with Full HD display, USB-C connectivity, and foldable smart cover stand.",
    category: "Electronics",
    price: 269,
    heroImage:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["portable-monitor", "display", "office", "travel"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 223,
    searchableText: "portable monitor dual screen USB-C productivity display",
    features: [
      { label: "Resolution", value: "1920x1080 Full HD" },
      { label: "Connectivity", value: "USB-C + Mini HDMI" },
    ],
    knowledgeChunks: [
      {
        title: "Mobile productivity",
        body: "Expands laptop workspace for multitasking during travel and remote work.",
      },
    ],
    embedding: [],
  },
  {
    slug: "velora-aroma-diffuser",
    name: "Velora Aroma Diffuser",
    subtitle: "Calming fragrance diffusion with ambient lighting.",
    description:
      "Ultrasonic essential oil diffuser featuring quiet mist operation, LED mood lighting, and auto shutoff safety.",
    category: "Wellness",
    price: 69,
    heroImage:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["diffuser", "wellness", "aromatherapy", "home"],
    featured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 118,
    searchableText: "essential oil diffuser aromatherapy wellness relaxation",
    features: [
      { label: "Mist Mode", value: "Ultrasonic cool mist" },
      { label: "Lighting", value: "7-color ambient LEDs" },
    ],
    knowledgeChunks: [
      {
        title: "Relaxation support",
        body: "Disperses essential oils to create calming indoor environments for relaxation and sleep.",
      },
    ],
    embedding: [],
  },
  {
    slug: "norex-folding-scooter",
    name: "Norex Folding Scooter",
    subtitle: "Compact mobility designed for urban convenience.",
    description:
      "Foldable commuter scooter with shock-absorbing wheels, lightweight aluminum frame, and quick-lock folding system.",
    category: "Transportation",
    price: 219,
    heroImage:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["scooter", "commuting", "urban", "portable"],
    featured: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 147,
    searchableText: "folding scooter urban commuting portable lightweight",
    features: [
      { label: "Frame", value: "Aircraft-grade aluminum" },
      { label: "Portability", value: "Quick folding lock" },
    ],
    knowledgeChunks: [
      {
        title: "Urban commuting",
        body: "Provides portable short-distance transportation for city commuting and travel.",
      },
    ],
    embedding: [],
  },
  {
    slug: "elyndra-jewelry-box",
    name: "Elyndra Jewelry Box",
    subtitle: "Elegant organization for treasured accessories.",
    description:
      "Multi-layer jewelry organizer with velvet-lined compartments, secure closure, and compact luxury design.",
    category: "Accessories",
    price: 89,
    heroImage:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["jewelry", "storage", "accessories", "luxury"],
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 93,
    searchableText: "jewelry box velvet organizer luxury accessory storage",
    features: [
      { label: "Interior", value: "Velvet-lined sections" },
      { label: "Storage", value: "Multi-layer compartments" },
    ],
    knowledgeChunks: [
      {
        title: "Accessory organization",
        body: "Protects jewelry pieces while keeping accessories neatly arranged and accessible.",
      },
    ],
    embedding: [],
  },
  {
    slug: "solvex-smart-plug",
    name: "Solvex Smart Plug",
    subtitle: "Simple automation for connected everyday devices.",
    description:
      "Compact Wi-Fi smart plug with scheduling features, voice assistant support, and energy monitoring capabilities.",
    category: "Smart Home",
    price: 39,
    heroImage:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["smart-plug", "automation", "home", "energy"],
    featured: true,
    inStock: true,
    rating: 4.5,
    reviewCount: 176,
    searchableText: "smart plug wifi automation energy monitoring home",
    features: [
      { label: "Control", value: "App & voice assistant" },
      { label: "Monitoring", value: "Real-time energy usage" },
    ],
    knowledgeChunks: [
      {
        title: "Home automation",
        body: "Enables remote device control and automated schedules for appliances and lighting.",
      },
    ],
    embedding: [],
  },
  {
    slug: "caldris-yoga-block-set",
    name: "Caldris Yoga Block Set",
    subtitle: "Stable support for flexibility and alignment.",
    description:
      "High-density foam yoga blocks with non-slip surface and lightweight ergonomic construction.",
    category: "Fitness",
    price: 35,
    heroImage:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["yoga", "fitness", "wellness", "exercise"],
    featured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 81,
    searchableText: "yoga blocks flexibility balance exercise support",
    features: [
      { label: "Material", value: "High-density EVA foam" },
      { label: "Grip", value: "Textured non-slip finish" },
    ],
    knowledgeChunks: [
      {
        title: "Exercise support",
        body: "Improves flexibility and stability during yoga, stretching, and balance exercises.",
      },
    ],
    embedding: [],
  },
  {
    slug: "virexa-espresso-cups",
    name: "Virexa Espresso Cups",
    subtitle: "Minimal ceramic craftsmanship for coffee rituals.",
    description:
      "Hand-finished ceramic espresso cup set designed for heat retention and elegant serving presentation.",
    category: "Kitchen",
    price: 49,
    heroImage:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["espresso", "cups", "coffee", "ceramic"],
    featured: false,
    inStock: true,
    rating: 4.5,
    reviewCount: 67,
    searchableText: "ceramic espresso cups coffee kitchen drinkware",
    features: [
      { label: "Material", value: "Stoneware ceramic" },
      { label: "Set", value: "4 espresso cups" },
    ],
    knowledgeChunks: [
      {
        title: "Coffee serving",
        body: "Enhances espresso presentation while retaining beverage warmth.",
      },
    ],
    embedding: [],
  },
  {
    slug: "lumetra-gaming-mouse",
    name: "Lumetra Gaming Mouse",
    subtitle: "Precision tracking for competitive gameplay.",
    description:
      "Ergonomic gaming mouse with adjustable DPI settings, customizable RGB lighting, and ultra-responsive switches.",
    category: "Electronics",
    price: 99,
    heroImage:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["gaming-mouse", "gaming", "computer", "rgb"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 312,
    searchableText: "gaming mouse RGB DPI esports precision tracking",
    features: [
      { label: "Sensor", value: "16000 DPI optical sensor" },
      { label: "Buttons", value: "Programmable controls" },
    ],
    knowledgeChunks: [
      {
        title: "Gaming control",
        body: "Delivers responsive tracking accuracy for fast-paced gaming performance.",
      },
    ],
    embedding: [],
  },
  {
    slug: "orvella-ceramic-vase",
    name: "Orvella Ceramic Vase",
    subtitle: "Architectural decor inspired by modern interiors.",
    description:
      "Handcrafted ceramic vase with matte finish and sculptural silhouette suitable for dried or fresh floral arrangements.",
    category: "Home Decor",
    price: 79,
    heroImage:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["vase", "decor", "ceramic", "home"],
    featured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 58,
    searchableText: "ceramic vase home decor minimalist floral",
    features: [
      { label: "Finish", value: "Matte ceramic texture" },
      { label: "Design", value: "Modern sculptural form" },
    ],
    knowledgeChunks: [
      {
        title: "Interior styling",
        body: "Adds artistic texture and decorative balance to living spaces and shelves.",
      },
    ],
    embedding: [],
  },
  {
    slug: "zenvica-laptop-sleeve",
    name: "Zenvica Laptop Sleeve",
    subtitle: "Minimal protection for daily device transport.",
    description:
      "Water-resistant padded laptop sleeve with magnetic closure and soft microfiber device lining.",
    category: "Accessories",
    price: 59,
    heroImage:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["laptop-sleeve", "accessories", "travel", "office"],
    featured: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 121,
    searchableText: "laptop sleeve padded protective water resistant",
    features: [
      { label: "Protection", value: "Padded microfiber interior" },
      { label: "Closure", value: "Magnetic flap design" },
    ],
    knowledgeChunks: [
      {
        title: "Device protection",
        body: "Protects laptops from scratches and minor impacts during transport.",
      },
    ],
    embedding: [],
  },
  {
    slug: "aurexis-smart-garden-light",
    name: "Aurexis Smart Garden Light",
    subtitle: "Ambient outdoor illumination with automated control.",
    description:
      "Weather-resistant smart garden light with solar charging, motion sensing, and customizable brightness settings.",
    category: "Outdoor",
    price: 119,
    heroImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["garden-light", "smart-home", "solar", "outdoor"],
    featured: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 137,
    searchableText: "smart garden light solar outdoor motion sensor",
    features: [
      { label: "Power", value: "Solar rechargeable battery" },
      { label: "Protection", value: "IP65 weather resistance" },
    ],
    knowledgeChunks: [
      {
        title: "Outdoor lighting",
        body: "Improves nighttime visibility and outdoor ambiance with automated illumination.",
      },
    ],
    embedding: [],
  },
  {
    slug: "veltrix-portable-blender",
    name: "Veltrix Portable Blender",
    subtitle: "Fresh smoothies and shakes anywhere you go.",
    description:
      "USB rechargeable portable blender with compact bottle design, stainless steel blades, and leakproof lid.",
    category: "Kitchen",
    price: 69,
    heroImage:
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["portable-blender", "smoothies", "travel", "kitchen"],
    featured: false,
    inStock: true,
    rating: 4.5,
    reviewCount: 109,
    searchableText: "portable blender smoothie USB rechargeable kitchen",
    features: [
      { label: "Battery", value: "USB rechargeable system" },
      { label: "Blades", value: "6-point stainless steel" },
    ],
    knowledgeChunks: [
      {
        title: "Portable nutrition",
        body: "Supports convenient smoothie and protein shake preparation during travel or workouts.",
      },
    ],
    embedding: [],
  },
  {
    slug: "norvane-travel-pillow",
    name: "Norvane Travel Pillow",
    subtitle: "Supportive comfort for flights and road trips.",
    description:
      "Memory foam travel pillow with ergonomic neck contouring, breathable fabric cover, and compact carrying pouch.",
    category: "Travel",
    price: 45,
    heroImage:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["travel-pillow", "comfort", "travel", "memory-foam"],
    featured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 94,
    searchableText: "travel pillow neck support memory foam flights",
    features: [
      { label: "Support", value: "Ergonomic neck contour" },
      { label: "Portability", value: "Compact carry pouch" },
    ],
    knowledgeChunks: [
      {
        title: "Travel comfort",
        body: "Provides neck support and improved rest during long-distance journeys.",
      },
    ],
    embedding: [],
  },
  {
    slug: "elyra-wireless-earbuds",
    name: "Elyra Wireless Earbuds",
    subtitle: "Compact audio freedom with immersive sound.",
    description:
      "True wireless earbuds with active noise cancellation, touch controls, and water-resistant design.",
    category: "Electronics",
    price: 179,
    heroImage:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["earbuds", "wireless", "audio", "ANC"],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 401,
    searchableText: "wireless earbuds ANC bluetooth audio music",
    features: [
      { label: "Battery", value: "30 hours with case" },
      { label: "Resistance", value: "IPX5 sweat resistance" },
    ],
    knowledgeChunks: [
      {
        title: "Audio mobility",
        body: "Supports wireless listening with immersive sound and portable charging convenience.",
      },
    ],
    embedding: [],
  },
  {
    slug: "caldris-cast-iron-pan",
    name: "Caldris Cast Iron Pan",
    subtitle: "Durable cookware built for generations of cooking.",
    description:
      "Pre-seasoned cast iron skillet designed for even heat retention, stovetop versatility, and oven-safe performance.",
    category: "Kitchen",
    price: 89,
    heroImage:
      "https://images.unsplash.com/photo-1584990347449-a7f4f8e3d0d4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["cast-iron", "cookware", "kitchen", "cooking"],
    featured: false,
    inStock: true,
    rating: 4.9,
    reviewCount: 183,
    searchableText: "cast iron skillet cookware oven safe kitchen",
    features: [
      { label: "Material", value: "Pre-seasoned cast iron" },
      { label: "Compatibility", value: "Stovetop & oven safe" },
    ],
    knowledgeChunks: [
      {
        title: "Cooking durability",
        body: "Provides consistent heat retention for searing, roasting, and everyday cooking.",
      },
    ],
    embedding: [],
  },
  {
    slug: "lumetra-standing-mirror",
    name: "Lumetra Standing Mirror",
    subtitle: "Minimal full-length reflection with elegant styling.",
    description:
      "Frameless standing mirror with anti-shatter glass, slim aluminum border, and adjustable positioning stand.",
    category: "Home Decor",
    price: 279,
    heroImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["mirror", "decor", "bedroom", "furniture"],
    featured: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 128,
    searchableText: "standing mirror full length decor bedroom modern",
    features: [
      { label: "Glass", value: "Anti-shatter mirror surface" },
      { label: "Frame", value: "Slim aluminum border" },
    ],
    knowledgeChunks: [
      {
        title: "Interior utility",
        body: "Adds functional full-body reflection while enhancing room depth and lighting.",
      },
    ],
    embedding: [],
  },
  {
    slug: "virexa-pet-bed",
    name: "Virexa Pet Bed",
    subtitle: "Soft supportive rest space for cats and dogs.",
    description:
      "Orthopedic pet bed with plush memory foam cushioning, removable washable cover, and anti-slip base.",
    category: "Pets",
    price: 99,
    heroImage:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["pet-bed", "pets", "comfort", "memory-foam"],
    featured: false,
    inStock: true,
    rating: 4.8,
    reviewCount: 141,
    searchableText: "pet bed orthopedic memory foam washable cover",
    features: [
      { label: "Cushioning", value: "Orthopedic foam support" },
      { label: "Maintenance", value: "Machine washable cover" },
    ],
    knowledgeChunks: [
      {
        title: "Pet comfort",
        body: "Supports comfortable sleep and joint relief for pets of various sizes.",
      },
    ],
    embedding: [],
  },
  {
    slug: "orvessa-electric-heater",
    name: "Orvessa Electric Heater",
    subtitle: "Efficient warmth with compact room-friendly design.",
    description:
      "Portable ceramic space heater with adjustable thermostat, safety shutoff, and energy-efficient heating modes.",
    category: "Home Appliances",
    price: 149,
    heroImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["heater", "home", "winter", "appliance"],
    featured: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 163,
    searchableText: "electric heater ceramic portable winter home appliance",
    features: [
      { label: "Heating", value: "Ceramic rapid heating" },
      { label: "Safety", value: "Auto tip-over shutoff" },
    ],
    knowledgeChunks: [
      {
        title: "Indoor warmth",
        body: "Provides fast and energy-conscious room heating during colder seasons.",
      },
    ],
    embedding: [],
  },
  {
    slug: "zenvora-resistance-bands",
    name: "Zenvora Resistance Bands",
    subtitle: "Versatile strength training for any environment.",
    description:
      "Workout resistance band set with multiple resistance levels, carrying pouch, and full-body training support.",
    category: "Fitness",
    price: 49,
    heroImage:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["resistance-bands", "fitness", "workout", "exercise"],
    featured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 117,
    searchableText: "resistance bands workout strength fitness portable",
    features: [
      { label: "Resistance", value: "5 resistance levels" },
      { label: "Portability", value: "Travel storage pouch" },
    ],
    knowledgeChunks: [
      {
        title: "Strength training",
        body: "Supports portable full-body workouts for strength, flexibility, and rehabilitation exercises.",
      },
    ],
    embedding: [],
  },
  {
    slug: "solstice-digital-alarm-clock",
    name: "Solstice Digital Alarm Clock",
    subtitle: "Modern bedside functionality with calming illumination.",
    description:
      "LED digital alarm clock with sunrise simulation, wireless charging pad, and customizable sleep sounds.",
    category: "Home",
    price: 79,
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["alarm-clock", "bedroom", "wireless-charging", "sleep"],
    featured: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 149,
    searchableText: "digital alarm clock sunrise wireless charging bedside",
    features: [
      { label: "Lighting", value: "Sunrise wake simulation" },
      { label: "Charging", value: "Integrated wireless pad" },
    ],
    knowledgeChunks: [
      {
        title: "Sleep routines",
        body: "Supports gentle wake-up experiences and organized bedside charging convenience.",
      },
    ],
    embedding: [],
  },
];
