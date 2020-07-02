class Snake {
  constructor(name) {
    this.name = name
  }
  // constructor(name, coldBlooded = true) {
  //   this.name = name
  //   this.coldBlooded = coldBlooded
  // }
  speak() {
    return 'Sssssire, ssssire, they may be banditsssss'
  }
  isColdBlooded() {
    return true
    //return this.coldBlooded
  }
}

export default Snake // pronounced Snek
