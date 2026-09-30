/* 
Javascript Asenkron Promise

Javascript Senkron çalışan Programlama Dili

*/

console.clear();

let check = true;

let promise1 = new Promise((resolve, reject) => {
    if(check){
        resolve("Promise Başarılı");
    } else {
        reject("Promise Başarısız");
    }
})

console.log(promise1);

let check1 = false;

function createPromise(){
    return new Promise((resolve, reject) => {
        if(check1){
            resolve("Promise Çalıştı");
        } else{
            reject("Promise Bozuk...");
        }
    })
}

createPromise()
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
})
.finally(() => console.log("Finally çalıştı.")); // Finally true yada false olsa bile çalışır.