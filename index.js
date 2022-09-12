for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonhtml = this.innerHTML;
    makesound(buttonhtml);
    animation(buttonhtml);
  });
}
document.addEventListener("keypress", function (event) {
  makesound(event.key);
  animation(event.key);
});
function makesound(key) {
  switch (key) {
    case "w":
      var w = new Audio("sounds/tom-1.mp3");
      w.play();
      break;
    case "w":
      var w = new Audio("sounds/tom-1.mp3");
      w.play();
      break;
    case "a":
      var w = new Audio("sounds/tom-2.mp3");
      w.play();
      break;
    case "s":
      var w = new Audio("sounds/tom-3.mp3");
      w.play();
      break;
    case "d":
      var w = new Audio("sounds/tom-4.mp3");
      w.play();
      break;
    case "j":
      var w = new Audio("sounds/snare.mp3");
      w.play();
      break;
    case "k":
      var w = new Audio("sounds/kick-bass.mp3");
      w.play();
      break;
    case "l":
      var w = new Audio("sounds/crash.mp3");
      w.play();
      break;
    default:
      break;
  }
}
function animation(key) {
  var ani = document.querySelector("." + key);
  ani.classList.add("pressed");
  setTimeout(function () {
    ani.classList.remove("pressed");
  }, 100);
}
