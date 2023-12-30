const btnEditingProfile = document.getElementById("btnEditingProfile")
const profileInfo_box = document.getElementById("profileInfo_box")
const eitingProfile_box = document.getElementById("eitingProfile_box")

btnEditingProfile.addEventListener('click', function() {
    profileInfo_box.classList.add("hidden")
    eitingProfile_box.classList.remove("hidden")
})