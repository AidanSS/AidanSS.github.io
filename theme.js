
let theme = document.getElementById("base");
var checkbox = document.querySelector("#checkbox");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    theme.setAttribute("data-theme", "lofi")
  } else {
    theme.setAttribute("data-theme", "dark")
  }
});