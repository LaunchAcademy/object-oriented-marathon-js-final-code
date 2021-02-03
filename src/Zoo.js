import Cage from './Cage.js'

class Zoo {
  constructor(name) {
    this.name = name
    this.cages = this.createCages()
    // this.cages = []
    // for(let i=1; i<=10; i++){
    //     this.cages.push(new Cage())
    // }
  }

  createCages() {
    let cages = []
    for(let i=1; i<=10; i++) {
      let newCage = new Cage()
      cages.push(newCage)
    }
    return cages
  }

  addAnimal(newAnimal) {
    // loop through our cages
    // for each cage
    for (let i = 0; i < this.cages.length; i++) {
      let currentCage = this.cages[i]
      // check if it's empty. if empty
      if (currentCage.isEmpty()) {
        // put the animal in the cage
        currentCage.animal = newAnimal;
        return;
      }
    }

    return "All of the cages are full!";

    // this.cages.forEach(cage => {
    //   if (cage.isEmpty()) {
    //     // put the animal in the cage
    //     cage.animal = newAnimal;
    //     return
    //   }
    // })
  }
}

export default Zoo