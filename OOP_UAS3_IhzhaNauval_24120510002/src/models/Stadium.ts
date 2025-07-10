export class Stadium {
  private stadiumId: string;
  private name: string;
  private capacity: number;
  private address: string;

  construtor(
    stadiumId: string,
    name: string,
    capacity: number,
    address: string
  ) {
    this.stadiumId = stadiumId;
    this.name = name;
    this.capacity = capacity;
    this.address = address;
  }
}
