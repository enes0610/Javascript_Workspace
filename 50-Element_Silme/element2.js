// Dinamik Todo Silme

console.clear();
const todoListe = document.querySelector(".list-group");
const todols = document.querySelectorAll(".list-group-item");

todols[1].remove(); // index numarsını bulur ve siler.
console.log(todols);

// Sonuncu index'i siler.

todoListe.removeChild(todols[todols.length -1]);
todoListe.removeChild(todoListe.lastChild);