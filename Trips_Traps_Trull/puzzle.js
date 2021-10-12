var kellekord="pildit/pilt.png";
var lopp=false;
function klik(pilt) {
    pilt.src = kellekord;
}
function klikValik(pilt){
    kellekord=pilt.src;
    document.getElementById("pilt19").src=kellekord;
}
