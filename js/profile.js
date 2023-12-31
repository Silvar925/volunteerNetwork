const btnEditingProfile = document.getElementById("btnEditingProfile")
const profileInfo_box = document.getElementById("profileInfo_box")
const eitingProfile_box = document.getElementById("eitingProfile_box")
const btnSave = document.getElementById("btnSave")

btnEditingProfile.addEventListener('click', function() {
    profileInfo_box.classList.add("hidden")
    eitingProfile_box.classList.remove("hidden")
})

btnSave.addEventListener('click', function() {
    eitingProfile_box.classList.add("hidden")
    profileInfo_box.classList.remove("hidden")
})