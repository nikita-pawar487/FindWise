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
        "assets/images/book-shelf.png"
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
        "assets/images/float.png"
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
        "assets/images/decor.png"
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
        "assets/images/mount.png"
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
        "assets/images/wooden-float.png"
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
        "assets/images/woods.png"
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
        "assets/images/kit.png"
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
        "assets/images/home.png"
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
        "assets/images/vase.png"
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
];