import Cage from "./Cage.js"
class Zoo{
  constructor(name){
    this.name = name
    this.employees = []
    this.cages = []

    for(let i = 1; i<=10;i++){
      this.cages.push(new Cage())
    }
    
  }

  addEmployee(employee) {
    this.employees.push(employee)
  }

  addAnimal(animalObject) {
    for (let i = 0; i <  this.cages.length; i++) {
      if (this.cages[i].isEmpty()) {
        this.cages[i].animal = animalObject
        return
      } 
    }
    return "All of the cages are full!"
  }
    visit() {
      let greetingString = ""
      for (let i=0; i<this.cages.length; i++) {
        if (!this.cages[i].isEmpty()){
          greetingString += `${this.cages[i].animal.speak()}\n` 
        }
      }

      // this.cages.forEach((cageObject) => {
      //     if (!cageObject.isEmpty()){
      //       greetingString += `${cageObject.animal.speak()}\n` 
      //      }
      // })
   
      for (let i=0; i<this.employees.length; i++) { 
        greetingString += `${this.employees[i].greet()}\n`
      }

      // this.employees.forEach((employeeObject) => {
      //    greetingString += `${employeeObject.greet()}\n`
      // })
      
      return greetingString
    }
}


export default Zoo