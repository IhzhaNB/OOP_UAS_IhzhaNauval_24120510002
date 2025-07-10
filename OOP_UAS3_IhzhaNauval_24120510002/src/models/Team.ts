export class Team {
  private teamId: string;
  private league: string;
  private division: string;

  constructor(teamId: string, league: string, division: string) {
    this.teamId = teamId;
    this.league = league;
    this.division = division;
  }
}
