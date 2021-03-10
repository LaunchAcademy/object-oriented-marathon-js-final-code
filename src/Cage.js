class Cage {
  constructor(){
    this.animal=null
  }

  isEmpty(){
   if(this.animal){
    return false
   }
   else{
    return true
   }

  //  if(this.animal === null) {
  //    return true
  //  } else {
  //    return false
  //  }
  //  if(!this.animal) {
  //    return true
  //  } else {
  //    return false
  //  }
    // return !this.animal
  }
}

export default Cage