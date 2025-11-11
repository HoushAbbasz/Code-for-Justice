const breakfasts = ['Oatmeal with banana & peanut butter', 'Scrambled egg with veggies', 'Yogurt with Fruit and seeds']; 
const lunches = ['Chickpea & tomato salad', 'Lentil & vegetable soup', 'Brown rice and black bean bowl'];
const dinners = ['Vegetable stir fy with tofu', 'Baked chicken & roasted vegetables', 'Vegetable curry with chapati', 'Stuffed bell peppers'];
const snacks = ['Veggie sticks with hummus', 'Fruit smoothie', 'Apple slices with peanut butter', 'Boiled eggs', 'Crackers and cheese']

function getRandomFood(arr) {
    rNum = Math.floor(Math.random() * arr.length);
    return arr[rNum]; 
}

document.getElementById("breakfast").textContent = getRandomFood(breakfasts);
document.getElementById("lunch").textContent = getRandomFood(lunches);
document.getElementById("dinner").textContent = getRandomFood(dinners);
document.getElementById("snack").textContent = getRandomFood(snacks);