/* 
    İnput Events

    focus
    blur
    copy
    paste
    cut
    select
*/
console.clear();

let tod = document.querySelector("#todoName");

tod.addEventListener("focus", run);
tod.addEventListener("blur", run);
tod.addEventListener("copy", run);
tod.addEventListener("paste", run);
tod.addEventListener("cut", run);
tod.addEventListener("select", run);


function run(e){
    console.log(e.type);
}