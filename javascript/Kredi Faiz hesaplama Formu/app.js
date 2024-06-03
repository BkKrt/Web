function krediHesapla()
{
    var cekilecekTutar,vadeSayisi;
    var aylikTaksit,odenecekToplamTutar;

    cekilecekTutar = document.getElementById("txtkrediTutari").value;
    var liste = document.getElementById("listeVade");
    var selectedValue = liste.value; 

    var selectedValues = selectedValue.split('-'); 
    var vadeSayisi = parseInt(selectedValues[0]); 
    var katsayi = parseFloat(selectedValues[1]); 

    var odenecekToplamTutar = cekilecekTutar * katsayi; 
    var aylikTaksit = odenecekToplamTutar / vadeSayisi; 

    document.getElementById("sonuc").innerHTML ="Geri ödeme toplamı : "+ odenecekToplamTutar+"<br>"+"Aylık taksit tutarınız: "+  aylikTaksit;
}