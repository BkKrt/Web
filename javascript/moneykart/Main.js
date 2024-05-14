
let mesaj =
`
Migros'a Hoşgeldiniz.
Money Kartınız varmı ? 
1-Evet
2-Hayır
`

const urunler = [
    {
        urunIsmi : "süt",
        fiyat : 15
    },
    {   
        urunIsmi : "kuşbaşı",
        fiyat : 220

    },
    {
        urunIsmi : " Bebek Bezi",
        fiyat : 100
    }
]

let sonuc = confirm(mesaj)
let odenecekTutar

if(sonuc){

    let isim = prompt("Adınızı Giriniz :")
    let soyisim = prompt("Soyisminizi Giriniz :")

    const musteri = new Musteri(isim,soyisim,sonuc,urunler)
     odenecekTutar = musteri.hesapla()

    alert(
        `Müşteri Bilgileri : ${isim} ${soyisim}
        Ödenecek Tutar : ${odenecekTutar}
        `)

}else{
    const musteri = new Musteri(null,null,sonuc,urunler)
    odenecekTutar = musteri.hesapla()
    alert(`Ödencek Tutar : ${odenecekTutar}`)


}


