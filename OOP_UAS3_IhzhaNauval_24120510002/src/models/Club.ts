import { Contract } from "./Contract";
import { Sponsor } from "./Sponsor";
import { Stadium } from "./Stadium";
import { Staff } from "./Staff";
import { Team } from "./Team";

export class Club {
  private clubId: string;
  private name: string;
  private foundingDate: Date;
  private budget: number;
  private league: string;

  private stadium: Stadium; // Relasi ke Stadium: 1 club bisa memiliki 1 Stadium

  private sponsor: Sponsor[] = []; // Relasi ke Sponsor: 1 club bisa memiliki 0 atau banyak sponsor dan diinisialisasi langsung
  private team: Team[] = []; // Relasi ke Team: 1 club bisa memiliki 0 atau banyak Team dan diinisialisasi langsung
  private staff: Staff[] = []; // Relasi ke Staff: 1 club bisa memiliki 0 atau banyak Staff dan diinisialisasi langsung
  private contract: Contract[] = []; // Relasi ke Contract: 1 club bisa memiliki 0 atau banyak Contract dan diinisialisasi langsung

  constructor(
    clubId: string,
    name: string,
    foundingDate: Date,
    budget: number,
    league: string,
    stadium: Stadium
  ) {
    this.clubId = clubId;
    this.name = name;
    this.foundingDate = foundingDate;
    this.budget = budget;
    this.league = league;
    this.stadium = stadium;
  }

  public manageBudget(): void {
    console.log(`Club ${this.name} info budget: $${this.budget.toFixed(2)}`);
  }

  public signSponsor(sponsor: Sponsor): void {
    this.sponsor.push(sponsor);
    console.log(`Club ${this.name} memiliki Sponsor: ${sponsor.getInfo()}`);
  }

  public getInfo(): void {
    console.log(`
      clubId =  ${this.clubId}\n
      nama Club = ${this.name}\n
      foundingDate = ${this.foundingDate}\n
      budget = ${this.budget}\n
      language = ${this.league}\n 
  `);
  }
}
