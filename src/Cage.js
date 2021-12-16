class Cage{
  constructor(){
    this.animal = null
  }
  isEmpty(){
    if(!this.animal){
      return true
    }
    return false
  }

}

export default Cage