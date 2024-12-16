
// run on page load
document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("myText");
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      spelling()
      event.target.blur();
    }
  });
});

// functions to call
  function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
  }
  
  function spelling(){
    let textToSearch = document.getElementById("myText").value;
    if (textToSearch.includes("januari")) {document.getElementById("demo").innerHTML = "Maanden met de ie-klank op het einde schrijf je met een i.<br>De juiste spelling van deze maand is dus januari.";}
    else if (textToSearch.includes("februari")) {document.getElementById("demo").innerHTML = "Maanden met de ie-klank op het einde schrijf je met een i.<br>De juiste spelling van deze maand is dus februari.";}
    else if (textToSearch.includes("juni")) {document.getElementById("demo").innerHTML = "Maanden met de ie-klank op het einde schrijf je met een i.<br>De juiste spelling van deze maand is dus juni.";}
    else if (textToSearch.includes("juli")) {document.getElementById("demo").innerHTML = "Maanden met de ie-klank op het einde schrijf je met een i.<br>De juiste spelling van deze maand is dus juli.";}
    else {myFunction()};
  }

// next:
// change element naming to be correct
// search input textstring check
// search input autocomplete
// detect text string to run function
// puzzle string to start puzzle
// entrer code for next level (current level off)
// darker screen, inspect source code, other website info, calculation
