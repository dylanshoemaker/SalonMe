const db = require('./connection');
const { Staff } = require('../models');

db.once('open', async () => {
  await Staff.deleteMany();

  const staff = await Staff.insertMany([
    {
      name: '',
      description:'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      expertise: 'Hair color'
    },
    {
      name: 'Hempz Pomegranate',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'lotion2.jpg',
      category: categories[0]._id,
      price: 20.99,
      quantity: 500
    },
    {
      name: 'Kenra',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'lotion3.jpg',
      price: 14.99,
      quantity: 20
    }
    
  ]);

  console.log('staff seeded');

  process.exit();
});