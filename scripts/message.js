const popup = document.getElementById("message");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("submit");



form.onclick = function() {
  popup.style.display = "block";
};
span.onclick = function() {
    popup.style.display = "none";
  };
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};
