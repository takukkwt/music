function updateText() {
  var inputText = document.getElementById("inputField").value;
  var selectedFont = document.getElementById("fontSelect").value;
  var selectedFontSize = document.getElementById("fontSizeSelect").value;

  document.getElementById("output").innerHTML = inputText;
  document.getElementById("output").style.fontFamily = selectedFont;
  document.getElementById("output").style.fontSize = selectedFontSize;
}
