var kellekord="pildit/krest.png";
var lopp=false;
function klik(pilt) {
    pilt.src = kellekord;

    if (vyidukontroll()) {
        alert("Sa võtsid!");
        lopp = true;
    }

    /*if(kellekord=="pildit/krest.png"){
        kellekord="pildit/krug.png";
    } else {
        kellekord="pildit/krest.png";
    }*/
    if (ruududKasutatud()) {
        lopp = true;
        alert("Mäng on läbi!");
    }
}
function klikValik(pilt){
        kellekord=pilt.src;
        document.getElementById("pilt12").src=kellekord;
}
//Проверяет все картинки и возвращает false
// если найдет пустую картинку

function ruududKasutatud(){
    pildit=document.images;
    for(var i=0; i<pildit.length; i++){
        if(pildit[i].src.split("/").pop()=="pilt.png"){
            return false;
            //split("/") - делает массив из пути к файлу.
            //pop() - выбирает из массива последнее значение.
        }
    }
    return true;
}
//Определяем имя файла
function sisu(nr){
    var fnimi=document.getElementById("pilt"+nr).src;
    fnimi=fnimi.split("/").pop();
    return fnimi;
}
function kontrollsisu(a,b,c, sisulopp){
    //a,b,c - номера картинок и sisulopp - адрес  нужной картинки
    if(sisu(a)==sisulopp.split("/").pop() && sisu(b)==sisulopp.split("/").pop() && sisu(c)==sisulopp.split("/").pop() )
    {return true;}else {return false;}

}
function vyidukontroll() {
    if (kontrollsisu(1,2,3, kellekord)) {return true;}
    if (kontrollsisu(4,5,6, kellekord)) {return true;}
    if (kontrollsisu(7,8,9, kellekord)) {return true;}
    if (kontrollsisu(1,4,7, kellekord)) {return true;}
    if (kontrollsisu(2,5,8, kellekord)) {return true;}
    if (kontrollsisu(4,6,9, kellekord)) {return true;}
    if (kontrollsisu(1,5,6, kellekord)) {return true;}
    if (kontrollsisu(3,5,7, kellekord)) {return true;}
    return false;

}