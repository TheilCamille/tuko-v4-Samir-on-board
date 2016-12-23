function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}
var bool = true;

function tarif() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500 && bool == true) {
        animateValue("prix1", 100, 30, 2000);
        animateValue("prix2", 100, 27, 2000);
        animateValue("prix3", 100, 40, 2000);
        animateValue("prix4", 100, 36, 2000);
        animateValue("prix5", 100, 20, 2000);
        animateValue("prix6", 100, 17, 2000);

        bool = false;
    }}

window.onscroll = function() {tarif()};

