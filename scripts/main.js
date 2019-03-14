//function for js clock
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    // Adds leading zero 0
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    // shows clock
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;

    setTimeout(startTime, 500);
}
//Background color changing gradually over current time
var now = new Date(),
    hour = now.getHours(),
    color = "#000";

if (hour >= 6 && hour < 12) {
    color = "#e09572";
} else if (hour >= 12 && hour < 18) {
    color = "#e0bfb0";
} else if (hour >= 18) {
    color = "#94624b";
}
TweenMax.to("html", 2, {
    backgroundColor: color
});

startTime();
