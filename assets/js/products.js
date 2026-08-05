// ==========================================
// FINDWISE PRODUCTS DATABASE
// ==========================================

const products = [
   {
    id: 1,

    title: "Floating Wall Shelf",
    category: "Home",
    images:
    [
        "assets/images/floating-shelf/floating-shelf.png",
        "assets/images/floating-shelf/float2.png",
        "assets/images/floating-shelf/float3.png"
    ],
    

    price: "₹949",

    rating: "4.3",

    amazon: "https://www.amazon.in/BLUEWUD-Easton-Engineered-Display-Shelves/dp/B09T3D9K1Z?tag=homeorg12-21",

    description: "Modern floating wall shelf with a stylish geometric design. Perfect for displaying books, plants, and decorative items while saving space.",

    review: "A well-built shelf that combines functionality with modern aesthetics. Easy to install and ideal for home decoration.",

    pros: [
        "Premium wooden finish",
        "Modern geometric design",
        "Easy to install",
        "Space-saving",
        "Good value for money"
    ],

    cons: [
        "Not suitable for very heavy items",
        "Installation hardware quality could be better"
    ],

    specifications: {
        Material: "Engineered Wood",
        Color: "Walnut Brown",
        Mounting: "Wall Mounted",
        SuitableFor: "Living Room, Bedroom, Office",
        Warranty: "1 Year"
    },
},
{
    id: 2,
    title: "KEA VAO Book",
    category: "Student",
    images: [
        "assets/images/kea-book.png"
    ],
    price: "₹799",

    rating: "3.9",
    description: "Karnataka Village Administrative Officer Exam Book",
    review: "This book is comprehensive and well-structured, making it an excellent resource for exam preparation.",
    amazon: "https://www.amazon.in/2026-2027-Karnataka-Village-Administrative-Officer/dp/B0H8PFVHBZ?tag=homeorg12-21"
},
{
    id: 3,
    title: "Wooden Wall Shelf",
    category: "Home",
    images:[
     "assets/images/shelf/shelf1.png",
        "assets/images/shelf/shelf2.png",
        "assets/images/shelf/shelf3.png"
],
price: "₹619",

    rating: "4.1",
    description: "Stylish and functional wall shelf for your home",
    review: "This shelf is well-built and adds a nice touch to any room.This stylish floating shelf is perfect for displaying plants, photo frames, and decorative items. Its modern design saves space and adds a premium touch to any room.",

    amazon: "https://www.amazon.in/Dime-Store-Engineered-Corner-Glossy/dp/B07RHZV825?tag=homeorg12-21"
},
{
    id: 4,
    title: "Book Shelf",
    category: "Home",
    images: [
        "assets/images/book/book1.png",
        "assets/images/book/book2.png",
        "assets/images/book/book3.png",
        "assets/images/book/book4.png"
    ],
    price: "₹899",

    rating: "4.4",
    description: "Stylish bookshelf for your home",
    review: "This bookshelf is well-built and adds a nice touch to any room.This wooden desk organizer is a practical solution for keeping books, stationery, and small accessories neatly arranged. Its modern design saves space while adding a clean and organized look to your study or workspace.",       
        
    amazon: "https://www.amazon.in/Enigmatic-Woodworks-Bookshelves-Organizer-Accessories/dp/B0FD7N7GZ6?tag=homeorg12-21"
},
{
    id: 5,
    title: "Floating Shelf",
    category: "Home",
    images: [
        "assets/images/map/map1.png",
        "assets/images/map/map2.png",
        "assets/images/map/map3.png",
        "assets/images/map/map4.png",
        "assets/images/map/map5.png"
    ],
    price: "₹419",

    rating: "4.0",
    description: "Stylish floating shelf for your home",
    review: "This floating shelf is well-built and adds a nice touch to any room.This wooden desk organizer is a practical solution for keeping books, stationery, and small accessories neatly arranged. Its modern design saves space while adding a clean and organized look to your study or workspace.",       
        
    amazon: "https://www.amazon.in/Dence-Store-Floating-Minimalist-Engineered/dp/B0G8LM7WB3?tag=homeorg12-21"
},
{
    id: 6,
    title: "Showpiece for Home Decor",
    category: "Home",
    images: [
        "assets/images/dec/dec1.png",
        "assets/images/dec/dec2.png",
        "assets/images/dec/dec3.png",
        "assets/images/dec/dec4.png"
    ],
    price: "₹474",

    rating: "4.4",
    description: "Modern abstract family statue for elegant home and office decoration.",
    review: "A stylish decorative piece with a premium finish. Perfect for adding a modern touch to your living room, bedroom, or office.",       
        
    amazon: "https://www.amazon.in/AABCO-Showpiece-Posture-Figure-Decorative/dp/B0G6YKQDG7?tag=homeorg12-21"
},
{
    id: 7,
    title: "Wall Decor Floating Shelf",
    category: "Home",
    images: [
         "assets/images/wall/wall-decor.png",
         "assets/images/wall/wall-decor1.png",
         "assets/images/wall/wall-decor2.png",
        "assets/images/wall/wall-decor3.png"
    ],
    price: "₹899",

    rating: "4.2",
    description: "Stylish floating shelf for your home",
    review: "This floating shelf is well-built and adds a nice touch to any room.This wooden desk organizer is a practical solution for keeping books, stationery, and small accessories neatly arranged. Its modern design saves space while adding a clean and organized look to your study or workspace.",       
        
    amazon: "https://www.amazon.in/BLUEWUD-Riley-Engineered-Decorative-Furniture/dp/B0DM29T59F?tag=homeorg12-21"
},
{
    id: 8,
    title: "Decorative Wall Mounted Floating Shelf",
    category: "Home",
    images: [
        "assets/images/mount/mount1.png",
        "assets/images/mount/mount2.png",
        "assets/images/mount/mount3.png",
        "assets/images/mount/mount4.png"
    ],
    price: "₹745",

    rating: "4.1",
    description: "Stylish floating shelf for your home",
    review: "This floating shelf is well-built and adds a nice touch to any room.This wooden desk organizer is a practical solution for keeping books, stationery, and small accessories neatly arranged. Its modern design saves space while adding a clean and organized look to your study or workspace.",       
        
    amazon: "https://www.amazon.in/Dime-Store-Interlock-Shelves-Living/dp/B08B5CM9GR?tag=homeorg12-21"
},
{
    id: 9,
    title: "Wooden Floating Shelf",
    category: "Home",
    images: [
        "assets/images/float/woof1.png",
        "assets/images/float/woof2.png",
        "assets/images/float/woof3.png",
        "assets/images/float/woof4.png"
    ],
    price: "₹699",

    rating: "4.0",
    description: "Stylish floating shelf for your home",
    review: "This floating shelf is well-built and adds a nice touch to any room.This wooden desk organizer is a practical solution for keeping books, stationery, and small accessories neatly arranged. Its modern design saves space while adding a clean and organized look to your study or workspace.",       
        
    amazon: "https://www.amazon.in/Deion-Mounted-Bookshelf-Floating-Decoration/dp/B0FJ2Z1QQM?tag=homeorg12-21"
},
{
    id:10,
    title: "Wood Floating Shelf",
    category: "Home",
    images: [
        "assets/images/wood/wood1.png",
        "assets/images/wood/wood2.png",
        "assets/images/wood/wood3.png",
        "assets/images/wood/wood4.png"
    ],
    price: "₹999",

    rating: "5.0",
    description: "Stylish floating shelf for your home",
    review: "This floating shelf is well-built and adds a nice touch to any room.This wooden desk organizer is a practical solution for keeping books, stationery, and small accessories neatly arranged. Its modern design saves space while adding a clean and organized look to your study or workspace.",       
        
    amazon: "https://www.amazon.in/Premium-Floating-Shelves-Mounted-Home/dp/B0GVTHM5HT?tag=homeorg12-21"
},
{
    id: 11,
    title: "Kitchen Shelf",
    category: "Kitchen",
    images: [
        "assets/images/kitc/kit1.png",
        "assets/images/kitc/kit2.png",
        "assets/images/kitc/kit3.png",
        "assets/images/kitc/kit4.png"
    ],
    price: "₹584",
    rating: "4.0",
    description: "Stylish floating shelf for your home",
    review: "This floating shelf is well-built and adds a nice touch to any room.This wooden desk organizer is a practical solution for keeping books,stationery and kitchen items neatly arranged.",       
        
    amazon: "https://www.amazon.in/FireBees-Mounted-Bookshelf-Floating-Decorative/dp/B0FBW7J2JF?tag=homeorg12-21"
},
{
    id: 12,
    title: "Metal Book Shelf",
    category: "Home",
    images: [
        "assets/images/metal.png"
    ],
    price: "₹499",
    rating: "4.1",
    description: "Creative metal bookend with a unique stick figure design. Sturdy, stylish, and perfect for organizing books",
    review: "This metal bookshelf is well-built and adds a nice touch to any room.Strong, modern, and keeps books neatly in place. Great quality and designgit",       
        
    amazon: "https://www.amazon.in/Metawood-MindSupport-Bookends-Decorative-Organizer/dp/B0GT28H19R?tag=homeorg12-21"
},
{
    id: 13,
    title: "Vases for Modern Home Decor",
    category: "Home",
    images: [
        "assets/images/home/home1.png",
        "assets/images/home/home2.png",
        "assets/images/home/home3.png",
        "assets/images/home/home4.png"
    ],
    price: "₹543",
    rating: "4.3",
    description: "Modern ceramic vase set with a unique hollow design and matte finish. Perfect for dried flowers and minimalist home décor",
    review: "Elegant, stylish, and well-crafted, this vase set instantly enhances any space with its modern minimalist design. A great choice for home décor or gifting.",       
        
    amazon: "https://www.amazon.in/PUREZENTO-Unique-White-Ceramic-Donut/dp/B0DQQ2GXRB?tag=homeorg12-21"
},
{
    id: 14,
    title: "White Ceramic Donut Vase",
    category: "Home",
    images: [
        "assets/images/vase/vase1.png",
        "assets/images/vase/vase2.png",
        "assets/images/vase/vase3.png",
        "assets/images/vase/vase4.png"
    ],
    price: "₹178",

    rating: "4.2",
    description: "White ceramic donut vase with a modern design",
    review: "This vase is beautifully crafted and adds a touch of elegance to any room. The unique donut shape makes it a standout piece for home décor.",
    amazon: "https://www.amazon.in/SPHINX-Ceramic-Flower-Centrepiece-Gifts-Vase/dp/B0CQ23K1SB?tag=homeorg12-21"
},
{
    id: 15,

    title: "Modern Ceramic Cat Figurines Set (3 Pieces)",

    category: "Home",

    images: [
        "assets/images/decor/dec.png",
        "assets/images/decor/dec1.png",
        "assets/images/decor/dec2.png"
    ],

    price: "₹828",

    rating: "4.3",

    amazon: "https://www.amazon.in/Xtore%C2%AE-Family-Finish-Ceramic-Figures/dp/B08MD5J7Z5?tag=homeorg12-21",

    description: "Enhance your home décor with this elegant set of three modern ceramic cat figurines. Featuring a minimalist design with matte black, warm brown, and ivory finishes, these sculptures add a sophisticated touch to living rooms, bedrooms, offices, bookshelves, TV units, and coffee tables.",

    review: "These decorative cat figurines offer a premium finish and contemporary design that complements modern interiors. The ceramic construction feels sturdy, while the sleek matte colors blend beautifully with various décor styles. Customers appreciate the unique artistic appearance and use them as statement pieces on shelves and tables.",

    pros: [
        "Elegant minimalist design",
        "Premium ceramic construction",
        "Set of 3 decorative pieces",
        "Perfect for home and office décor",
        "Stable and durable build",
        "Ideal gifting option"
    ],

    cons: [
        "Decorative purpose only",
        "Can break if dropped",
        "Slightly smaller than expected for some buyers"
    ],

    specifications: {
        Material: "Premium Ceramic",
        Color: "Black, Brown & Ivory",
        Quantity: "3 Pieces",
        Height: "Approximately 25 cm",
        Width: "Approximately 20 cm",
        Depth: "Approximately 6 cm",
        Style: "Modern Minimalist",
        SuitableFor: "Living Room, Bedroom, Office, Bookshelf, TV Unit",
        PackageIncludes: "3 Decorative Cat Figurines"
    },
},
{
    id: 16,

    title: "Wooden Spice Box with Glass Lid ",

    category: "Kitchen",

    images: [
        "assets/images/spice/spice1.png",
        "assets/images/spice/spice2.png",
        "assets/images/spice/spice3.png"
    ],

    price: "₹999",

    rating: "4.2",

    amazon: "https://www.amazon.in/dp/B01N5KPCSB?tag=homeorg12-21",

    description: "Keep your kitchen organized with this premium wooden spice box featuring 9 spacious compartments and a transparent glass lid. Perfect for storing spices, herbs, dry fruits, tea, sugar, and other kitchen essentials while adding an elegant touch to your countertop.",

    review: "This wooden masala box combines traditional craftsmanship with modern functionality. The glass lid allows you to quickly identify spices without opening the box, while the sturdy wooden construction ensures durability. It is ideal for Indian kitchens and makes cooking more convenient.",

    pros: [
        "Premium wooden construction",
        "9 spacious storage compartments",
        "Transparent glass lid for easy visibility",
        "Comes with a wooden serving spoon",
        "Elegant design enhances kitchen décor",
        "Perfect for spices, dry fruits, tea, and herbs"
    ],

    cons: [
        "Requires occasional polishing for long-lasting finish",
        "Glass lid should be handled carefully",
        "Not dishwasher safe"
    ],

    specifications: {
        Material: "Natural Sheesham Wood & Glass",
        Compartments: "9",
        Lid: "Transparent Glass",
        SpoonIncluded: "Yes",
        Color: "Natural Brown",
        SuitableFor: "Spices, Dry Fruits, Tea, Herbs, Seasonings",
        Shape: "Square",
        CareInstructions: "Wipe with a dry or slightly damp cloth. Avoid soaking in water."
    },
},
{
    id: 17,

    title: "3-Tier Wooden Floating Wall Shelf",

    category: "Home",

    images: [
        "assets/images/wallsh/sell1.png",
        "assets/images/wallsh/sell2.png",
        "assets/images/wallsh/sell3.png"
    ],

    price: "₹379",

    rating: "4.0",

    amazon: "https://www.amazon.in/Amazing-Shoppee-Shelves-Living-Standard/dp/B07ZXC6H5M?tag=homeorg12-21",

    description: "Add style and functionality to your walls with this elegant 3-tier floating wooden shelf. Designed to maximize storage while enhancing your home décor, it is perfect for displaying plants, books, photo frames, candles, collectibles, and decorative accessories in living rooms, bedrooms, offices, or kitchens.",

    review: "This wall-mounted shelf offers a modern minimalist design with a premium wooden finish. Its sturdy construction provides reliable support for everyday decorative items while creating an attractive vertical display. Customers appreciate its space-saving design, easy installation, and versatile use in different rooms.",

    pros: [
        "Modern 3-tier floating design",
        "Premium engineered wood construction",
        "Strong and durable build quality",
        "Easy wall installation",
        "Perfect for home and office décor",
        "Saves floor space while increasing storage"
    ],

    cons: [
        "Not recommended for very heavy objects",
        "Wall mounting hardware quality may vary",
        "Requires proper wall installation for maximum stability"
    ],

    specifications: {
        Material: "Engineered Wood",
        Color: "Dark Walnut Brown",
        Type: "Wall Mounted Floating Shelf",
        Shelves: "3",
        Style: "Modern Minimalist",
        SuitableFor: "Living Room, Bedroom, Office, Kitchen",
        Mounting: "Wall Mounted",
        CareInstructions: "Clean with a soft dry cloth. Avoid excessive moisture."
    },
},
{
    id: 18,

    title: "Modern Wooden Side Table with White Top",

    category: "Home",

    images: [
        "assets/images/table/table5.png",
        "assets/images/table/table2.png",
        "assets/images/table/table3.png",
        "assets/images/table/table4.png",
        "assets/images/table/table1.png"
    ],

    price: "₹399",

    rating: "4.0",

    amazon: "https://www.amazon.in/UHUD-CRAFTS-Beautiful-Fold-able-Furniture/dp/B0927T6DS6?tag=homeorg12-21",

    description: "Add a touch of Scandinavian elegance to your home with this modern wooden side table. Featuring a smooth white tabletop and sturdy natural wooden legs, it is perfect for holding coffee mugs, books, plants, decorative items, or bedside essentials. Its compact size makes it ideal for living rooms, bedrooms, offices, balconies, and reading corners.",

    review: "This stylish side table combines minimalist aesthetics with everyday functionality. The durable wooden legs provide excellent stability, while the clean white tabletop complements modern, contemporary, and Scandinavian interiors. Customers appreciate its elegant design, sturdy construction, lightweight build, and easy assembly.",

    pros: [
        "Modern Scandinavian-inspired design",
        "Premium white tabletop finish",
        "Strong and durable wooden legs",
        "Compact and space-saving",
        "Easy to assemble",
        "Perfect for living rooms, bedrooms, and offices"
    ],

    cons: [
        "Not suitable for very heavy items",
        "Requires basic assembly",
        "Surface should be protected from excessive moisture"
    ],

    specifications: {
        Material: "Engineered Wood & Solid Wood Legs",
        Color: "White Top with Natural Wood Finish",
        Type: "Side Table",
        Shape: "Octagonal",
        Style: "Modern Scandinavian",
        SuitableFor: "Living Room, Bedroom, Office, Balcony, Reading Corner",
        Assembly: "Self Assembly Required",
        CareInstructions: "Wipe clean with a soft dry or slightly damp cloth. Avoid prolonged exposure to water."
        
    },
},
{
    id: 19,

    title: "Hanging Wooden Wall Shelf",

    category: "Home",

    images: [
        "assets/images/hang/hang2.png",
        "assets/images/hang/hang1.png",
        "assets/images/hang/hang3.png",
        "assets/images/hang/hang4.png"
    ],

    price: "₹256",

    rating: "4.3",

    amazon: "https://www.amazon.in/dp/B0DFMLG5BP?pd_rd_i=B0DFMLG5BP&tag=homeorg12-21",

    description: "Enhance your home décor with this beautiful boho macrame hanging wall shelf. Crafted with a sturdy natural wooden shelf and handwoven cotton rope, it offers the perfect blend of style and functionality. Ideal for displaying small plants, candles, photo frames, books, succulents, or decorative accessories in your living room, bedroom, office, nursery, or hallway.",

    review: "This macrame hanging shelf brings a warm, minimalist, and bohemian touch to any space. The durable wooden shelf and strong cotton rope ensure reliable support for lightweight decorative items. Customers love its elegant handcrafted appearance, easy installation, and ability to instantly elevate empty wall spaces.",

    pros: [
        "Elegant handcrafted macrame design",
        "Premium natural wooden shelf",
        "Strong and durable cotton rope",
        "Easy to hang and install",
        "Perfect for boho and minimalist interiors",
        "Ideal for displaying plants and decorative items"
    ],

    cons: [
        "Not suitable for heavy objects",
        "Requires secure wall hook for installation",
        "Best suited for lightweight décor items"
    ],

    specifications: {
        Material: "Natural Wood & Cotton Rope",
        Color: "Natural Wood with Off-White Rope",
        Type: "Hanging Wall Shelf",
        Shelves: "1",
        Style: "Bohemian / Minimalist",
        SuitableFor: "Living Room, Bedroom, Office, Nursery, Hallway",
        Mounting: "Wall Hanging",
        CareInstructions: "Dust regularly with a soft dry cloth. Keep away from excessive moisture."
    },
},
];