var sec = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");

setInterval(function () {sec.style.transform += "rotate(5.9deg)";
}, 1000);

setInterval(function () {minute.style.transform += "rotate(5.5deg)";
}, 60000);

setInterval(function () {hour.style.transform += "rotate(5.5deg)";
}, 600000);
