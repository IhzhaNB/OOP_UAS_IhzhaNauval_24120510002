import { Person } from "./Person";

export class Player extends Person {
  private jerseyNumber: number;
  private marketValue: number;
  private position: string; // belum ada di UML
  private status: string; // belum ada di UML

  constructor(
    jerseyNumber: number,
    marketValue: number,
    personId: string,
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    nationality: string,
    position: string,
    status: string
  ) {
    super(personId, firstName, lastName, dateOfBirth, nationality);
    this.jerseyNumber = jerseyNumber;
    this.marketValue = marketValue;
    this.position = position;
    this.status = status;
  }

  //   Method
  private getPosition(): string {
    return this.position;
  }

  private getStatus(): string {
    return this.status;
  }

  getJerseyNumber(): number {
    return this.jerseyNumber;
  }

  getMarketValue(): number {
    return this.marketValue;
  }

  private setPosition(newPosition: string): void {
    const positionValid = ["Forward", "Midfielder", "Defender", "Goalkeeper"];
    if (positionValid.includes(newPosition)) {
      this.position = newPosition;
    } else {
      console.log(
        `Please input: "Forward", "Midfielder", "Defender", "Goalkeeper"`
      );
    }
  }

  private setStatus(newStatus: string): void {
    const statusValid = ["Active", "Injured", "Loaned"];
    if (statusValid.includes(newStatus)) {
      this.status = newStatus;
    } else {
      console.log(`Please input: "Active", "Injured", "Loaned"`);
    }
  }

  train(): void {
    console.log(`${this.getFullName()} sedang berlatih`);
  }

  playMatch(): void {
    console.log(`${this.getFullName()} sedang bermain Match`);
  }
}
