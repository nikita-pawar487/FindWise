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

    title: "Wooden Zig-Zag Corner Wall Shelf",

    category: "Home",

    images: [
        "assets/images/shelf/shelf1.png",
        "assets/images/shelf/shelf2.png",
        "assets/images/shelf/shelf3.png"
    ],

    price: "₹619",

    rating: "4.1",

    amazon: "https://www.amazon.in/Dime-Store-Engineered-Corner-Glossy/dp/B07RHZV825?tag=homeorg12-21",

    description: "Make the most of unused corners with this stylish zig-zag corner wall shelf. Crafted from premium engineered wood with a glossy finish, it provides an elegant way to display books, plants, photo frames, trophies, candles, and decorative items while saving valuable floor space. Its modern design blends beautifully with living rooms, bedrooms, offices, and study spaces.",

    review: "The Dime Store Zig-Zag Corner Wall Shelf combines modern design with practical storage. Its space-saving corner layout transforms empty wall corners into attractive display areas. The engineered wood construction and glossy finish give it a premium appearance, while the included mounting hardware makes installation straightforward. It is an excellent choice for organizing and decorating compact spaces.",

    pros: [
        "Unique zig-zag corner design",
        "Premium engineered wood construction",
        "Glossy finish enhances home décor",
        "Maximizes unused corner space",
        "Ideal for books, plants and decorative items",
        "Wall mounting hardware included"
    ],

    cons: [
        "Professional or careful installation recommended",
        "Not suitable for very heavy objects",
        "Requires drilling into the wall"
    ],

    specifications: {
        Material: "Engineered Wood",
        Color: "Brown",
        Finish: "Glossy",
        Type: "Corner Wall Shelf",
        Style: "Modern Contemporary",
        Dimensions: "20 x 20 x 123 cm",
        Mounting: "Wall Mounted",
        SuitableFor: "Living Room, Bedroom, Office, Study Room",
        Assembly: "Assembly Required",
        CareInstructions: "Clean with a soft dry cloth. Do not scrub or expose to excessive moisture."
    },
},
{
    id: 4,

    title: "Wooden Book Shelf & Desk Organizer",

    category: "Home",

    images: [
        "assets/images/book/book1.png",
        "assets/images/book/book2.png",
        "assets/images/book/book3.png",
        "assets/images/book/book4.png"
    ],

    price: "₹899",

    rating: "4.4",

    amazon: "https://www.amazon.in/Enigmatic-Woodworks-Bookshelves-Organizer-Accessories/dp/B0FD7N7GZ6?tag=homeorg12-21",

    description: "Keep your books, stationery, and everyday essentials neatly organized with this compact wooden bookshelf and desk organizer. Made from premium engineered wood, it features a modern space-saving design that fits perfectly on study tables, office desks, bedroom side tables, or kitchen counters while enhancing your home décor.",

    review: "This Enigmatic Woodworks bookshelf combines functionality with modern aesthetics. Its compact design provides multiple storage compartments for books, notebooks, office supplies, and decorative accessories. Customers appreciate its sturdy engineered wood construction, easy DIY assembly, and ability to keep workspaces organized without occupying much space.",

    pros: [
        "Premium engineered wood construction",
        "Compact space-saving design",
        "Ideal for books and office accessories",
        "Modern and elegant appearance",
        "DIY assembly with included hardware",
        "Suitable for home and office use"
    ],

    cons: [
        "Assembly required",
        "Not suitable for storing very heavy books",
        "Best suited for desktop or lightweight storage"
    ],

    specifications: {
        Material: "Engineered Wood",
        Color: "Walnut",
        Type: "Desk Bookshelf / Organizer",
        Style: "Modern",
        SuitableFor: "Study Table, Office Desk, Bedroom, Living Room",
        Assembly: "DIY Assembly Required",
        Mounting: "Free Standing",
        CareInstructions: "Clean with a soft dry cloth. Avoid excessive moisture.",
        Warranty: "Refer to seller warranty policy"
    },
},
{
    id: 5,

    title: "Modern Floating Wall Shelf",

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

    amazon: "https://www.amazon.in/Dence-Store-Floating-Minimalist-Engineered/dp/B0G8LM7WB3?tag=homeorg12-21",

    description: "Upgrade your walls with this modern floating shelf featuring a sleek minimalist design. Perfect for displaying books, indoor plants, photo frames, candles, trophies, and decorative accessories while maximizing wall space in living rooms, bedrooms, offices, and study areas.",

    review: "This floating wall shelf combines elegant design with practical storage. Its engineered wood construction offers durability, while the clean minimalist style blends seamlessly with modern interiors. Customers appreciate its space-saving design, sturdy build, and easy installation.",

    pros: [
        "Modern minimalist design",
        "Premium engineered wood construction",
        "Easy wall installation",
        "Space-saving storage solution",
        "Suitable for multiple rooms",
        "Ideal for décor and display items"
    ],

    cons: [
        "Not suitable for very heavy objects",
        "Requires drilling during installation",
        "Wall mounting hardware should be installed securely"
    ],

    specifications: {
        Material: "Engineered Wood",
        Type: "Floating Wall Shelf",
        Style: "Modern Minimalist",
        Mounting: "Wall Mounted",
        SuitableFor: "Living Room, Bedroom, Office, Study",
        CareInstructions: "Clean with a soft dry cloth."
    },
},
{
    id: 6,

    title: "Modern Family Showpiece Statue",

    category: "Home",

    images: [
        "assets/images/dec/dec1.png",
        "assets/images/dec/dec2.png",
        "assets/images/dec/dec3.png",
        "assets/images/dec/dec4.png"
    ],

    price: "₹474",

    rating: "4.4",

    amazon: "https://www.amazon.in/AABCO-Showpiece-Posture-Figure-Decorative/dp/B0G6YKQDG7?tag=homeorg12-21",

    description: "Enhance your home with this elegant family showpiece featuring a contemporary abstract design. Crafted with a premium finish, it adds warmth and sophistication to living rooms, bedrooms, offices, TV units, bookshelves, and coffee tables.",

    review: "This decorative family figurine beautifully represents love and togetherness while complementing modern interiors. Customers appreciate its premium finish, elegant craftsmanship, and versatility as both a decorative accent and gifting option.",

    pros: [
        "Elegant modern design",
        "Premium decorative finish",
        "Perfect for home and office décor",
        "Lightweight yet durable",
        "Ideal gifting option",
        "Enhances modern interiors"
    ],

    cons: [
        "Decorative purpose only",
        "Can break if dropped",
        "Keep away from children"
    ],

    specifications: {
        Material: "Resin",
        Type: "Decorative Showpiece",
        Style: "Modern Contemporary",
        Color: "Gold & White",
        SuitableFor: "Living Room, Bedroom, Office",
        CareInstructions: "Wipe with a soft dry cloth."
    },
},
{
    id: 7,

    title: "Decorative Wall Mounted Floating Shelf Set",

    category: "Home",

    images: [
        "assets/images/wall/wall-decor.png",
        "assets/images/wall/wall-decor1.png",
        "assets/images/wall/wall-decor2.png",
        "assets/images/wall/wall-decor3.png"
    ],

    price: "₹899",

    rating: "4.2",

    amazon: "https://www.amazon.in/BLUEWUD-Riley-Engineered-Decorative-Furniture/dp/B0DM29T59F?tag=homeorg12-21",

    description: "Decorate your walls with this stylish floating shelf set designed to display books, photo frames, plants, candles, and decorative accessories. Its modern geometric design creates an attractive focal point while saving valuable floor space.",

    review: "The decorative floating shelf set combines contemporary style with practical storage. Made from durable engineered wood, it is easy to install and blends well with modern, minimalist, and Scandinavian interiors. Customers appreciate its sturdy construction and elegant appearance.",

    pros: [
        "Contemporary geometric design",
        "Premium engineered wood",
        "Easy to install",
        "Ideal for decorative display",
        "Space-saving wall storage",
        "Perfect for living room and bedroom"
    ],

    cons: [
        "Requires wall drilling",
        "Not suitable for very heavy items",
        "Installation should be done carefully"
    ],

    specifications: {
        Material: "Engineered Wood",
        Type: "Wall Mounted Floating Shelf",
        Style: "Modern Contemporary",
        Mounting: "Wall Mounted",
        SuitableFor: "Living Room, Bedroom, Office",
        CareInstructions: "Clean using a soft dry cloth."
    },
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

    amazon: "https://www.amazon.in/Dime-Store-Interlock-Shelves-Living/dp/B08B5CM9GR?tag=homeorg12-21",

    description: "Enhance your walls with this stylish interlocking floating wall shelf. Crafted from premium engineered wood, its unique geometric design creates an eye-catching display while providing practical storage for books, plants, photo frames, candles, trophies, and decorative accessories. It is perfect for adding a modern touch to living rooms, bedrooms, offices, and hallways.",

    review: "The Dime Store interlocking wall shelf combines modern aesthetics with everyday functionality. Its durable engineered wood construction ensures reliable support for decorative items while transforming empty wall space into an attractive display. Customers appreciate its elegant design, sturdy build quality, and simple DIY installation.",

    pros: [
        "Unique interlocking geometric design",
        "Premium engineered wood construction",
        "Strong and durable",
        "Easy wall installation",
        "Ideal for books, plants, and décor",
        "Space-saving wall storage"
    ],

    cons: [
        "Requires wall drilling",
        "Not suitable for very heavy objects",
        "Professional installation recommended for best alignment"
    ],

    specifications: {
        Material: "Engineered Wood",
        Color: "Brown",
        Type: "Floating Wall Shelf",
        Style: "Modern Geometric",
        Mounting: "Wall Mounted",
        SuitableFor: "Living Room, Bedroom, Office, Hallway",
        CareInstructions: "Clean with a soft dry cloth. Avoid excessive moisture.",
        Warranty: "Refer to seller warranty policy"
    },
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

    amazon: "https://www.amazon.in/Deion-Mounted-Bookshelf-Floating-Decoration/dp/B0FJ2Z1QQM?tag=homeorg12-21",

    description: "Keep your space organized with this elegant wall-mounted floating bookshelf. Designed from premium engineered wood, it offers a stylish way to display books, indoor plants, photo frames, collectibles, and decorative accents while maximizing vertical wall space in your home or office.",

    review: "The Deion floating bookshelf blends contemporary design with practical storage. Its sturdy construction and premium finish make it a reliable choice for organizing books and displaying decorative pieces. Customers appreciate its sleek appearance, durable build, and ability to complement modern interiors.",

    pros: [
        "Premium engineered wood construction",
        "Modern floating bookshelf design",
        "Easy to install",
        "Strong and durable",
        "Perfect for books and decorative items",
        "Space-saving wall storage"
    ],

    cons: [
        "Not designed for very heavy loads",
        "Requires proper wall mounting",
        "Wall screws should be securely installed"
    ],

    specifications: {
        Material: "Engineered Wood",
        Color: "Brown",
        Type: "Wall Mounted Bookshelf",
        Style: "Modern Minimalist",
        Mounting: "Wall Mounted",
        SuitableFor: "Living Room, Bedroom, Office, Study",
        CareInstructions: "Wipe with a soft dry cloth.",
        Warranty: "Refer to seller warranty policy"
    },
},
{
    id: 10,

    title: "Premium Floating Wall Shelves Set",

    category: "Home",

    images: [
        "assets/images/wood/wood1.png",
        "assets/images/wood/wood2.png",
        "assets/images/wood/wood3.png",
        "assets/images/wood/wood4.png"
    ],

    price: "₹999",

    rating: "5.0",

    amazon: "https://www.amazon.in/Premium-Floating-Shelves-Mounted-Home/dp/B0GVTHM5HT?tag=homeorg12-21",

    description: "Transform your walls with this premium floating wall shelf set. Crafted from durable engineered wood, these shelves provide an elegant way to display books, plants, photo frames, candles, collectibles, and decorative accessories while maximizing wall space. Their modern minimalist design complements contemporary and traditional interiors alike.",

    review: "These premium floating shelves offer an excellent combination of style and functionality. Their sturdy construction ensures reliable support for decorative items while the sleek floating appearance creates a clean and sophisticated look. Customers appreciate the easy installation, premium finish, and versatility for different rooms.",

    pros: [
        "Premium engineered wood construction",
        "Modern floating shelf design",
        "Easy wall installation",
        "Strong and durable",
        "Space-saving storage solution",
        "Perfect for displaying décor items"
    ],

    cons: [
        "Not suitable for very heavy objects",
        "Requires proper wall drilling",
        "Wall mounting hardware should be installed securely"
    ],

    specifications: {
        Material: "Engineered Wood",
        Color: "Brown",
        Type: "Floating Wall Shelf Set",
        Style: "Modern Minimalist",
        Mounting: "Wall Mounted",
        SuitableFor: "Living Room, Bedroom, Office, Study",
        CareInstructions: "Clean with a soft dry cloth.",
        Warranty: "Refer to seller warranty policy"
    },
},
{
    id: 11,

    title: " Wooden Wall Mounted Bookshelf",

    category: "Home",

    images: [
        "assets/images/kitc/kit1.png",
        "assets/images/kitc/kit2.png",
        "assets/images/kitc/kit3.png",
        "assets/images/kitc/kit4.png"
    ],

    price: "₹584",

    rating: "4.0",

    amazon: "https://www.amazon.in/FireBees-Mounted-Bookshelf-Floating-Decorative/dp/B0FBW7J2JF?tag=homeorg12-21",

    description: "Organize and decorate your walls with the FireBees wooden wall-mounted bookshelf. Made from premium engineered wood, this floating shelf is ideal for displaying books, indoor plants, photo frames, trophies, and decorative accessories. Its contemporary design helps maximize wall space while adding elegance to your home.",

    review: "The FireBees wall-mounted bookshelf combines durability with modern aesthetics. Designed for everyday use, it provides sturdy storage while maintaining a sleek floating appearance. Customers appreciate its premium finish, compact design, and easy DIY installation, making it suitable for homes and offices alike.",

    pros: [
        "Premium engineered wood construction",
        "Modern floating bookshelf design",
        "Easy DIY installation",
        "Strong and durable build",
        "Ideal for books and decorative items",
        "Space-saving wall storage"
    ],

    cons: [
        "Not recommended for very heavy objects",
        "Requires wall drilling",
        "Proper installation is necessary for maximum support"
    ],

    specifications: {
        Material: "Engineered Wood",
        Color: "Brown",
        Type: "Wall Mounted Bookshelf",
        Style: "Modern Contemporary",
        Dimensions: "15 × 49 × 15 cm",
        Mounting: "Wall Mounted",
        SuitableFor: "Living Room, Bedroom, Office, Study",
        CareInstructions: "Clean with a soft dry cloth. Avoid excessive moisture.",
        Warranty: "Refer to seller warranty policy"
    },
},
{
    id: 12,

    title: "Metawood Decorative Wooden Bookends",

    category: "Home",

    images: [
        "assets/images/meta/met1.png",
        "assets/images/meta/met2.png"
    ],

    price: "₹499",

    rating: "4.2",

    amazon: "https://www.amazon.in/Metawood-MindSupport-Bookends-Decorative-Organizer/dp/B0GT28H19R?tag=homeorg12-21",

    description: "Keep your books neatly organized with these modern decorative wooden bookends. Designed to provide sturdy support while enhancing your bookshelf, they are perfect for books, magazines, files, and decorative displays in homes and offices.",

    review: "These wooden bookends combine functionality with a minimalist design. Their sturdy construction helps keep books upright while adding an elegant decorative touch to bookshelves, study tables, and office desks.",

    pros: [
        "Strong wooden construction",
        "Modern minimalist design",
        "Keeps books organized",
        "Suitable for home and office",
        "Compact and space-saving",
        "Easy to clean"
    ],

    cons: [
        "Best suited for light to medium-weight books",
        "Indoor use only",
        "May require non-slip pads on smooth surfaces"
    ],

    specifications: {
        Material: "Engineered Wood",
        Type: "Decorative Bookends",
        Style: "Modern Minimalist",
        SuitableFor: "Bookshelves, Study Tables, Office Desks",
        CareInstructions: "Wipe with a soft dry cloth."
    },
},
{
    id: 13,

    title: "White Ceramic Donut Vase",

    category: "Home",

    images: [
        "assets/images/home/home1.png",
        "assets/images/home/home2.png",
        "assets/images/home/home3.png",
        "assets/images/home/home4.png"
    ],

    price: "₹543",

    rating: "4.3",

    amazon: "https://www.amazon.in/PUREZENTO-Unique-White-Ceramic-Donut/dp/B0DQQ2GXRB?tag=homeorg12-21",

    description: "Enhance your home with this elegant white ceramic donut vase featuring a modern Nordic-inspired design. Perfect for dried flowers, pampas grass, or as a standalone decorative accent for living rooms, bedrooms, dining tables, and offices.",

    review: "Crafted from durable ceramic with a smooth matte finish, this decorative vase brings a sophisticated and contemporary look to any space. Its unique donut shape complements minimalist, boho, and modern interiors beautifully. Customers appreciate its premium finish and eye-catching design. "
    ,

    pros: [
        "Elegant Nordic donut design",
        "Premium ceramic construction",
        "Matte finish",
        "Perfect for pampas grass and dried flowers",
        "Ideal for modern home décor",
        "Excellent gifting option"
    ],

    cons: [
        "Not intended for large flower arrangements",
        "Fragile if dropped",
        "Decorative use only"
    ],

    specifications: {
        Material: "Ceramic",
        Color: "White",
        Finish: "Matte",
        Type: "Decorative Donut Vase",
        Style: "Modern Nordic",
        SuitableFor: "Living Room, Bedroom, Office, Dining Table",
        CareInstructions: "Clean using a soft dry cloth."
    },
},
{
    id: 14,

    title: "Ceramic Flower Vase",

    category: "Home",

    images: [
        "assets/images/vase/vase1.png",
        "assets/images/vase/vase2.png",
        "assets/images/vase/vase3.png",
        "assets/images/vase/vase4.png"
    ],
    price: "₹178",

    rating: "4.2",

    amazon: "https://www.amazon.in/SPHINX-Ceramic-Flower-Centrepiece-Gifts-Vase/dp/B0CQ23K1SB?tag=homeorg12-21",

    description: "Add elegance to your home with this handcrafted ceramic flower vase. Its modern minimalist design makes it perfect for fresh flowers, dried arrangements, pampas grass, or as a stylish standalone centerpiece for tables, shelves, and offices.",

    review: "This decorative ceramic vase features a timeless design with a smooth finish that complements modern, boho, and contemporary interiors. Lightweight yet durable, it is an excellent choice for enhancing living spaces or gifting on special occasions.",

    pros: [
        "Elegant handcrafted design",
        "Premium ceramic material",
        "Suitable for fresh and dried flowers",
        "Modern minimalist appearance",
        "Perfect for home and office décor",
        "Ideal gifting option"
    ],

    cons: [
        "Handle carefully to avoid breakage",
        "Best suited for small flower arrangements",
        "Indoor decorative use only"
    ],

    specifications: {
        Material: "Ceramic",
        Color: "White",
        Type: "Flower Vase",
        Style: "Modern Minimalist",
        SuitableFor: "Living Room, Bedroom, Office, Dining Table",
        CareInstructions: "Wipe clean with a soft dry cloth."
    },
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