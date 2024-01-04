function addToTheList(inputObjectList) {
    for (let i = 0; i < inputObjectList.length; i++) {       
        let li = document.createElement('li')
        li.classList.add('card')  
        
        li.innerHTML = `                    
            <img src="${inputObjectList[i].photo}" alt="Magf">
            <div class="info-box">
                <a href="#">${inputObjectList[i].siteName}</a>
                <div class = "additional-info">
                    <p>Формат площадки: ${inputObjectList[i].siteFormat}</p>
                    <p>Адрес объекта: ${inputObjectList[i].objectAddress}</p>
                    <p>Ближайший город: ${inputObjectList[i].nearestCity}</p>
                </div>
            </div>
        `
        listObject.appendChild(li)
    }

    clickNameHandler(listObjectsBox)
}
