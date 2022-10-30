// localStorage sparar i värdeparet key/value enligt localStorage("key", "value")

let id = 0;
let showCarObjects = document.getElementById('showCars');
let showCar = document.getElementById('showCar');

// store(): color har lagts till och ett meddelande när något sparats
// funktionen sparar i värdeparet "key = unik siffra": "value = json-file med tre objekt"
function store() {
    let brandName = document.getElementById('carBrand').value;
    let price = document.getElementById('carPrice').value;
    let color = document.getElementById('color').value;

    const car = {
        brandName: brandName,
        price: price,
        color: color,
    }
    id = localStorage.length + 1;
    localStorage.setItem(id, JSON.stringify(car));
    showCarObjects.innerHTML = this.brand + " is stored.";
}

// showListOfItem(): efterfrågad funktion för att visa en lista med 
// sparade objekt, annars visas ett meddelande om att localStorage är tomt
function showListOfItem() {
    let carId;
    showCarObjects.innerText = "";
    if (localStorage.length !== 0) {
        for (let i = 1; i <= localStorage.length; i++) {
            carId = localStorage.getItem(i);
            let p = document.createElement('p');
            let carObjekt = document.createTextNode(carId);
            p.appendChild(carObjekt);
            showCarObjects = document.getElementById('showCars');
            showCarObjects.appendChild(p);
        }
    }
    else {
        showCarObjects.style.color = "red";
        showCarObjects.innerText = "No items are stored. Be sure to post some."
    }
}

// closeList(): "Tömmer" visning av lista
function closeList() {
    showCarObjects.innerHTML = "";
}

// retriveCarName(): em funktion för att kunna söka på bilars märkesnamn.
// Eftersom store() sparar en json file som value, måste den göras om tillbaka till
// objekt, annars kan inte hitta värdet (value) som ligger i carBrandName.
// Den yttre if-satsen handlar om att ta hand om när användaren klickar på knappen
// utan att ha skrivit in något värde i rutan.
// for-loopen går igenom själva listan. Om ett namn hittas tar if-sats hand om det och skriver ut det,
// och skulle listan inte ha det som söks efter tar else if hand om det (carMatchingCount räknar
// när listan är färdigloopad och är 0 om inget namn hittats)
function retriveCarName() {
    let carBrandName = document.getElementById('retrieveKey').value;
    let carId, carValues;
    let carMatchingCount = 0;
    let carObjekt;
    
    if (carBrandName === null || carBrandName === "") {
        showCar.style.color = "red";
        showCar.innerHTML = "Please enter a car brand name";
    }
    else {
        showCar.innerText = "";
        for (let i = 0; i < localStorage.length; i++) {
            carId = localStorage.key(i);
            carValues = localStorage.getItem(carId);
            carObjekt = JSON.parse(carValues); // här görs stringen om tillbaka till objekt
            
            if (carObjekt.brand === carBrandName) {
                let p = document.createElement('p');
                let car = document.createTextNode(carObjekt.brand + " has the key: " + carId);
                p.appendChild(car);
                showCar.style.color = "black";
                showCar.appendChild(p);
                carMatchingCount++;
            }

            else if (i + 1 === localStorage.length && carMatchingCount === 0) {
                showCar.style.color = "red";
                showCar.innerText = "No such car brand name exists, please check spelling. "
            }
            console.log(localStorage.length);
        }
    }

}

// removeItem(): fungerar i princip som retriveCarName()
function removeItem() {
    let id = document.getElementById('removeId').value;
    console.log(id);
    if (id === null || id === "") {
        showCar.style.color = "red";
        showCar.innerHTML = "Please enter a valid car id";
    }
    else {
        if (id != undefined || id != null) {
            for (let i = 0; i < localStorage.length; i++) {
                carId = localStorage.key(i);
                carValues = localStorage.getItem(carId);
                carObjekt = JSON.parse(carValues)
                if (id === carId && confirm(`Are your sure? That will remove ${carObjekt.brand} with id ${id} from localStorage.`)) {
                    localStorage.removeItem(id);
                    showCar.innerText = `${carObjekt.brand} deleted`
                    document.getElementById('removeId').value = "";
                }
                else {
                    showCar.style.color = "red";
                    showCar.innerText = "No such car id exists, please search for a cars id investigate. "
                }
            }
        }
    }
}

// clearStorage() frågar, som säkerhet, om användaren verkligen vill rensa localStorage
function clearStorage() {
    if (confirm("Are your sure? That will delete all items in localStorage.")) {
        localStorage.clear();
        showCarObjects.style.color = "red";
        showCarObjects.innerText = "All items deleted!"
    }
}

// samling av händelsehanterare (events) för sidans knappar
window.onload = function () {
    document.getElementById('carForm').onsubmit = store;
    document.getElementById('showCarList').onclick = showListOfItem;
    document.getElementById('clearButton').onclick = clearStorage;
    document.getElementById('retrieveCarNames').onclick = retriveCarName;
    document.getElementById('removeButton').onclick = removeItem;
    document.getElementById('closeList').onclick = closeList;
}