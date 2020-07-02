class Cage {
  constructor() {
    this.animal = null
  }

  isEmpty() {
    if (this.animal == null) {
      // if (!this.animal) {
      return true
    }
    return false

    // return !this.animal
  }

  addAnimalIntoCage(animal) {
    this.animal = animal
  }
}

export default Cage
