/*
    Floor
    Ceil
    Round

    Max
    Min

    Random  --> 0 ve 1 arasında bir değer verir
    Abs     --> Mutlak Değer
    Sqrt    --> Karekök
    Pow     --> Sayının üssünü alır
*/

console.log(window);

let a = 3.33;
console.log(Math.floor(a)); // Noktadan sonrasını yazdırmaz.

console.log("-----");

let b = 3.11;
console.log(Math.ceil(b));  // Sayıyı en yakın bir sonraki sayıya yuvarlar.

console.log("-----");

let c = 1.44;
console.log(Math.round(c));  // Sayıyı en yakın bir önceki sayıya yuvarlar.

console.log("-----");

console.log(Math.max(1,3,9));

console.log("-----");

console.log(Math.min(2,4,8));

console.log("-----");
console.log(Math.random());
console.log("-----");

let d = -15;
console.log(Math.abs(d));

console.log("-----");

console.log(Math.sqrt(4));

console.log("-----");

console.log(Math.pow(2,3));

console.log("-----");