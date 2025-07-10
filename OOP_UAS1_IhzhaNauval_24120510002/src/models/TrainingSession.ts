export class TrainingSession {
  private sessionId: string;
  private sessionDate: Date;
  private sessionTime: Date; // format ke time
  private location: string;
  private focusArea: string;

  constructor(
    sessionId: string,
    sessionDate: Date,
    sessionTime: Date,
    location: string,
    focusArea: string
  ) {
    this.sessionId = sessionId;
    this.sessionDate = sessionDate;
    this.sessionTime = sessionTime;
    this.location = location;
    this.focusArea = focusArea;
  }
}
