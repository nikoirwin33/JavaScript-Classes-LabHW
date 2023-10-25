class Hamster {
constructor(name="", owner="", price = 15) {
  this.name = name
  this.owner = owner
  this.price = price
}



wheelRun() {
  console.log("squeak squeak");

}
 eatFood() {
   console.log("nibble nibble")

 }

 getPrice() {
  return this.price

 }
}
const lilBrodie = new Hamster()
// console.log(lilBrodie)
// console.log(lilBrodie.getPrice())
// lilBrodie.wheelRun()
// lilBrodie.eatFood()
// lilBrodie.getPrice()

class Person {
constructor (name = 0 , age = 0, height = 0 , weight = 0 , mood= 0 , hamsters = [] , bankAccount = 0 ) {
  this.name = name
  this.age = age
  this.height = height
  this.weight = weight
  this.mood = mood
  this.hamsters = hamsters
  this.bankAccount = bankAccount
}

getName() {
  console.log("returns name")
}
getAge() {
  console.log("returns age")
}
getWeight() {
  return this.weight --
}
greet() {
  console.log("Hello, My name is " + this.name )
}
eat() {
  this.weight ++
  this.mood ++
}
exercise() {
this.weight --
}
ageUp() {
this.age ++
this.height ++
this.weight ++
this.mood --
this.bankAccount += 10
}
buyHamster(){
this.mood += 10
this.bankAccount -= this.hamsters.getPrice( )
}
}

const mainPerson = new Person ("Steph Curry", 23, 5, 200, 5, [1] , 500 )
// console.log(mainPerson)
// mainPerson.eat()
// mainPerson.greet()
// mainPerson.ageUp()
// console.log(mainPerson)


