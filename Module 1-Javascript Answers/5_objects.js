class Event {
  constructor(name, date, seats) {
    this.name = name;
    this.date = date;
    this.seats = seats;
  }
  checkAvailability() {
    return this.seats > 0;
  }
}

const event1 = new Event("New Year Party", "2025-01-01", 30);
console.log(event1.checkAvailability());

console.log(Object.entries(event1));
