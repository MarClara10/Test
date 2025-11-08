document.getElementById('calcBtn').addEventListener('click', () => {
  let wert = parseFloat(document.getElementById('input1').value);
  if (isNaN(wert)) {
    document.getElementById('result').innerText = "Bitte Zahl eingeben!";
    return;
  }
  let ergebnis = wert * 2; // Beispiel-Berechnung
  document.getElementById('result').innerText = "Ergebnis: " + ergebnis;
});
