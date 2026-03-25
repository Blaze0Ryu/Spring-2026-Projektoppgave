/*Alert pop up box*/
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
}
