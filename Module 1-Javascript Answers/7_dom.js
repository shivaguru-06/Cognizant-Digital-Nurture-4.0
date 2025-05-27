const eventList = document.querySelector("#eventList");

events.forEach(event => {
  const card = document.createElement("div");
  card.textContent = `${event.name} (${event.category})`;
  eventList.appendChild(card);
});

function updateSeats(event) {
  
}
