// Baut aus dem Formular eine E-Mail. Keine Daten werden an einen Server gesendet.
var EMPFAENGER = "kontakt@roksit.de";

document.getElementById("terminForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var f = e.target;
  var betreff = "Terminanfrage: " + f.leistung.value + " (" + f.name.value + ")";
  var text =
    "Name: " + f.name.value + "\n" +
    "E-Mail: " + f.email.value + "\n" +
    "Telefon: " + f.telefon.value + "\n" +
    "Anliegen: " + f.leistung.value + "\n" +
    "Wunschtermin: " + f.wunschtermin.value + "\n\n" +
    f.nachricht.value;
  window.location.href = "mailto:" + EMPFAENGER +
    "?subject=" + encodeURIComponent(betreff) +
    "&body=" + encodeURIComponent(text);
});
