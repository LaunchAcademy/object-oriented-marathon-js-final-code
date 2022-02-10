class Cage {
  constructor() {
    this.animal = null
  }

  isEmpty() {
    // if(this.animal === null) {
    //   return true
    // } else {
    //   return false
    // }
    // return this.animal === null
    return !this.animal
  }
}

export default Cage