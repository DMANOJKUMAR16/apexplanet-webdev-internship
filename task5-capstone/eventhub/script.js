const events = [
{
id: 1,
title: "Tech Conference 2026",
category: "tech",
date: "10 June 2026",
description: "Explore the latest trends in software development and AI."
},
{
id: 2,
title: "Startup Networking Meetup",
category: "startup",
date: "15 June 2026",
description: "Connect with founders, investors, and entrepreneurs."
},
{
id: 3,
title: "Web Development Workshop",
category: "tech",
date: "20 June 2026",
description: "Hands-on frontend and backend development sessions."
},
{
id: 4,
title: "Community Leadership Summit",
category: "community",
date: "25 June 2026",
description: "Learn leadership and team-building skills."
},
{
id: 5,
title: "AI Innovation Summit",
category: "tech",
date: "30 June 2026",
description: "Discussions on AI, machine learning, and future technology."
},
{
id: 6,
title: "Startup Pitch Day",
category: "startup",
date: "05 July 2026",
description: "Watch innovative startups pitch their ideas."
}
];

const eventsContainer =
document.getElementById("eventsContainer");

const bookingsContainer =
document.getElementById("bookingsContainer");

const searchInput =
document.getElementById("searchInput");

const categoryFilter =
document.getElementById("categoryFilter");

const toast =
document.getElementById("toast");

let bookings =
JSON.parse(localStorage.getItem("bookings")) || [];

function showToast(message){

toast.textContent = message;

toast.classList.add("show");

setTimeout(() => {

toast.classList.remove("show");

}, 2000);

}

function displayEvents(eventList){

eventsContainer.innerHTML = "";

eventList.forEach(event => {

const card =
document.createElement("div");

card.classList.add("event-card");

card.innerHTML = `
<h3>${event.title}</h3>

<p><strong>Date:</strong> ${event.date}</p>

<p><strong>Category:</strong> ${event.category}</p>

<p>${event.description}</p>

<button
class="book-btn"
onclick="bookEvent(${event.id})"
>
Book Event
</button>
`;

eventsContainer.appendChild(card);

});

}

function displayBookings(){

if(bookings.length === 0){

bookingsContainer.innerHTML = `
<div class="empty">
No bookings yet.
</div>
`;

return;
}

bookingsContainer.innerHTML = "";

bookings.forEach(event => {

const card =
document.createElement("div");

card.classList.add("booking-card");

card.innerHTML = `
<h3>${event.title}</h3>

<p><strong>Date:</strong> ${event.date}</p>

<p><strong>Category:</strong> ${event.category}</p>

<p>${event.description}</p>

<button
class="book-btn"
onclick="removeBooking(${event.id})"
>
Cancel Booking
</button>
`;

bookingsContainer.appendChild(card);

});

}

function bookEvent(id){

const selectedEvent =
events.find(event => event.id === id);

const alreadyBooked =
bookings.some(event => event.id === id);

if(alreadyBooked){

showToast("Event already booked");

return;
}

bookings.push(selectedEvent);

localStorage.setItem(
"bookings",
JSON.stringify(bookings)
);

displayBookings();

showToast("Event booked successfully");

}

function removeBooking(id){

bookings =
bookings.filter(
event => event.id !== id
);

localStorage.setItem(
"bookings",
JSON.stringify(bookings)
);

displayBookings();

showToast("Booking removed");

}

function filterEvents(){

const searchText =
searchInput.value.toLowerCase();

const category =
categoryFilter.value;

const filteredEvents =
events.filter(event => {

const matchesSearch =
event.title
.toLowerCase()
.includes(searchText);

const matchesCategory =
category === "all" ||
event.category === category;

return (
matchesSearch &&
matchesCategory
);

});

displayEvents(filteredEvents);

}

searchInput.addEventListener(
"input",
filterEvents
);

categoryFilter.addEventListener(
"change",
filterEvents
);

displayEvents(events);

displayBookings();