let body = document.querySelector("body");
let dark = document.getElementById("dark");
let light = document.getElementById("light");

dark.addEventListener("click", function () {
  body.style.background = "black";
  body.style.color = "white";
  dark.style.display = "none";
  light.style.display = "block";
  light.style.color = "white";
});

light.addEventListener("click", function () {
  body.style.background = "white";
  body.style.color = "black";
  dark.style.display = "block";
  light.style.display = "none";
});
