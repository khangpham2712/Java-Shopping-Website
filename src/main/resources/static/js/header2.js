const rightSearch = document.getElementById("right-search");
const sbr = document.querySelector("#sbr");
const sbri = document.querySelector("#sbri");
const rightSearchDot = document.querySelector(".right-search > .right-dot");
const rightSearchIcon = document.querySelector(".right-search-icon");
const closeSbr = document.querySelector(".close-sbr");

rightSearch.addEventListener("click", function () {
  sbr.style.visibility = "visible";
  sbr.style.opacity = "1";
  sbr.style.width = "250px";
  rightSearchIcon.style.color = "#9b3651";
  rightSearchDot.style.background = "#9b3651";
  rightSearchDot.style.border = "#9b3651 1px solid";
  rightSearch.style.border = "#9b3651 1px solid";
  rightSearch.style.zIndex = "886";
  //   sbr.style.animation = "sbrit 0.5s";
});
closeSbr.addEventListener("click", function () {
  sbr.style.visibility = "hidden";
  sbr.style.opacity = "0";
  sbr.style.width = "0";
  rightSearchIcon.style.color = "rgb(41, 41, 41)";
  rightSearchDot.style.background = "#fff";
  rightSearchDot.style.border = "rgb(188, 188, 188) 1px solid";
  rightSearch.style.border = "rgb(188, 188, 188) 1px solid";
  //   sbr.style.animation = "sbrit 0.5s";
});

var scrollTopBtn = $("#back-to-top");
scrollTopBtn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "2000");
  //   sbr.style.visibility = "hidden";
  //   sbr.style.opacity = "0";
});
