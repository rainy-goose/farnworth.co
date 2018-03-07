function toggleContact() {
  var x = document.getElementById("contactInfo");
  var isOpen = false;

  if (x.style.display === "block") {
    x.style.display = "none";
    isOpen = false;
  } else {
    x.style.display = "block";
    isOpen = true;
  }
}

function toggleWindow() {
    var x = document.getElementById("contactInfo");
    var y = document.getElementById("totalWindow");
    var isOpen = false;

    if (y.style.display === "block") {
      y.style.display = "none";
      x.style.display = "none";
    }
    else {
      y.style.display = "block";
    }

}
