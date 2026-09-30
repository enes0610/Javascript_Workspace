/* 
Javascript Asenkron Ajax & XMLHttpRequest

Javascript Senkron çalışan Programlama Dili

Bir fonksiyona parametre vermek
*/

console.clear();

const xhr = new XMLHttpRequest();
console.log(xhr);

function prepareURL(url, id){
    if(id === null){
        return url;
    }

    return ` ${url} ? postId = ${id} `
}

function getComments(url, id){
    let newURL = prepareURL(url, id);
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () =>{
        if(xhr.readyState ===4 && xhr.status === 200){
            console.log(xhr.responseText);
            console.log(JSON.parse(xhr.responseText));
        }
    })

    xhr.open("GET", newURL)
    xhr.send();
}

function getData(url){
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () =>{
        if(xhr.readyState ===4 && xhr.status === 200){
            console.log(JSON.parse(xhr.response));
        }
    })

    xhr.open("GET", url);
    xhr.send();
}

getComments("https://jsonplaceholder.typicode.com/comments", null);
getData("https://jsonplaceholder.typicode.com/users");