/* ITS121-1L - Estudillo
   gallery.js - Accessible Interactive Photo Gallery */

// Runs on mouseover and focus: show the image and its alt text in the large box.
function upDate(previewPic) {
  console.log("upDate called for: " + previewPic.alt);
  var display = document.getElementById("image");
  display.style.backgroundImage = "url('" + previewPic.src + "')";
  display.innerHTML = previewPic.alt;
}

// Runs on mouseleave and blur: restore the original (hardcoded) text and empty background.
function unDo() {
  console.log("unDo called");
  var display = document.getElementById("image");
  display.style.backgroundImage = "url('')";
  display.innerHTML = "Hover over an image below to display here.";
}

// Runs on page load: add a tabindex to every thumbnail so the keyboard can reach them.
function addTabFocus() {
  console.log("Page loaded - addTabFocus() is running");
  var images = document.getElementsByClassName("preview");
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("tabindex added to image " + (i + 1));
  }
}
