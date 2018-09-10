// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let mealId = 0

class Meal {
  constructor(title,price) {
    this.title = title 
    this.price = price 
    this.id = mealId++
  }
}