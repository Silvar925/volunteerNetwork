const firstNews = document.getElementById('firstNews')
const bannerMain = document.getElementById('banner')
const sectionNews = document.getElementById('sectionNews')
const detailedInformationNews = document.getElementById('detailedInformationNews')
const btnBackNews = document.getElementById('btnBackNews')

firstNews.addEventListener('click', function() {
    bannerMain.classList.add("hidden")
    sectionNews.classList.add("hidden")
    detailedInformationNews.classList.remove('hidden')
})

btnBackNews.addEventListener('click', function() {
    bannerMain.classList.remove("hidden")
    sectionNews.classList.remove("hidden")
    detailedInformationNews.classList.add('hidden')
})