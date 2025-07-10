export class Sponsor {
  private sponsorId: string;
  private name: string;
  private contactPerson: string;
  private phone: string;
  private email: string;
  private contractValue: number;
  private contractStartDate: Date;
  private contractEndDate: Date;

  constructor(
    sponsorId: string,
    name: string,
    contactPerson: string,
    phone: string,
    email: string,
    contractValue: number,
    contractStartDate: Date,
    contractEndDate: Date
  ) {
    this.sponsorId = sponsorId;
    this.name = name;
    this.contactPerson = contactPerson;
    this.phone = phone;
    this.email = email;
    this.contractValue = contractValue;
    this.contractStartDate = contractStartDate;
    this.contractEndDate = contractEndDate;
  }

  public renewContract(newEndDate: Date, newValue: number): void {
    this.contractEndDate = newEndDate;
    this.contractValue = newValue;
    console.log(
      `Contrak dengan nama: ${
        this.name
      } diperbarui. pada tanggal: ${this.contractEndDate.toDateString()}, isi Contract: ${
        this.contractValue
      }`
    );
  }

  public getInfo(): string {
    return `
      id: ${this.sponsorId}\n
      name: ${this.name}\n
      contact: ${this.contactPerson}\n
      phone: ${this.phone}\n
      email: ${this.email}\n
      mulai contract: ${this.contractStartDate.toDateString()}\n
      `;
  }
}
