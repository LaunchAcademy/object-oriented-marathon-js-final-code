import Cage from "./Cage.js"

class Zoo {
  constructor(name) {
    this.name = name
    // this.cages = []
    // for(let i = 0; i < 10; i++) {
    //   this.cages.push(new Cage())
    // }
    this.cages = this.createCages()
    this.employees = []
  }

  createCages() {
    let cages = []
    for(let i = 0; i < 10; i++) {
      cages.push(new Cage())
    }
    return cages
  }

  addEmployee(newEmployee) {
    this.employees.push(newEmployee)
  }

  addAnimal(newAnimal) {
    // should add an animal to the first open cage
    for(let i = 0; i < this.cages.length; i++) {
      if(this.cages[i].isEmpty()) {
        this.cages[i].animal = newAnimal
        // should not add an animal to all of the open cages
        return
      }
    }

    // should return a message that all of the cages are full if cages are filled
    return "All of the cages are full!"
  }
}

export default Zoo