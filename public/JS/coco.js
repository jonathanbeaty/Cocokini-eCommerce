// var imageSize = document.getElementById("img").width;
// var zoomFunction = function () {
//   if (imageSize >= 900) {
//     document.images.style.zoom = '125%';
//   }
// }
// zoomFunction();

// dropdown buttons - header

function myFunction(id) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (dropdowns[i] != document.getElementById(id)) {
      openDropdown.classList.remove('show');
    }
  }
  document.getElementById(id).classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('#buttons')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// slides background pics
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 8000);
}

showSlides();

$(document).ready(function () {
  var feed = new Instafeed({
    clientId: '	b0e3a9fc0441414b872d5d5ca4968e7c',
    accessToken: '1762045494.1677ed0.f40a154d7d59400288110c16d672cd65',
    get: 'user',
    userId: 1762045494,
    target: 'instafeed',
    limit: 9,
    sortBy: 'most-recent',
    resolution: 'standard_resolution',
    template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>'
  });
  feed.run();
});