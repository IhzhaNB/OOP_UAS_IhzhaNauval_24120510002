export class Match {
  private matchId: string;
  private matchDate: Date;
  private matchTime: Date;
  private homeScore: number;
  private awayScore: number;
  private competition: string;
  constructor(
    matchId: string,
    matchDate: Date,
    matchTime: Date,
    homeScore: number,
    awayScore: number,
    competition: string
  ) {
    this.matchId = matchId;
    this.matchDate = matchDate;
    this.matchTime = matchTime;
    this.homeScore = homeScore;
    this.awayScore = awayScore;
    this.competition = competition;
  }
}
