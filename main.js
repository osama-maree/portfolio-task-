let navList = document.getElementById("navList"),
  toggleButton = document.getElementById("toggleButton"),
  toggle = document.getElementsByClassName("toggle");
blur = document.getElementById("blur");
toggleButton.onclick = function () {
  navList.classList.toggle("showList");
  toggleButton.classList.toggle("active");
  blur.classList.toggle("blur");
};
toggle[0].onclick = function () {
  navList.classList.toggle("showList");
  toggleButton.classList.toggle("active");
  blur.classList.remove("blur");
};
toggle[1].onclick = function () {
  navList.classList.toggle("showList");
  toggleButton.classList.toggle("active");
  blur.classList.remove("blur");
};
toggle[2].onclick = function () {
  navList.classList.toggle("showList");
  toggleButton.classList.toggle("active");
  blur.classList.remove("blur");
};
toggle[3].onclick = function () {
  navList.classList.toggle("showList");
  toggleButton.classList.toggle("active");
  blur.classList.remove("blur");
};
toggle[4].onclick = function () {
  navList.classList.toggle("showList");
  toggleButton.classList.toggle("active");
  blur.classList.remove("blur");
};
