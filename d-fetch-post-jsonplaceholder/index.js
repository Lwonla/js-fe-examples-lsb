// Exmplet använder https://jsonplaceholder.typicode.com/ 

const url1 = "https://jsonplaceholder.typicode.com/posts/1";

let data1 = fetch(url1)
  .then((response) => response.json())
  .then((json) => console.log(json));


const url2 = "https://jsonplaceholder.typicode.com/posts";

let data2 = fetch(url2)
  .then((response) => response.json())
  .then((json) => console.log(json));

    let data3 = fetch(url2)
  .then((response) => response.json())
  .then((json) => {
    json.forEach(element => {
      console.log(element)
    });
  });


fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Testing to post a title !!!",
    body: "Testing to post a message",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "Trying to update title",
    body: "Trying to update the message",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));