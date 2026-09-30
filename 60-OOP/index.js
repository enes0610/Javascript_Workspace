// Javascript ES6 OOP
console.clear();

class Insan {
    constructor(isim,soyisim,yas,maas){
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }

    bilgiGöster(){
        console.log(` 
                        İsim: ${this.isim}
                        Soyisim: ${this.soyisim}
                        Yaş: ${this.yas}
                        Maaş: ${this.maas}`
                    )
    }   
}

let insan = new Insan("Enes", "Oğuz", 23, 1000);
let insan0 = new Insan("Ayşe", "Kaya", 25, 2000);
insan.bilgiGöster();
insan0.bilgiGöster();