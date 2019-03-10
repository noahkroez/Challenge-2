TweenMax.from("#txt", 5.5, {
    opacity: 10,
    scale: 10,
    ease: Bounce.easeOut
});

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    //animate letters
    animateLetters(h, s);

    // animate background
    animateBackground(h);

    // Laat tekst zien (klok)

    // Voegt een 0 voor cijfers kleiner dan 10
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;

    var t = setTimeout(startTime, 500);

}

function animateLetters(hours, minutes) {

    if (hours == 00 && hours == 01 && hours == 02 && hours == 03 && hours == 04 && hours == 05 && hours == 06 && hours == 07 && hours == 08 && hours == 09 && hours == 10 && hours == 11 && hours == 12 && hours == 13 && hours == 14 && hours == 15 && hours == 16 && hours == 17 && hours == 18 && hours == 19 && hours == 20 && hours == 21 && hours == 22 && hours == 23 && hours == 24 && minutes % 60 == 0) {

    }

}

function animateBackground(hours) {

    if (hours == 12) {

    }
}
