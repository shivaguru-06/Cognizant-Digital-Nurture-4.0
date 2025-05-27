let events = [
  { name: "New Year Party", category: "Music", seats: 10 },
  { name: "Food Fair", category: "Art", seats: 5 }
];

function addEvent(event) {
  events.push(event);
}

function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  if (event && event.seats > 0) {
    event.seats--;
    return true;
  }
  return false;
}

function filterEventsByCategory(category, callback) {
  return events.filter(event => callback(event, category));
}


function createCategoryTracker(category) {
  let count = 0;
  return function() {
    count++;
    console.log(`Registrations for ${category}: ${count}`);
  };
}
const musicTracker = createCategoryTracker("Music");
musicTracker();
