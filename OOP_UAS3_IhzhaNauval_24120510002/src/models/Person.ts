export class Person {
  // Attribute
  private personId: string;
  private firstName: string;
  private lastName: string;
  private dateOfBirth: Date;
  private nationality: string;

  //   Constructor
  constructor(
    personId: string,
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    nationality: string
  ) {
    this.personId = personId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.nationality = nationality;
  }

  //   Method
  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public getInfo(): string {
    return `
      id: ${this.personId}\n
      name: ${this.getFullName()}\n
      Lahir: ${this.dateOfBirth.toDateString()}\n
      Asal: ${this.nationality}\n
      `;
  }
}
