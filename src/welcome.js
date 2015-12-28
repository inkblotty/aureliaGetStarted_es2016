export class Welcome {
  heading = 'Welcome to Aurelia!';
  firstName = 'Katie';
  lastName = 'Inkblotty';

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    alert(`Welcome, ${this.fullName}!`);
  }
}
