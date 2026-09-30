/*
    Değişkenler

     Var
     Let
     Const

    var = Function Scope'dur.
    let / const Block Scope'dur.
*/


function selam() {
    var selam = "Herkese Merhaba";  // Function Scope
    console.log(selam);
}

selam();

function merhaba() {
    let merhaba = "Herkese Selam"; // Block Scope
    const b = 50;
    console.log(b);
}

merhaba();