function toggleContact() {
    var x = document.getElementById("contactInfo");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function toggleWindow() {
    var x = document.getElementById("contactInfo");
    var y = document.getElementById("totalWindow");
    if (y.style.display == "block") {
        y.style.display = "none";
        x.style.display = "none";
    } else {
        y.style.display = "block";
    }
}
