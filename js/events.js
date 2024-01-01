const containerEvents = document.getElementById("section_events_grid")
const sectionEventsInfo = document.getElementById("section_events_info")
const btnNews = document.getElementById("btnNews")
const btnBack = document.getElementById("btnBack")

btnNews.addEventListener('click', function() {
    containerEvents.classList.add("hidden")
    sectionEventsInfo.classList.remove("hidden")
})

btnBack.addEventListener('click', function() {
    containerEvents.classList.remove("hidden")
    sectionEventsInfo.classList.add("hidden")
})