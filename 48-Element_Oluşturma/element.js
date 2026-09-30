// Dinamik Element Oluşturma

let cardBody = document.querySelectorAll(".card-body")[1];

console.clear();
console.log(cardBody);

let link = document.createElement("a");
link.id = "translateWebsite";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "https://translate.google.com/?sl=auto&tl=tr&op=translate";
link.target = "_blank";
link.innerHTML = "Google Translate";

cardBody.appendChild(link);

console.log(link);