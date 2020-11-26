function fruitOrVeggie(food) {

    if (fruits.includes(food)) console.log('Fruit');
    else if (vegetables.includes(food)) console.log('Vegetable');
    else console.log('unknown');
}

const fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
const vegetables = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];

fruitOrVeggie('banana');
fruitOrVeggie('cucumber');
fruitOrVeggie('pizza');