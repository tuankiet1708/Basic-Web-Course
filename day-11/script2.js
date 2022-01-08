document.getElementById("demo2").innerHTML = "Tài liệu học MySQL";
document.getElementById("demo3").innerHTML = "Tài liệu học PHP";

// alert("Hello World");

// Comment
/* 
 Comment line 1
 Comment line 2
*/
var time = 0;
setInterval(function() {
    document.getElementById("time").innerHTML = time;
    time = time + 1;
}, 1000);


var hoVaTen; // camelCase
var ho_va_ten; // snake_case
var HoVaTen; // không nên dùng -> nên sử dụng cho Object, Class
var hovaten; // không nên dùng
