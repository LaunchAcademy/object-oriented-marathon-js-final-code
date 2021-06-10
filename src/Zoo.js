import Cage from "./Cage.js"
// import Employee from "./Employee.js"

class Zoo {
    constructor(name) {
        this.name = name
        this.cages = this.buildCages()
        this.employees = []
    }
    
    buildCages() {
        let cageArray = []
        for (let x = 1; x <= 10; x++) {
            cageArray.push(new Cage())
        }
        return cageArray
    }
    
    addEmployee(newEmployee){
        return this.employees.push(newEmployee)
    }

    addAnimal(newAnimal) {
        let emptyCage = this.cages.find((cage) => cage.isEmpty())
        if (emptyCage === undefined) {
            return 'All of the cages are full!'
        } else {
            emptyCage.animal = newAnimal
            return true
        }

        // this.cages.forEach((cage) => {
        //   if (cage.isEmpty) {
        //     return true
        //   }
        // })
        // return false
    }

    visit(){
        let totalGreet = ""
        this.cages.forEach((cage) =>{
            if (!cage.isEmpty()) {
                totalGreet += `${cage.animal.speak()}\n`
            }
        })

        this.employees.forEach((employee) =>{
            totalGreet += `${employee.greet()}\n`
        })

        return totalGreet
    }

}

export default Zoo