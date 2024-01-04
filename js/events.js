import { events, speaker } from "./dataBase.js"

const containerEvents = document.getElementById("section_events_grid")
const sectionEventsInfo = document.getElementById("section_events_info")
const btnNews = document.getElementById("btnNews")
const btnBack = document.getElementById("btnBack")


const container_events_cardList = document.getElementById('container_events_cardList')

btnNews.addEventListener('click', function () {
    containerEvents.classList.add("hidden")
    sectionEventsInfo.classList.remove("hidden")
})

btnBack.addEventListener('click', function () {
    containerEvents.classList.remove("hidden")
    sectionEventsInfo.classList.add("hidden")
})

function addNewEventCard(id, name, category, date, numberParticipants) {
    let divCard = document.createElement('div')
    divCard.classList.add('card')

    let idEvent = 'btnCardEvent' + id

    divCard.innerHTML = `
    <img src="/images/card.png" alt="#">

    <div class="card_info">
        <a href="#" id="${idEvent}">${name}</a>
    </div>

    <div class="tags">
        <p>${date}</p>
        <p>${category}</p>
        <p>${numberParticipants}</p>
    </div>`

    container_events_cardList.appendChild(divCard)

}
function addAllEvents(events) {
    events = events[0];

    const { id, name, category, date, numberParticipants } = events;

    if (name && category && date && numberParticipants) {
        addNewEventCard(id, name, category, date, numberParticipants);
    }
}


addAllEvents(events)

