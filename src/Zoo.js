import Cage from "./Cage.js"

class Zoo {
  constructor(name) {
    this.name = name
    this.employees = []
    this.cages = this.addCages()
  }

  addCages() {
    let newCages = []
    for (let i = 0; i < 10; i++) {
      let newCage = new Cage()
      newCages.push(newCage)
    }
    return newCages
  }

  addEmployee(newEmployee) {
    this.employees.push(newEmployee)
  }
  addAnimal(newAnimal) {
    // this.cages[0].animal = newAnimal

    // forEach loop
    // let hasAddedAnimal = false
    // let cagesAreFull = false
    // this.cages.forEach((cage, indx) => {
    //   if (cage.isEmpty() && hasAddedAnimal === false) {
    //     cage.animal = newAnimal
    //     hasAddedAnimal = true
    //   }
    //   if (!cage.isEmpty()) {
    //     cagesAreFull = true
    //   } else {
    //     cagesAreFull = false
    //   }
    // })
    // if (cagesAreFull) {
    //   return "All of the cages are full!"
    // }

    //for loop
    // for (let i = 0; i < this.cages.length; i++) {
    //   const cage = this.cages[i]
    //   if (cage.isEmpty()) {
    //     cage.animal = newAnimal
    //     return
    //   }
    // }
    // return "All of the cages are full!"

    //.find()
    const emptyCage = this.cages.find((cage) => cage.isEmpty())
    if (emptyCage) {
      emptyCage.animal = newAnimal
    } else {
      return "All of the cages are full!"
    }
  }

  visit() {
    let output = ""
    this.cages.forEach((cage) => {
      if (!cage.isEmpty()) {
        output += cage.animal.speak() + "\n"
      }
    })

    this.employees.forEach((employee) => {
      output += employee.greet() + "\n"
    })

    return output
  }
}

export default Zoo
