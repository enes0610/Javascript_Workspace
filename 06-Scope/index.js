/*
    Global Scope
    Function Scope
    Block Scope  
*/

// Global Scope Kullanımı

var a = 5;

if(true) {}

function method1() {
    console.log("Değer: " + a);
}

method1();

// Function Scope Kullanımı

function method2() {
    var sayi = 10;
    console.log("Sayı: " + sayi);
}

method2();

// Block Scope Kullanımı

function method3() {
    if(true) {
        var c = 100;
        console.log(c);
    }
}

method3();