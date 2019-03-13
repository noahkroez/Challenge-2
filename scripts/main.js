function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();



    // Voegt een 0 voor cijfers kleiner dan 10
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    // Laat tekst zien (klok)
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;

    var t = setTimeout(startTime, 500);

}

if (timeTween.progress() >= 0 && timeTween.progress() < 0.25) {
    TweenMax.to('html', 2, {
        backgroundColor: '#000000'
    });
}
if (timeTween.progress() >= 0.25 && timeTween.progress() < 0.5) {
    TweenMax.to('html', 2, {
        backgroundColor: '#e09572'
    });
}
if (timeTween.progress() >= 0.5 && timeTween.progress() < 0.75) {
    TweenMax.to('html', 2, {
        backgroundColor: '#e0bfb0'
    });
}
if (timeTween.progress() >= 0.75 && timeTween.progress() < 1) {
    TweenMax.to('html', 2, {
        backgroundColor: '#94624b'
    });
}
