import Cage from './Cage.js'

class Zoo {
  constructor(name) {
    this.name = name
    this.cages = []
    for (let i = 0; i < 10; i++) {
      this.cages.push(new Cage())
    }
    this.employees = []
  }

  addEmployee(employee) {
    this.employees.push(employee)
  }

  addAnimal(animal) {
    // iterate over the cages, find the first one that's empty, then push the animal into that cage
    // this.cages.forEach((cage) => {
    //   if (cage.isEmpty()) {
    //     cage.addAnimalIntoCage(animal)
    //     break
    //   }
    // })

    // for (let i = 0; i < this.cages.length; i++) {
    //   if (this.cages[i].isEmpty()) {
    //     this.cages[i].addAnimalIntoCage(animal)
    //     return
    //   }
    // }
    // return 'All of the cages are full!'
    // error message

    let theFirstEmptyCage = this.cages.find((cage) => {
      return cage.isEmpty()
    })

    // if theFirstEmptyCage is defined
    if (theFirstEmptyCage) {
      theFirstEmptyCage.addAnimalIntoCage(animal)
    } else {
      // if not
      return 'All of the cages are full!'
    }
  }

  visit() {
    let output = ''
    // iterate over the animals
    // add animal.speak() to the string
    // iterate over the employees
    // add employee.___ to the string
    this.cages.forEach((cage) => {
      if (!cage.isEmpty()) {
        output += `${cage.animal.speak()}\n`
      }
    })

    this.employees.forEach((employee) => {
      output += `${employee.greet()}\n`
    })

    return output
  }
}

export default Zoo
