import Cage from "./Cage.js"

class Zoo {
  constructor(name) {
    this.name = name
    this.employees = []
    this.cages = []
    for (let index = 0; index < 10; index++) {
      let cage = new Cage()
      // console.log(cage);

      this.cages.push(cage)
      // this.cages.push(new Cage())
    }
  }

  addEmployee(employee) {
    this.employees.push(employee)
  }

  addAnimal(animal) {
    const emptyCage = this.cages.find((cage) => {
      if (cage.isEmpty()) {
        return cage
      }
    })
    // console.log("empty", emptyCage);
    if (emptyCage) {
      emptyCage.animal = animal
    } else {
      return "All of the cages are full!"
    }

    // console.log(this.cages);
  }

  visit() {
    let greeting = ""

    this.cages.forEach((cage) => {
      if (!cage.isEmpty()) {
        // console.log(cage.animal.speak());
        greeting += `${cage.animal.speak()}\n`
      }
    })

    this.employees.forEach((employee) => {
      greeting += `${employee.greet()}\n`
    })

    // console.log(greeting)

    return greeting

    // let greeting = []

    // this.cages.forEach((cage) => {
    //   if (!cage.isEmpty()) {
    //     greeting.push(cage.animal.speak())
    //   }
    // })

    // this.employees.forEach((employee) => {
    //   greeting.push(employee.greet())
    // })

    // console.log(greeting);

    // return greeting.join("\n")
    // ^^ works, but needs extra `\n` at the end of the output!
  }
}

export default Zoo
