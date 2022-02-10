import Cage from './Cage.js'

class Zoo{
  constructor(name){
    this.name = name
    this.employees = []
    // this.cages = [
    //   new Cage(),
    //   new Cage(),
    //   new Cage(),
    //   new Cage(),
    //   new Cage(),
    //   new Cage(),
    //   new Cage(),
    //   new Cage(),
    //   new Cage(),
    //   new Cage()
    // ]
    this.cages = []
    for(let i = 0; i < 10; i++) {
      // const newCage = new Cage()
      // this.cages.push(newCage)
      this.cages.push(new Cage())
    }
    // this.cages = this.setUpCages()
  }

  // setUpCages() {
  //   let cages = []
  //   for(let i = 0; i < 10; i++) {
  //     cages.push(new Cage())
  //   }
  //   return cages
  // }

  addEmployee(newEmployee) {
    this.employees.push(newEmployee)
  }

  addAnimal(newAnimal) {
    // put the animal into the first cage
    // but this isn't right! because it's always and ONLY
    // filling the first cage
    // const firstCage = this.cages[0]
    // firstCage.animal = newAnimal
    // or, as a shortcut:
    // this.cages[0].animal = newAnimal

    // iterating through all of the cages
    // this.cages.forEach(cage => {
    //   // check if the cage is empty
    //   // if(cage.animal === null) {
    //   if(cage.isEmpty()) {
    //     // if it's empty, put the newAnimal inside
    //     cage.animal = newAnimal
    //   }
    // })

    // ANY TIME we want to exit early, the `for`loop is a better tool
    // iterating through all of the cages
    for(let i = 0; i < this.cages.length; i++) {
      const cage = this.cages[i]
      // check if the cage is empty
      if(cage.isEmpty()) {
        // if it's empty, put the newAnimal inside
        cage.animal = newAnimal
        return
      }
    }

    // we'll only ever get here if it never finds an empty cage
    return "All of the cages are full!"
  }

  visit() {
    let output = ""

    this.cages.forEach(cage => {
      if(!cage.isEmpty()) {
        output += `${cage.animal.speak()}\n`
      }
    })

    this.employees.forEach(employee => {
      output += `${employee.greet()}\n`
    })

    return output
  }
}
export default Zoo
