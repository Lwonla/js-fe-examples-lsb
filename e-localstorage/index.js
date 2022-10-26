function store() {
    let brand = document.getElementById('carBrand').value;
    console.log(brand);
    let price = document.getElementById('carPrice').value;
    let key = document.getElementById('key').value;

    const car = {
        brand: brand,
        price: price,
    }
    localStorage.setItem(key, JSON.stringify(car));
}

function retrieveRecords() {
    let key = document.getElementById('retrieveKey').value;
    console.log(key);
    let records = localStorage.getItem(key);
    let paragraph = document.createElement('p');
    let info = document.createTextNode(records);
    paragraph.appendChild(info);
    let element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}

function removeItem() {
    let key = document.getElementById('removeKey').value;
    localStorage.removeItem(key);
    console.log("Item with key: ${key} removed");
}

function clearStorage() {
    localStorage.clear();
    console.log("All items removed");
}

window.onload = function () {
    document.getElementById("carForm").onsubmit = store;
    document.getElementById("retrieveButton").onclick = retrieveRecords;
    document.getElementById('removeButton').onclick = removeItem;
    document.getElementById('clearButton').onclick = clearStorage;
}