const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Skin Care' },
    { name: "Men's" },
    { name: 'Hair Care' },
    { name: 'Tools' },
    { name: 'Meats' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Hempz Vanilla Plum',
      description:
        'Vanilla Plum lotion, powered by 100% pure hemp seed oil. 17 ounces in a pump bottle',
      image: 'lotion1.jpg',
      category: categories[0]._id,
      price: 20.99,
      quantity: 500
    },
    {
      name: 'Hempz Pomegranate',
      description:
        'Moisturize skin and help prevent environmental damage with our antioxidant-rich pomegranate-powered lotion',
      image: 'lotion2.jpg',
      category: categories[0]._id,
      price: 20.99,
      quantity: 500
    },
    {
      name: 'Kenra Brightening Shampoo',
      category: categories[0]._id,
      description:
        'Blondes, grays, and brunettes require toning to eliminate brassiness. Kenra Brightening Shampoo contains violet pigment for instant toning. Designed for daily use on natural or color-treated hair, this violet toning shampoo maintains radiant color while providing increased manageability and intense shine for healthy looking hair',
      image: 'lotion3.jpg',
      price: 14.99,
      quantity: 20
    },
    {
      name: 'Soap Bar',
      category: categories[0]._id,
      description:
        'A bar of soap',
      image: 'soap.jpg',
      price: 149.99,
      quantity: 20
    },
    {
      name: 'American Crew Conditioner',
      category: categories[1]._id,
      description:
        'This triple action daily moisturizing conditioner restores, strengthens, and protects. Hair is left feeling soft, manageable, and ready for styling. Suitable for men with normal to dry hair',
      image: 'men1.jpg',
      price: 19.99,
      quantity: 50
    },
    {
      name: 'Mitch Styling Cream',
      category: categories[1]._id,
      description:
        'A pliable styler that lets you create everyday hairstyles with smooth, lasting control',
      image: 'mens2.jpg',
      price: 17.99,
      quantity: 50
    },
    {
      name: 'American Crew Defining Paste',
      category: categories[1]._id,
      description:
        'Concentrated styling power lets you manipulate hair into any style. Made with natural extracts, this unique compound maintains touchable shape and texture. Works well for short styles and those who seek a styling product with a more natural, subtle frangrance',
      image: 'mens3.jpg',
      price: 15.99,
      quantity: 100
    },
    {
      name: 'MVRCK by Mitch',
      category: categories[1]._id,
      description:
        'Soften coarse facial hair with MVRCK® Beard Oil. Ideal for dry, unruly beards, this softening oil delivers added control and shine with a blend of shea butter, sunflower seed oil and other hydrating ingredients. The lightweight formula tames all beard styles and lengths, from light stubble to full grown and everything in between. Keeps beards looking soft, shiny and healthy, and refreshes the senses with an energizing agave citrus scent',
      image: 'mens4.jpg',
      price: 17.99,
      quantity: 100
    },
    {
      name: 'REUZEL Beard Care',
      category: categories[1]._id,
      description:
        'This set includes beard wash and beard serum, whatever the heck that means',
      image: 'mens5.jpg',
      price: 26.99,
      quantity: 100
    },
    {
      name: 'Biolage Color Last',
      category: categories[2]._id,
      description:
        'Gently cleanses and helps maintain the color depth, tone and shine for vivid color-treated hair',
      image: 'shampoo1.jpg',
      price: 16.99,
      quantity: 30
    },
    {
      name: 'Biolage Hydra Source',
      category: categories[2]._id,
      description:
        'Conditions and detangles while adding softness',
      image: 'shampoo2.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Joico K-PAK',
      category: categories[2]._id,
      description:
        'Shampoo and Conditioner set for curly, wavy, textured, or straight hair, designed for color protection',
      image: 'shampoo3.jpg',
      price: 20.99,
      quantity: 30
    },
    {
      name: 'Pureology Shampoo & Conditioner',
      category: categories[2]._id,
      description:
        'Dry, color treated hair stays protected, looks vibrant and feels touchably soft with sulfate-free Pureology Hydrate Shampoo and Hydrating Conditioner',
      image: 'shampoo4.jpg',
      price: 39.99,
      quantity: 30
    },
    {
      name: 'Joico Color Endure',
      category: categories[2]._id,
      description:
        'This daily conditioner seals in moisture and maintains color-treated hair, while softening and adding shine to your locks',
      image: 'shampoo5.jpg',
      price: 20.99,
      quantity: 30
    },
    {
      name: 'BaBylissPRO Dryer & Flat Iron',
      category: categories[3]._id,
      description:
        'Vestibulum risus metus,vinar venauctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'tools1.jpg',
      price: 99.99,
      quantity: 30
    },
    {
      name: 'BaBylissPRO Rapido Dryer',
      category: categories[3]._id,
      description:
        'BaBylissPRO Rapido 2000-watt, Italian-made brushless motor dryer creates increased air power, and dries hair up to 50% faster. The lightest high-performance dryer',
      image: 'tools2.jpg',
      price: 118.99,
      quantity: 30
    },
    {
      name: 'Hot Tools Hair Curler',
      category: categories[3]._id,
      description:
        'Hot Tools Gold Spring Curling Iron is great for adding waves, curls, or volume to any hair style. Patented pulse technology for gets hot... stays hot performance. The patented pulse technology senses heat loss and begins restoring it immediately so the iron stays hot, curl after curl',
      image: 'tools3.jpg',
      price: 39.99,
      quantity: 30
    },
    {
      name: 'BaBylissPRO NANO Titanium',
      category: categories[3]._id,
      description:
        "BaBylissPRO Nano Titanium 1'' Digital Straightening Iron's advanced technology and all-direction floating plates produces super shiny, silky results",
      image: 'tools4.jpg',
      price: 119.99,
      quantity: 30
    },
    {
      name: 'Absolute Gamma+ Hitter Trimmer',
      category: categories[3]._id,
      description:
        'First ever fully modular Absolute Hitter trimmer with removable drop-top, Universal micro USB charger, and Black Diamond Carbon blade. Includes full Gold, Rose Gold, and Chrome body kits to create 12 different custom modifications',
      image: 'tools5.jpg',
      price: 99.99,
      quantity: 30
    },
    {
      name: 'Salami',
      category: categories[4]._id,
      description:
        'Vestibulum orci, at sagittis risus mi a leo.',
      image: 'salami.jpg',
      price: 2.99,
      quantity: 30
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[3]._id, products[3]._id, products[2]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
