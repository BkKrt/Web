let dizel =24.53 , benzin = 22.25 , lpg = 11.1;
const yeniSatir = "\r\n";

const yakitMetni = "1-Dizel"+yeniSatir
+"2-Benzin"+yeniSatir
+"3-LPG"+yeniSatir
+"yakıt türünüzü seçiniz"

let yakitTipi = prompt(yakitMetni);

if(yakitTipi=="1" || yakitTipi=="2" || yakitTipi=="3"){
    
    let yakitLitresi = Number(prompt("yakıt litresini giriniz:"));
    let bakiye = Number(prompt("Bakiyenizi giriniz:"));

    if(yakitTipi == "1"){

        let odenecekTutar = dizel*yakitLitresi;

        if(odenecekTutar<bakiye){
            bakiye = bakiye - odenecekTutar;
            alert("Yakıt alma işlemi başarılı"+yeniSatir
            +"kalan bakiye: " + bakiye);
        }else{
            alert("bakiyeniz yeterli değildir"+yeniSatir
            +"ödenecek tutar : " + odenecekTutar +yeniSatir
            +"Bakiye : " + bakiye+yeniSatir
            +"Eksik tutar : " + (odenecekTutar-bakiye));
        }

    }else if(yakitTipi == "2"){
        let odenecekTutar = benzin*yakitLitresi

        if(odenecekTutar<bakiye){
            bakiye = bakiye - odenecekTutar;
            alert("Yakıt alma işlemi başarılı"+yeniSatir
            +"kalan bakiye: " + bakiye);
        }else{
            alert("bakiyeniz yeterli değildir"+yeniSatir
            +"ödenecek tutar : " + odenecekTutar +yeniSatir
            +"Bakiye : " + bakiye+yeniSatir
            +"Eksik tutar : " + (odenecekTutar-bakiye));
        }

    }else if (yakitTipi == "3"){
        let odenecekTutar = lpg*yakitLitresi

        if(odenecekTutar<bakiye){
            bakiye = bakiye - odenecekTutar;
            alert("Yakıt alma işlemi başarılı"+yeniSatir
            +"kalan bakiye: " + bakiye);
        }else{
            alert("bakiyeniz yeterli değildir"+yeniSatir
            +"ödenecek tutar : " + odenecekTutar +yeniSatir
            +"Bakiye : " + bakiye+yeniSatir
            +"Eksik tutar : " + (odenecekTutar-bakiye));
        }


    }

}
else{
    
    alert("Lütfen geçerli bir yakıt türü seçiniz")
}


