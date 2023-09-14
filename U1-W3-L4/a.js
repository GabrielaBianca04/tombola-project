function extractButton()
{const number= (Math.floor(Math.random()*50))


nmb = document.getElementById(number)
nmb.style.backgroundColor="yellow"
nmb.style.color ="white"
nmb.style.fontWeight ="bold"
nmb.estratto=true
}

function extractClick(elemento)
{if (elemento===nmb.estratto){alert ("Numero già estratto")}
else{alert("Numero non ancora estratto")}}


