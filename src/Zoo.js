import Cage from './Cage.js'

class Zoo {
  constructor(name) {
    this.name = name
    this.cages = []
    for (let i = 0; i<10; i++) {
      this.cages.push(new Cage())
    }
    this.employees = []
  }

  addEmployee(employee) {
    this.employees.push(employee)
  }

  addAnimal(animal) {
    for (let i = 0; i<this.cages.length; i++) {
      if (this.cages[i].isEmpty()) {
        this.cages[i].animal = animal
        return `Animal added to cage ${i+1}`
      }
    }
    return 'All of the cages are full!'
  }

  visit() {
    let animalsAndEmployees =''
    this.cages.forEach((cage) => {
      if (!cage.isEmpty()) {
        animalsAndEmployees += `${cage.animal.speak()}\n`
      }
    })

    this.employees.forEach((employee) => {
      animalsAndEmployees += `${employee.greet()}\n`
    })

    return animalsAndEmployees
  }

}

export default Zoo