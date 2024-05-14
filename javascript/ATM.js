let yeniSatir = "\r\n"
let bakiye = 1000

let metin = "1-Bakiye görüntüleme"+yeniSatir
+"2-Para Çekme"+yeniSatir
+"3-Para Yatırma"+yeniSatir
+"4-Çıkış"+yeniSatir
+"Lütfwn bir değer seçiniz"

let secim = prompt(metin)

switch(secim)
{
    case "1":
        alert("Bakiyeniz: "+bakiye)
        break

    case "2":
        let cekilecekTutar=Number(prompt("Çekmek istediğiniz tutarı giriniz"))
        if(cekilecekTutar<bakiye){

            bakiye = bakiye-cekilecekTutar
            alert("kalan bakiye: "+ bakiye)

        }else{
            alert("Bakiyenizden fazla para çekemezsiniz:"+yeniSatir
            +"bakiyeniz: "+bakiye + "  " + "Çekilecek tutar: "+ cekilecekTutar)
        }
        break

    case "3":
        let yatirilacakTutar = Number(prompt("Yatırılacak tutarı giriniz: "))
        bakiye = bakiye + yatirilacakTutar
        alert("Yeni bakiye: "+ bakiye)
        break
    
    case "4":
        console.log("Sistemden çıkış yapılmıştır.. ")
        break

    default:
        alert("Lütfen 1-4 arasında bir değer giriniz..")
        break


    }