/*Alert pop up box
function myFunction() {
  var txt;
  if (
    confirm("This is still in testing. Thank you for trying out our features.")
  ) {
    txt = "You have pressed ok.";
  } else {
    txt = "You have pressed cancel.";
  }
  document.getElementById("demo").innerHTML = txt;
}*/

/**/
/**/
/*Collabsible containers ffrom the KKantine.js & PrototypeHjemside_Game.js*/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++)
  coll[1].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSiblings;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
