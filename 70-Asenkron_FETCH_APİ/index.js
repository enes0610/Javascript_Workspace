// Javascript Asenkron Fetch Api

console.clear();

function getStudent(url) {
    fetch(url)
    .then((response) => {
        return response.json();
    })

    .then((data) => console.log(data));
    (err) => console.log(err);
}

getStudent("student.json"); 

console.log("| ------ |");

function getData(url) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}

getData("https://jsonplaceholder.typicode.com/users")


function getData1(url) {
    return fetch(url)
}

getData1("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((err) => console.log(err))