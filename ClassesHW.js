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
console.log(lilBrodie)
console.log(lilBrodie.getPrice())
// lilBrodie.wheelRun()
// lilBrodie.eatFood()
// lilBrodie.getPrice()
