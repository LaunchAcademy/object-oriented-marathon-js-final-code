class Cage {
  constructor(){
    this.animal = null;
  }

  isEmpty() {
    // // return true if cage is empty
    // // (this.animal === null)
    if(this.animal === null) {
      return true;
    } else {
        // return false this.animal
      return false;
    }
    // return this.animal === null;
    // return !this.animal
  }
}

export default Cage