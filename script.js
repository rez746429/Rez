<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yıl Sonu Ortalama Hesaplama</title>
</head>
<body>
    <h1>Yıl Sonu Ortalama Hesaplama</h1>
    <form id="notForm">
        <label for="komite1">Komite 1:</label>
        <input type="number" id="komite1" name="komite1" required><br>
        
        <label for="komite2">Komite 2:</label>
        <input type="number" id="komite2" name="komite2" required><br>
        
        <label for="komite3">Komite 3:</label>
        <input type="number" id="komite3" name="komite3" required><br>
        
        <label for="komite4">Komite 4:</label>
        <input type="number" id="komite4" name="komite4" required><br>
        
        <label for="komite5">Komite 5:</label>
        <input type="number" id="komite5" name="komite5" required><br>
        
        <label for="komite6">Komite 6:</label>
        <input type="number" id="komite6" name="komite6" required><br>
        
        <label for="final1">Final 1:</label>
        <input type="number" id="final1" name="final1" required><br>
        
        <label for="final2">Final 2:</label>
        <input type="number" id="final2" name="final2" required><br>
        
        <button type="button" onclick="hesapla()">Hesapla</button>
    </form>
    <p id="sonuc"></p>

    <script src="script.js"></script>
</body>
</html><script>function hesapla() {
    const komite1 = parseFloat(document.getElementById('komite1').value);
    const komite2 = parseFloat(document.getElementById('komite2').value);
    const komite3 = parseFloat(document.getElementById('komite3').value);
    const komite4 = parseFloat(document.getElementById('komite4').value);
    const komite5 = parseFloat(document.getElementById('komite5').value);
    const komite6 = parseFloat(document.getElementById('komite6').value);
    const final1 = parseFloat(document.getElementById('final1').value);
    const final2 = parseFloat(document.getElementById('final2').value);

    const krediler = {
        komite1: 8,
        komite2: 13,
        komite3: 8,
        komite4: 10,
        komite5: 11,
        komite6: 6,
        final1: 29,
        final2: 27,
        ihu: 4
    };

    const ihuNotu = 100;

    const komiteToplamKredi = krediler.komite1 + krediler.komite2 + krediler.komite3 + krediler.komite4 + krediler.komite5 + krediler.komite6 + krediler.ihu;
    const finalToplamKredi = krediler.final1 + krediler.final2;

    const komiteOrtalama = (
        (komite1 * krediler.komite1) +
        (komite2 * krediler.komite2) +
        (komite3 * krediler.komite3) +
        (komite4 * krediler.komite4) +
        (komite5 * krediler.komite5) +
        (komite6 * krediler.komite6) +
        (ihuNotu * krediler.ihu)
    ) / komiteToplamKredi;

    const finalOrtalama = (
        (final1 * krediler.final1) +
        (final2 * krediler.final2)
    ) / finalToplamKredi;

    const yilSonuOrtalamasi = (komiteOrtalama * 0.6) + (finalOrtalama * 0.4);

    document.getElementById('sonuc').innerText = `Yıl Sonu Ortalamanız: ${yilSonuOrtalamasi.toFixed(2)}`;
}</script>