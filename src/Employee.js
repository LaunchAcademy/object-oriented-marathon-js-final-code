class Employee {
  constructor (firstName, lastName, title) {
    this.firstName = firstName
    this.lastName = lastName
    this.title = title || 'Zookeeper'
  }

  // constructor (firstName, lastName, title = 'Zookeeper') {
  //   this.firstName = firstName
  //   this.lastName = lastName
  //   this.title = title
  // }

  fullTitle() {
    return `${this.firstName} ${this.lastName}, ${this.title}`
  }

  greet() {
    return `${this.firstName} ${this.lastName} waved hello!`
  }

  // fullName() {
  //   return `${this.firstName} ${this.lastName}`
  // }

  // fullTitle() {
  //   return `${this.fullName()}, ${this.title}`
  // }

  // greet() {
  //   return `${this.fullName()} waved hello!`
  // }
}

export default Employee