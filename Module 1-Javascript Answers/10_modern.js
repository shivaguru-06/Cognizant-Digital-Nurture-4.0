function addEvent({ name, date, seats = 10 }) {
  events.push({ name, date, seats });
}

const [firstEvent, ...restEvents] = events;
const clonedEvents = [...events];
