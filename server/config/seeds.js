const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Skin Care' },
    { name: "Men's" },
    { name: 'Hair Care' },
    { name: 'Tools' }
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
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'men1.jpg',
      price: 19.99,
      quantity: 50
    },
    {
      name: 'Mitch Styling Cream',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'mens2.jpg',
      price: 17.99,
      quantity: 50
    },
    {
      name: 'American Crew Defining Paste',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'mens3.jpg',
      price: 15.99,
      quantity: 100
    },
    {
      name: 'MVRCK by Mitch',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'mens4.jpg',
      price: 17.99,
      quantity: 100
    },
    {
      name: 'REUZEL Beard Care',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'mens5.jpg',
      price: 26.99,
      quantity: 100
    },
    {
      name: 'Biolage Color Last',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'shampoo1.jpg',
      price: 16.99,
      quantity: 30
    },
    {
      name: 'Biolage Hydra Source',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'shampoo2.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Joico K-PAK',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'shampoo3.jpg',
      price: 20.99,
      quantity: 30
    },
    {
      name: 'Pureology Shampoo & Conditioner',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'shampoo4.jpg',
      price: 39.99,
      quantity: 30
    },
    {
      name: 'Joico Color Endure',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'shampoo5.jpg',
      price: 20.99,
      quantity: 30
    },
    {
      name: 'BaBylissPRO Dryer & Flat Iron',
      category: categories[3]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'tools1.jpg',
      price: 99.99,
      quantity: 30
    },
    {
      name: 'BaBylissPRO Rapido Dryer',
      category: categories[3]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'tools2.jpg',
      price: 118.99,
      quantity: 30
    },
    {
      name: 'Hot Tools Hair Curler',
      category: categories[3]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'tools3.jpg',
      price: 39.99,
      quantity: 30
    },
    {
      name: 'BaBylissPRO NANO Titanium',
      category: categories[3]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'tools4.jpg',
      price: 119.99,
      quantity: 30
    },
    {
      name: 'Absolute Gamma+Hitter Trimmer',
      category: categories[3]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'tools5.jpg',
      price: 99.99,
      quantity: 30
    }
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
        products: [products[4]._id, products[3]._id, products[2]._id]
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
