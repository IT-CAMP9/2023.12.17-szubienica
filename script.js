var haslo = "it camp jest fajny";
haslo = haslo.toUpperCase();

var ukryte_haslo = "";

for(var i = 0; i < haslo.length; i++) {
    if(haslo.charAt(i) == " ") {
        ukryte_haslo = ukryte_haslo + " ";
    } else {
        ukryte_haslo = ukryte_haslo + "-";
    }
}

var litery = new Array(32);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "R";
litery[23] = "S";
litery[24] = "Ś";
litery[25] = "T";
litery[26] = "U";
litery[27] = "W";
litery[28] = "Y";
litery[29] = "Z";
litery[30] = "Ź";
litery[31] = "Ż";

window.onload = set_password;

function set_password() {
    document.getElementById("haslo").innerHTML = ukryte_haslo;
}

var html = "";
for(var i = 0; i < 32; i++) {
    html = html + "<div>A</div>"
}
document.getElementById("litery").innerHTML = html;