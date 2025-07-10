export class Contract {
  private contractId: string;
  private startDate: Date;
  private endDate: Date;
  private salary: number;
  private clauses: string;

  constructor(
    contractId: string,
    startDate: Date,
    endDate: Date,
    salary: number,
    clauses: string
  ) {
    this.contractId = contractId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.salary = salary;
    this.clauses = clauses;
  }
}
