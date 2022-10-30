
let id = 0;
let showCarObjects = document.getElementById('showCars');
let showCar = document.getElementById('showCar');

function store() {
    let brand = document.getElementById('carBrand').value;
    let price = document.getElementById('carPrice').value;
    let color = document.getElementById('color').value;

    const car = {
        brand: brand,
        price: price,
        color: color,
    }
    id = localStorage.length + 1;
    localStorage.setItem(id, JSON.stringify(car));
    showCarObjects.innerHTML = this.brand + " is stored.";
}

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

function closeList() {
    showCarObjects.innerHTML = "";
}

function retriveCarName() {
    let brandName = document.getElementById('retrieveKey').value;
    let carId, carValues;
    let carMatchingCount = 0;
    let carObjekt;
    
    if (brandName === null || brandName === "") {
        showCar.style.color = "red";
        showCar.innerHTML = "Please enter a car brand name";
    }
    else {
        showCar.innerText = "";
        for (let i = 0; i < localStorage.length; i++) {
            carId = localStorage.key(i);
            carValues = localStorage.getItem(carId);
            carObjekt = JSON.parse(carValues)
            
            if (carObjekt.brand === brandName) {
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

function clearStorage() {
    if (confirm("Are your sure? That will delete all items in localStorage.")) {
        localStorage.clear();
        showCarObjects.style.color = "red";
        showCarObjects.innerText = "All items deleted!"
    }
}

window.onload = function () {
    document.getElementById('carForm').onsubmit = store;
    document.getElementById('showCarList').onclick = showListOfItem;
    document.getElementById('clearButton').onclick = clearStorage;
    document.getElementById('retrieveCarNames').onclick = retriveCarName;
    document.getElementById('removeButton').onclick = removeItem;
    document.getElementById('closeList').onclick = closeList;
}