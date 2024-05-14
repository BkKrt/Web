yeniSatir = "\r\n"
let metin = "1-Pazartesi"+yeniSatir
+"2-Salı"+yeniSatir
+"3-Çarşamba"+yeniSatir
+"4-Perşembe"+yeniSatir
+"5-Cuma"+yeniSatir
+"6-Cumartesi"+yeniSatir
+"7-Pazar"+yeniSatir
+"Lütfen bir değer seçiniz"

let deger = prompt(metin)
switch(deger)
{
    case "1":
        alert("Pazartesi günü")
    break

    case "2":
        alert("Salı günü")
    break

    case "3":
        alert("Çarşamba günü")
    break

    case "4":
        alert("Perşem günü ")
    break

    case "5":
        alert("Cuma günü")
    break

    case "6":
        alert("Cumartesi günü")
    break

    case "7":
        alert("Pazar günü")
    break
    
}