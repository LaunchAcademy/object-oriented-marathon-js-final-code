import Cage from "./Cage.js"

class Zoo {
  constructor(name) {
    this.name = name
    this.employees = []
    this.cages = []

    for (let index = 0; index < 10; index++) {
      let cage = new Cage()
      this.cages.push(cage)
    }
  }

  addEmployee(employee) {
    this.employees.push(employee)
  }

  addAnimal(animal) {
    for (let i = 0; i < this.cages.length; i++) {
      if (this.cages[i].isEmpty()) {
        this.cages[i].animal = animal
        return `Animal added to cage ${i+1}`
      }
    }
    return "All of the cages are full!"
  }

  visit() {
    let greeting = ""

    this.cages.forEach((cage) => {
      if (!cage.isEmpty()) {
        greeting += `${cage.animal.speak()}\n`
      }
    })

    this.employees.forEach((employee) => {
      greeting += `${employee.greet()}\n`
    })

    return greeting
  }
}

export default Zoo