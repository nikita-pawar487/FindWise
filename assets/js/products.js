// ==========================================
// FINDWISE PRODUCTS DATABASE
// ==========================================

const products = [
   {
    id: 1,

    title: "Floating Wall Shelf",
    category: "Home",
     
    images: [
        "assets/images/floating-shelf.png",
        "assets/images/float2.png",
        "assets/images/float3.png"
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
    image: "assets/images/kea-book.png",
    description: "Karnataka Village Administrative Officer Exam Book",
    review: "This book is comprehensive and well-structured, making it an excellent resource for exam preparation.",
    affiliate: "https://www.amazon.in/2026-2027-Karnataka-Village-Administrative-Officer/dp/B0H8PFVHBZ?tag=homeorg12-21"
},
{
    id: 3,
    title: "Wooden Wall Shelf",
    category: "Home",
    image: "assets/images/wall-shelf.png",
    description: "Stylish and functional wall shelf for your home",
    review: "This shelf is well-built and adds a nice touch to any room.This stylish floating shelf is perfect for displaying plants, photo frames, and decorative items. Its modern design saves space and adds a premium touch to any room.",

    affiliate: "https://www.amazon.in/Dime-Store-Engineered-Corner-Glossy/dp/B07RHZV825?tag=homeorg12-21"
},
{
    id: 4,
    title: "Book Shelf",
    category: "Home",
    image: "assets/images/book-shelf.png",
    description: "Stylish bookshelf for your home",
    review: "This bookshelf is well-built and adds a nice touch to any room.This wooden desk organizer is a practical solution for keeping books, stationery, and small accessories neatly arranged. Its modern design saves space while adding a clean and organized look to your study or workspace.",       
        
    affiliate: "https://www.amazon.in/Enigmatic-Woodworks-Bookshelves-Organizer-Accessories/dp/B0FD7N7GZ6?tag=homeorg12-21"
},
{
    id: 5,
    title: "Floating Shelf",
    category: "Home",
    image: "assets/images/float.png",
    description: "Stylish floating shelf for your home",
    review: "This floating shelf is well-built and adds a nice touch to any room.This wooden desk organizer is a practical solution for keeping books, stationery, and small accessories neatly arranged. Its modern design saves space while adding a clean and organized look to your study or workspace.",       
        
    affiliate: "https://www.amazon.in/Dence-Store-Floating-Minimalist-Engineered/dp/B0G8LM7WB3?tag=homeorg12-21"
},
{
    id: 6,
    title: "Showpiece for Home Decor",
    category: "Home",
    image: "assets/images/decor.png",
    description: "Modern abstract family statue for elegant home and office decoration.",
    review: "A stylish decorative piece with a premium finish. Perfect for adding a modern touch to your living room, bedroom, or office.",       
        
    affiliate: "https://www.amazon.in/AABCO-Showpiece-Posture-Figure-Decorative/dp/B0G6YKQDG7?tag=homeorg12-21"
},
{
    id: 7,
    title: "Wall Decor Floating Shelf",
    category: "Home",
    image: "assets/images/wall-decor.png",
    description: "Stylish floating shelf for your home",
    review: "This floating shelf is well-built and adds a nice touch to any room.This wooden desk organizer is a practical solution for keeping books, stationery, and small accessories neatly arranged. Its modern design saves space while adding a clean and organized look to your study or workspace.",       
        
    affiliate: "https://www.amazon.in/BLUEWUD-Riley-Engineered-Decorative-Furniture/dp/B0DM29T59F?tag=homeorg12-21"
},
{
    id: 8,
    title: "Decorative Wall Mounted Floating Shelf",
    category: "Home",
    image: "assets/images/mount.png",
    description: "Stylish floating shelf for your home",
    review: "This floating shelf is well-built and adds a nice touch to any room.This wooden desk organizer is a practical solution for keeping books, stationery, and small accessories neatly arranged. Its modern design saves space while adding a clean and organized look to your study or workspace.",       
        
    affiliate: "https://www.amazon.in/Dime-Store-Interlock-Shelves-Living/dp/B08B5CM9GR?tag=homeorg12-21"
},
{
    id: 9,
    title: "Wooden Floating Shelf",
    category: "Home",
    image: "assets/images/wooden-float.png",
    description: "Stylish floating shelf for your home",
    review: "This floating shelf is well-built and adds a nice touch to any room.This wooden desk organizer is a practical solution for keeping books, stationery, and small accessories neatly arranged. Its modern design saves space while adding a clean and organized look to your study or workspace.",       
        
    affiliate: "https://www.amazon.in/Deion-Mounted-Bookshelf-Floating-Decoration/dp/B0FJ2Z1QQM?tag=homeorg12-21"
},
{
    id:10,
    title: "Wood Floating Shelf",
    category: "Home",
    image: "assets/images/woods.png",
    description: "Stylish floating shelf for your home",
    review: "This floating shelf is well-built and adds a nice touch to any room.This wooden desk organizer is a practical solution for keeping books, stationery, and small accessories neatly arranged. Its modern design saves space while adding a clean and organized look to your study or workspace.",       
        
    affiliate: "https://www.amazon.in/Premium-Floating-Shelves-Mounted-Home/dp/B0GVTHM5HT?tag=homeorg12-21"
},
{
    id: 11,
    title: "Kitchen Shelf",
    category: "Kitchen",
    image: "assets/images/kit.png",
    description: "Stylish floating shelf for your home",
    review: "This floating shelf is well-built and adds a nice touch to any room.This wooden desk organizer is a practical solution for keeping books,stationery and kitchen items neatly arranged.",       
        
    affiliate: "https://www.amazon.in/FireBees-Mounted-Bookshelf-Floating-Decorative/dp/B0FBW7J2JF?tag=homeorg12-21"
},
{
    id: 12,
    title: "Metal Book Shelf",
    category: "Home",
    image: "assets/images/metal.png",
    description: "Creative metal bookend with a unique stick figure design. Sturdy, stylish, and perfect for organizing books",
    review: "This metal bookshelf is well-built and adds a nice touch to any room.Strong, modern, and keeps books neatly in place. Great quality and designgit",       
        
    affiliate: "https://www.amazon.in/Metawood-MindSupport-Bookends-Decorative-Organizer/dp/B0GT28H19R?tag=homeorg12-21"
},
{
    id: 13,
    title: "Vases for Modern Home Decor",
    category: "Home",
    image: "assets/images/home.png",
    description: "Modern ceramic vase set with a unique hollow design and matte finish. Perfect for dried flowers and minimalist home décor",
    review: "Elegant, stylish, and well-crafted, this vase set instantly enhances any space with its modern minimalist design. A great choice for home décor or gifting.",       
        
    affiliate: "https://www.amazon.in/PUREZENTO-Unique-White-Ceramic-Donut/dp/B0DQQ2GXRB?tag=homeorg12-21"
},
];