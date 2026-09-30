/*
    Mantıksal Operatörler

    && Ve   = Şartlardan biri True biri False ise // ! GENEL SONUÇ FALSE olur.
    || Veya = Şartlardan biri True biri False ise // ? GENEL SONUÇ TRUE olur.
    ! Değil = Sonuç True ise ! Operatörü sonucu False yapar. Sonuç False ise ! Operatörü sonucu True yapar
*/

let yas = 19;
let ehliyet = false;
console.log(yas > 18 && ehliyet== true);    // ! GENEL SONUÇ FALSE olur.

console.log(5 > 3 || 2 < 3);    // ? GENEL SONUÇ TRUE olur.

console.log(5 > 1);
console.log(  ! (5 > 4)  );