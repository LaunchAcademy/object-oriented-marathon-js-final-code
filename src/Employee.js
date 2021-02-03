class Employee {
  constructor(firstName, lastName, title = 'Zookeeper') {
  // constructor(firstName, lastName, title) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    // this.title = title || 'Zookeeper';
  }

  fullTitle() {

    return `${this.fullName()}, ${this.title}`;
  }

  greet() {
    //let fullName = fullName();

    return `${this.fullName()} waved hello!`;
  }

  // helper method
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default Employee;