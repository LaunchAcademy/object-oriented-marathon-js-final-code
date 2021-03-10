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
}

export default Zoo