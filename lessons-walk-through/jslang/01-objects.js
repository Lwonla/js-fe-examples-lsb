"use strict";
let input2 = prompt("Do you know Pelles eye-color?", "eyecolor")
let cat = {
    name: "Pelle",
    age: 15,
    address: "Svartrå",
    "is Cool Cat": true,
    [input2]: "brown"
};

let horse = { };

delete cat.address;

document.getElementById('show').innerText = `${cat.name} är ${cat.age} och är för alltid husses coola cat: ${cat["is Cool Cat"]}`;

let input1 = prompt("What do you want to about the fantastic cat?", "age");

alert(`He is ${cat[input1]} and his eyes are ${cat[input2]}`);
alert(`Is there a fantastic cat? ${cat.noSuchProperty === undefined}`);
alert("relatives" in cat);

for(let item in cat){
    alert(cat[item]);
}