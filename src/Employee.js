class Employee {
  constructor (firstName, lastName, title) {
    this.firstName = firstName
    this.lastName = lastName
    this.title = title || "Zookeeper"
    // if(title) {
    //   this.title = title
    // } else {
    //   this.title = "Zookeeper"
    // }
  }

  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  fullTitle(){
    // return this.firstName +" "+ this.lastName + ", "+this.title
    // return `${this.firstName} ${this.lastName}, ${this.title}`
    return `${this.getFullName()}, ${this.title}`;
  }

  greet() {
    //return(`${this.firstName} ${this.lastName} waved hello!`)
    return `${this.getFullName()} waved hello!`
  }

  // constructor (firstName, lastName, title = "Zookeeper") {
  //   this.firstName = firstName
  //   this.lastName = lastName
  //   this.title = title
  // }

}

export default Employee