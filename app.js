var container = document.getElementById("container");
function countdown(init, final, interval) {
    if (final === void 0) { final = 0; }
    if (interval === void 0) { interval = 1; }
    var current = init;
    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}
console.log(countdown(10));
