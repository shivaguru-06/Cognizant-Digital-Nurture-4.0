let events = [
  { name: "Music concert", category: "Music" },
  { name: "Book Fair", category: "Book" }
];

events.push({ name: "Jazz Fest", category: "Music" });

const musicEvents = events.filter(e => e.category === "Music");

const eventCards = events.map(e => `Event: ${e.name} [${e.category}]`);
console.log(eventCards);
