var vmin, vmax, vh, vw;

function vminmax() {
  if (window.innerHeight > window.innerWidth) {
    vmax = window.innerHeight;
    vmin = window.innerWidth;
  } else {
    vmax = window.innerWidth;
    vmin = window.innerHeight;
  }

  vh = window.innerHeight;
  vw = window.innerWidth;
  // console.log(vmin);
  // console.log(vmax);
}

function resizeText() {
  let textElements = document.querySelectorAll(".resizable");
  // console.log(textElements);
  let buttonsWidth = vmin / 100 * 10;
  for (var i = 0; i < textElements.length; i++) {
    let element = textElements[i];
    let textWidth = element.clientWidth;
    let textCharacters = element.innerText.length;
    element.style.fontSize = textWidth / textCharacters + "px";
  }

  let textElementsIcons = document.querySelectorAll(".resizableIcons");
  // console.log(textElements);
  let buttonsWidthIcons = vmin / 100 * 10;
  for (var i = 0; i < textElementsIcons.length; i++) {
    let elementIcons = textElementsIcons[i];
    let textWidthIcons = elementIcons.clientWidth;
    let textCharactersIcons = elementIcons.innerText.length;
    elementIcons.style.fontSize = (textWidthIcons / textCharactersIcons) / 2 + "px";
  }
}

function numberPlace() {
  if (vh > vw) {
    $(".oppgave").addClass("height");
    $("oppgave").removeClass("width");
  } else {
    $(".oppgave").addClass("width");
    $(".oppgave").removeClass("height");

  }
}

$(window).resize(function () {
  vminmax();
  numberPlace();
  resizeText();
});

$(function () {
  vminmax();
  numberPlace();
  resizeText();
  if (localStorage.getItem("oppgaver") == true) {
    getLocalStorageSettings();
  }
});

$(".number").click(function () {
  if ($(this).attr("number") !== "0") {
    $(".numberInput").val($(".numberInput").val() + $(this).attr("number"));
  } else {
    if ($(".numberInput").val().length > 0) {
      $(".numberInput").val($(".numberInput").val() + $(this).attr("number"));
    }
  }
});

$(".back").click(function () {
  $(".numberInput").val($(".numberInput").val().slice(0, $(".numberInput").val().length - 1));
});

$(".hamburger").click(function () {
  $(".meny").toggleClass("visible");
});