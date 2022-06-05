var celcius = document.getElementById("celsius");
var fahrenheit = document.getElementById("fahrenheit");

celcius.addEventListener('input', function() {
    let cel = this.value;
    let fah = (cel * 9 / 5) + 32; //applying formula
    if (!Number.isInteger(fah)) {
        fah = fah.toFixed(4);
    }
    fahrenheit.value = fah;
});

fahrenheit.addEventListener('input', function() {
    let fah = this.value;
    let cel = (fah - 32) * 5 / 9; //Formula
    if (!Number.isInteger(cel)) {
        cel = cel.toFixed(4);
    }
    celcius.value = cel;
});