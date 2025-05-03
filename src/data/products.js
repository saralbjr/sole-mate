const products = [
    {
        id: 1,
        name: "Modern Scandinavian Sofa",
        category: "living-room",
        description: "Elegant and comfortable modern Scandinavian sofa with wooden legs. Perfect for your living room.",
        price: 899.99,
        salePrice: 699.99,
        rating: 4.8,
        reviewCount: 124,
        stock: 15,
        images: [
            "https://via.placeholder.com/600x400?text=Sofa+1",
            "https://via.placeholder.com/600x400?text=Sofa+2",
            "https://via.placeholder.com/600x400?text=Sofa+3",
        ],
        colors: ["Gray", "Blue", "Beige"],
        dimensions: {
            width: "210 cm",
            height: "85 cm",
            depth: "95 cm"
        },
        material: "Polyester, Wood",
        isNew: true,
        isSale: true,
        isHot: false,
        tags: ["sofa", "living room", "scandinavian", "modern"]
    },
    {
        id: 2,
        name: "Minimalist Coffee Table",
        category: "living-room",
        description: "Sleek minimalist coffee table with tempered glass top and metal frame. A perfect centerpiece for your living room.",
        price: 349.99,
        salePrice: null,
        rating: 4.5,
        reviewCount: 87,
        stock: 22,
        images: [
            "https://via.placeholder.com/600x400?text=Coffee+Table+1",
            "https://via.placeholder.com/600x400?text=Coffee+Table+2",
        ],
        colors: ["Black", "White", "Gold"],
        dimensions: {
            width: "120 cm",
            height: "45 cm",
            depth: "60 cm"
        },
        material: "Tempered Glass, Metal",
        isNew: false,
        isSale: false,
        isHot: true,
        tags: ["table", "coffee table", "minimalist", "living room"]
    },
    {
        id: 3,
        name: "Ergonomic Office Chair",
        category: "office",
        description: "Comfortable ergonomic office chair with adjustable height and lumbar support. Perfect for long working hours.",
        price: 299.99,
        salePrice: 249.99,
        rating: 4.7,
        reviewCount: 156,
        stock: 18,
        images: [
            "https://via.placeholder.com/600x400?text=Office+Chair+1",
            "https://via.placeholder.com/600x400?text=Office+Chair+2",
        ],
        colors: ["Black", "Gray"],
        dimensions: {
            width: "65 cm",
            height: "110-120 cm",
            depth: "65 cm"
        },
        material: "Mesh, Metal, Plastic",
        isNew: false,
        isSale: true,
        isHot: true,
        tags: ["chair", "office", "ergonomic", "work"]
    },
    {
        id: 4,
        name: "Queen Size Bed Frame",
        category: "bedroom",
        description: "Sturdy queen-size bed frame with upholstered headboard. Elegant and modern design for your bedroom.",
        price: 599.99,
        salePrice: null,
        rating: 4.6,
        reviewCount: 98,
        stock: 10,
        images: [
            "https://via.placeholder.com/600x400?text=Bed+Frame+1",
            "https://via.placeholder.com/600x400?text=Bed+Frame+2",
        ],
        colors: ["Dark Gray", "Light Gray", "Beige"],
        dimensions: {
            width: "160 cm",
            height: "120 cm",
            length: "200 cm"
        },
        material: "Wood, Fabric",
        isNew: true,
        isSale: false,
        isHot: false,
        tags: ["bed", "bedroom", "queen size", "modern"]
    },
    {
        id: 5,
        name: "Wooden Dining Table",
        category: "kitchen",
        description: "Solid wood dining table with elegant design. Perfect for family dinners and gatherings.",
        price: 749.99,
        salePrice: 649.99,
        rating: 4.9,
        reviewCount: 112,
        stock: 8,
        images: [
            "https://via.placeholder.com/600x400?text=Dining+Table+1",
            "https://via.placeholder.com/600x400?text=Dining+Table+2",
        ],
        colors: ["Natural Wood", "Walnut", "Oak"],
        dimensions: {
            width: "180 cm",
            height: "75 cm",
            depth: "90 cm"
        },
        material: "Solid Wood",
        isNew: false,
        isSale: true,
        isHot: true,
        tags: ["table", "dining", "kitchen", "wood"]
    },
    {
        id: 6,
        name: "Modern Bookshelf",
        category: "living-room",
        description: "Spacious modern bookshelf with multiple compartments. Perfect for displaying books and decorative items.",
        price: 399.99,
        salePrice: null,
        rating: 4.4,
        reviewCount: 76,
        stock: 14,
        images: [
            "https://via.placeholder.com/600x400?text=Bookshelf+1",
            "https://via.placeholder.com/600x400?text=Bookshelf+2",
        ],
        colors: ["White", "Black", "Brown"],
        dimensions: {
            width: "120 cm",
            height: "180 cm",
            depth: "35 cm"
        },
        material: "MDF, Wood Veneer",
        isNew: true,
        isSale: false,
        isHot: false,
        tags: ["bookshelf", "storage", "living room", "modern"]
    },
    {
        id: 7,
        name: "Stylish Floor Lamp",
        category: "living-room",
        description: "Stylish floor lamp with adjustable head. Perfect for creating cozy atmosphere in your living room or bedroom.",
        price: 149.99,
        salePrice: 119.99,
        rating: 4.3,
        reviewCount: 64,
        stock: 25,
        images: [
            "https://via.placeholder.com/600x400?text=Floor+Lamp+1",
            "https://via.placeholder.com/600x400?text=Floor+Lamp+2",
        ],
        colors: ["Black", "Gold", "Silver"],
        dimensions: {
            width: "30 cm",
            height: "160 cm",
            depth: "30 cm"
        },
        material: "Metal, Fabric",
        isNew: false,
        isSale: true,
        isHot: false,
        tags: ["lamp", "lighting", "floor lamp", "living room"]
    },
    {
        id: 8,
        name: "Wardrobe Cabinet",
        category: "bedroom",
        description: "Spacious wardrobe cabinet with hanging rod and shelves. Perfect for organizing your clothes and accessories.",
        price: 799.99,
        salePrice: null,
        rating: 4.7,
        reviewCount: 91,
        stock: 7,
        images: [
            "https://via.placeholder.com/600x400?text=Wardrobe+1",
            "https://via.placeholder.com/600x400?text=Wardrobe+2",
        ],
        colors: ["White", "Oak", "Walnut"],
        dimensions: {
            width: "150 cm",
            height: "200 cm",
            depth: "60 cm"
        },
        material: "MDF, Wood Veneer",
        isNew: true,
        isSale: false,
        isHot: true,
        tags: ["wardrobe", "storage", "bedroom", "cabinet"]
    },
    {
        id: 9,
        name: "Kitchen Counter Stools",
        category: "kitchen",
        description: "Set of 2 modern counter stools with comfortable seating. Perfect for kitchen islands and bars.",
        price: 199.99,
        salePrice: 169.99,
        rating: 4.5,
        reviewCount: 83,
        stock: 20,
        images: [
            "https://via.placeholder.com/600x400?text=Counter+Stools+1",
            "https://via.placeholder.com/600x400?text=Counter+Stools+2",
        ],
        colors: ["Black", "Gray", "White"],
        dimensions: {
            width: "45 cm",
            height: "95 cm",
            depth: "45 cm"
        },
        material: "Metal, Faux Leather",
        isNew: false,
        isSale: true,
        isHot: false,
        tags: ["stool", "chair", "kitchen", "modern"]
    },
    {
        id: 10,
        name: "Office Desk",
        category: "office",
        description: "Spacious office desk with drawers and ample workspace. Perfect for home office or professional workspace.",
        price: 449.99,
        salePrice: 399.99,
        rating: 4.8,
        reviewCount: 107,
        stock: 12,
        images: [
            "https://via.placeholder.com/600x400?text=Office+Desk+1",
            "https://via.placeholder.com/600x400?text=Office+Desk+2",
        ],
        colors: ["White", "Oak", "Black"],
        dimensions: {
            width: "140 cm",
            height: "75 cm",
            depth: "70 cm"
        },
        material: "MDF, Metal",
        isNew: true,
        isSale: true,
        isHot: true,
        tags: ["desk", "office", "workspace", "modern"]
    }
];

export default products;