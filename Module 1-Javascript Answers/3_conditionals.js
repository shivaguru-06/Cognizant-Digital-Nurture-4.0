const events = [
  { name: "Music Night", date: "2025-08-19", seats: 100 },
  { name: "Art Fair", date: "2024-10-06", seats: 20 },
];

const today = new Date();

events.forEach(event => {
  if (new Date(event.date) > today && event.seats > 0) {
    console.log(`Upcoming: ${event.name}`);
  }
});

function registerUser(event) {
  try {
    if (event.seats <= 0) throw new Error("No seats available");
    event.seats--;
    console.log("Registration successful!");
  } catch (err) {
    console.error(err.message);
  }
}

