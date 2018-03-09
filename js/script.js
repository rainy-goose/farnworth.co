function toggleContact() {
  var x = document.getElementById("contactInfo");

  if (x.style.display === "block") {
    // if contact is open, hide contact
    x.style.display = "none";
  } else {
    // otherwise show contact
    x.style.display = "block";
  }
}

function toggleWindow() {
    var x = document.getElementById("contactInfo");
    var y = document.getElementById("totalWindow");

    if (y.style.display === "block") {
      // if window is open, hide window and contact
      y.style.display = "none";
      x.style.display = "none";
    }
    else {
      // otherwise show window
      y.style.display = "block";
    }

}

function toggle404() {
  var z = document.getElementById("404text");

  if (z.style.display === "block") {
    // if 404 is open, hide 404
    z.style.display = "none";
  } else {
    // otherwise show 404
    z.style.display = "block";
  }
}
