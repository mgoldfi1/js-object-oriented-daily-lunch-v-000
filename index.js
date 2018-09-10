// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let mealId = 0
let deliveryId = 0
let neighborhoodId = 0
let customerId = 0
class Neighborhood {
  constructor(name){
    this.name = name
    this.id = neighborhoodId++
    store.neighborhoods.push(this)
  }


  deliveries() {
    return store.deliveries.filter(function(x){return x.neighborhoodId === this.id}.bind(this))
  }

  customers() {
    return store.customers.filter(function(x){return x.neighborhoodId === this.id}.bind(this))
  }
}

class Customer {
  constructor(name, neighborhoodId) {
    this.name = name
    this.neighborhoodId = neighborhoodId
    this.id = customerId++
    store.customers.push(this)
  }

  deliveries() {
    return store.deliveries.filter(function(x){return x.customerId === this.id}.bind(this))
  }

  meals() {
    return this.deliveries().map(function(x){return x.meal()})
  }
}


class Meal {
  constructor(title,price) {
    this.title = title
    this.price = price
    this.id = mealId++
    store.meals.push(this)
  }

  deliveries(){
    return store.deliveries.filter(function(x){return x.mealId === this.id}.bind(this))
  }
  customers() {
    return this.deliveries().map(function(x){return x.customer()})
  }
}


class Delivery {
  constructor(mealId,neighborhoodId,customerId){
    this.mealId = mealId
    this.neighborhoodId = neighborhoodId
    this.customerId = customerId
    this.id = deliveryId++
    store.deliveries.push(this)
  }


  meal() {
    return store.meals.find(function(x){return x.id === this.mealId}.bind(this))
  }

  customer() {
    return store.customers.find(function(x){return x.id === this.customerId}.bind(this))
  }

  neighborhood() {
    return store.neighborhoods.find(function(x){return x.id === this.neighborhoodId}.bind(this))
  }


}
