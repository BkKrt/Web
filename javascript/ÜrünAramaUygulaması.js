let urun1 = {
    isim : "ACER Swift",
    kategori : "Teknoloji",
    fiyat : 6.219
}

let urun2 = {
    isim : "ACER Nitro 5",
    kategori : "Teknoloji",
    fiyat : 15.475
}

let urun3 = {
    isim : "ACER Gaming",
    kategori : "Teknoloji",
    fiyat : 13.999
}

let urun4 = {
    isim : "LENOVA V15",
    kategori : "Teknoloji",
    fiyat :10.999
}

let urun5 = {
    isim : "LENOVA V14",
    katagori : "Teknoloji",
    fiyat : 4.399
}

let urun6 = {
    isim : "LENOVA Ideapad",
    katagori : "Teknoloji",
    fiyat : 4.510
}

let urunler = [urun1,urun2,urun3,urun4,urun5,urun6]
let filtreliUrunler = []
let kullaniciUrunIsmi = prompt("Bir ürün ismi giriniz")

filtreliUrunleriDoldur(urunler)
filtreliUrunleriYazdır(filtreliUrunler)

function filtreliUrunleriDoldur(urunler){
    for(let i=0; i < urunler.length;i++){
        let urun = urunler[i]
        if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){
            filtreliUrunler.push(urun)
        }
    
    }
}

function filtreliUrunleriYazdır(urunler){
    for(let i=0; i < urunler.length; i++ ){
        let urun = urunler[i]
        
        document.write("<br><br>");
        document.write("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori)
       
    }
        
}