var hamburger = {
  isGood: true,
  brand: 'Shake Shack',
  ingredients: ['letuce', 'Tomato', 'Cheese', 'Patty', 'Bacon'],
  pattys: 2,

  mood: function(name) {
    console.log( name + " really enjoyed the food!")
  }
}
hamburger.mood('Richard');
