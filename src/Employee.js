class Employee {
  constructor(firstName, lastName, title = "Zookeeper") {
    this.firstName = firstName
    this.lastName = lastName
    // if(title !== undefined)
    // {
    //   this.title = title
    // }
    // else{
    //   this.title = 'Zookeeper';
    // }
    // this.title = title || 'Zookeeper';
    this.title = title
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  fullTitle() {
    return `${this.fullName()}, ${this.title}`
  }

  greet() {
    return `${this.fullName()} waved hello!`
  }
}

export default Employee
