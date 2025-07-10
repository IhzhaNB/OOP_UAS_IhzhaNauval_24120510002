export class Season {
  private seasonId: string;
  private year: number;
  private league: string;
  private startDate: Date;
  private endDate: Date;

  constructor(
    seasonId: string,
    year: number,
    league: string,
    startDate: Date,
    endDate: Date
  ) {
    this.seasonId = seasonId;
    this.year = year;
    this.league = league;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
