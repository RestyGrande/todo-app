let container = document.getElementById("container");

function countdown(init, final = 0, interval = 1) {
  let current = init;
  while (current > final) {
    container.innerHTML = current;
    current -= interval;
  }
}
console.log(countdown(10));
