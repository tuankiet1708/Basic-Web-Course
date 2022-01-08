document.getElementById("demo1").innerHTML = "Tài liệu học CSS";

var incrA = 1;
var incrB = 1;
document.getElementById("incrPrefix").innerHTML = ++incrA; // => 2
document.getElementById("incrPosfix").innerHTML = incrB++; // => 1

var decrA = 10;
var decrB = 10;
document.getElementById("decrPrefix").innerHTML = --decrA; // => 9
document.getElementById("decrPosfix").innerHTML = decrB--; // => 10


