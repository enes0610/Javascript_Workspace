// Javascript ES6 Destructing Function
console.clear();

let langs = ["HTML", "CSS", "JAVASCRİPT", "BOTSTRAP"];
let lang1, lang2, lang3, lang4;

lang1 = langs[0]
lang2 = langs[1]
lang3 = langs[2]
lang4 = langs[3]

console.log(lang1, lang2, lang3, lang4);

let person = {
    fname: "Enes",
    lname: "Oguz",
    age: 27
}

let {fname, lname, age} = person;
console.log(fname, lname,age);