export const products = [
    {
        id: 1,
        name: "Air Glide Running Shoes",
        category: "Running",
        price: 1299,
        salePrice: 999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=60",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
            "https://images.unsplash.com/photo-1562183241-b937e95585b6"
        ],
        description: "Lightweight and responsive running shoes designed for maximum comfort during long distances. Features breathable mesh upper and cushioned midsole.",
        brand: "SoleMate",
        rating: 4.8,
        reviews: 124,
        isNew: true,
        isSale: true,
        colors: ["Black", "Blue", "Red"],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        stock: 45,
        tags: ["running", "athletic", "lightweight"]
    },
    {
        id: 2,
        name: "Urban Street Sneakers",
        category: "Casual",
        price: 899,
        salePrice: null,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=60",
        images: [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
            "https://images.unsplash.com/photo-1549298916-f52d724204b4"
        ],
        description: "Trendy street-style sneakers perfect for everyday wear. Features durable canvas upper and comfortable cushioned insole.",
        brand: "SoleMate",
        rating: 4.5,
        reviews: 89,
        isNew: false,
        isSale: false,
        colors: ["White", "Black", "Gray", "Navy"],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        stock: 78,
        tags: ["casual", "sneakers", "street style"]
    },
    {
        id: 3,
        name: "Pro Court Tennis Shoes",
        category: "Athletic",
        price: 1499,
        salePrice: 1299,
        image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80",
        images: [
            "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb",
            "https://images.unsplash.com/photo-1554735490-5974588cbc4f",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa"
        ],
        description: "Professional-grade tennis shoes with excellent court grip and ankle support. Designed for quick lateral movements and durability.",
        brand: "SoleMate",
        rating: 4.7,
        reviews: 56,
        isNew: false,
        isSale: true,
        colors: ["White/Green", "White/Blue", "Black/White"],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        stock: 32,
        tags: ["tennis", "athletic", "court shoes"]
    },
    {
        id: 4,
        name: "Comfort Plus Walking Shoes",
        category: "Walking",
        price: 799,
        salePrice: null,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=60",
        images: [
            "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
            "https://images.unsplash.com/photo-1539185441755-769473a23570",
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
        ],
        description: "Ultra-comfortable walking shoes with memory foam insoles and arch support. Perfect for all-day wear and extended walks.",
        brand: "SoleMate",
        rating: 4.9,
        reviews: 203,
        isNew: false,
        isSale: false,
        colors: ["Black", "Gray", "Brown", "Navy"],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        stock: 120,
        tags: ["walking", "comfort", "everyday"]
    },
    {
        id: 5,
        name: "Hiker Trail Boots",
        category: "Hiking",
        price: 1599,
        salePrice: null,
        image: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=800&q=60",
        images: [
            "https://images.unsplash.com/photo-1606890658317-7d14490b76fd",
            "https://images.unsplash.com/photo-1553545985-1e0f4015e5c3",
            "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
        ],
        description: "Rugged hiking boots with waterproof exterior and excellent traction. Designed for challenging terrains and outdoor adventures.",
        brand: "SoleMate",
        rating: 4.6,
        reviews: 78,
        isNew: true,
        isSale: false,
        colors: ["Brown", "Green", "Gray/Orange"],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        stock: 45,
        tags: ["hiking", "outdoor", "waterproof"]
    },
    {
        id: 6,
        name: "Speed Trainer Basketball Shoes",
        category: "Basketball",
        price: 1399,
        salePrice: 1199,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=60",
        images: [
            "https://images.unsplash.com/photo-1552346154-21d32810aba3",
            "https://images.unsplash.com/photo-1621665421558-831f91fd0500",
            "https://images.unsplash.com/photo-1605348532760-6753d2c43329"
        ],
        description: "High-performance basketball shoes with excellent ankle support and court grip. Designed for agility and explosive movements.",
        brand: "SoleMate",
        rating: 4.7,
        reviews: 92,
        isNew: false,
        isSale: true,
        colors: ["Black/Red", "Blue/White", "Gray/Yellow"],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
        stock: 38,
        tags: ["basketball", "athletic", "high-top"]
    },
    {
        id: 7,
        name: "Classic Leather Loafers",
        category: "Formal",
        price: 1199,
        salePrice: null,
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=60",
        images: [
            "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4",
            "https://images.unsplash.com/photo-1531310197839-ccf54634509e",
            "https://images.unsplash.com/photo-1613987876445-fcb353cd8e27"
        ],
        description: "Elegant leather loafers perfect for formal occasions. Handcrafted with genuine leather and featuring a comfortable cushioned insole.",
        brand: "SoleMate",
        rating: 4.8,
        reviews: 45,
        isNew: false,
        isSale: false,
        colors: ["Black", "Brown", "Tan"],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        stock: 25,
        tags: ["formal", "leather", "loafers"]
    },
    {
        id: 8,
        name: "Flex Gym Training Shoes",
        category: "Training",
        price: 1099,
        salePrice: 899,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=60",
        images: [
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
            "https://images.unsplash.com/photo-1562183241-b937e95585b6",
            "https://images.unsplash.com/photo-1605408499391-6368c628ef42"
        ],
        description: "Versatile training shoes designed for gym workouts, CrossFit, and weight training. Features a flexible sole and lateral support.",
        brand: "SoleMate",
        rating: 4.5,
        reviews: 67,
        isNew: false,
        isSale: true,
        colors: ["Black/Gray", "Blue/Black", "Red/White"],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        stock: 52,
        tags: ["training", "gym", "cross-training"]
    },
    {
        id: 9,
        name: "Canvas Slip-On Sneakers",
        category: "Casual",
        price: 599,
        salePrice: null,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=60",
        images: [
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
            "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05",
            "https://images.unsplash.com/photo-1545867454-7b1a2a3949ea"
        ],
        description: "Easy slip-on canvas sneakers perfect for casual everyday wear. Features elastic side panels and padded collar for comfort.",
        brand: "SoleMate",
        rating: 4.4,
        reviews: 113,
        isNew: true,
        isSale: false,
        colors: ["Black", "White", "Navy", "Red", "Gray"],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        stock: 85,
        tags: ["casual", "slip-on", "canvas"]
    },
    {
        id: 10,
        name: "Aqua Water Shoes",
        category: "Water Sports",
        price: 699,
        salePrice: 499,
        image: "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?w=400",
        images: [
            "https://images.unsplash.com/photo-1520096459084-096af33f9ea5",
            "https://images.unsplash.com/photo-1617689563472-c66428e83d17",
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
        ],
        description: "Lightweight water shoes with quick-dry material and excellent drainage. Perfect for beach activities, swimming, and water sports.",
        brand: "SoleMate",
        rating: 4.3,
        reviews: 38,
        isNew: false,
        isSale: true,
        colors: ["Blue", "Black", "Gray/Teal"],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        stock: 62,
        tags: ["water sports", "beach", "swimming"]
    },
    {
        id: 11,
        name: "Desert Suede Chukka Boots",
        category: "Casual",
        price: 1299,
        salePrice: null,
        image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&q=60",
        images: [
            "https://images.unsplash.com/photo-1638247025967-b4e38f787b76",
            "https://images.unsplash.com/photo-1638247113237-61a1622821bc",
            "https://images.unsplash.com/photo-1626947346165-4c2288dadc2a"
        ],
        description: "Classic suede chukka boots that blend casual and formal style. Features soft suede upper and comfortable crepe rubber sole.",
        brand: "SoleMate",
        rating: 4.7,
        reviews: 51,
        isNew: false,
        isSale: false,
        colors: ["Sand", "Brown", "Navy"],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        stock: 29,
        tags: ["boots", "suede", "casual"]
    },
    {
        id: 12,
        name: "Elite Racing Track Spikes",
        category: "Track & Field",
        price: 1499,
        salePrice: null,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=60",
        images: [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
            "https://images.unsplash.com/photo-1562183241-840b812fbcfd",
            "https://images.unsplash.com/photo-1595341888016-a392ef81b7de"
        ],
        description: "Lightweight track spikes designed for competitive sprinting and track events. Features removable spikes and aerodynamic design.",
        brand: "SoleMate",
        rating: 4.9,
        reviews: 27,
        isNew: true,
        isSale: false,
        colors: ["Black/Yellow", "Blue/White", "Red/Black"],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        stock: 18,
        tags: ["track", "racing", "spikes"]
    }
];

export const categories = [
    {
        id: 1,
        name: "Running",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=60",
        count: 24
    },
    {
        id: 2,
        name: "Casual",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=60",
        count: 36
    },
    {
        id: 3,
        name: "Athletic",
        image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=800&q=60",
        count: 18
    },
    {
        id: 4,
        name: "Formal",
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=60",
        count: 15
    },
    {
        id: 5,
        name: "Basketball",
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=60",
        count: 12
    },
    {
        id: 6,
        name: "Hiking",
        image: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=800&q=60",
        count: 9
    }
];