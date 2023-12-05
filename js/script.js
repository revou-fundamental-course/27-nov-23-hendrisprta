//JAVASCRIPT RESET FORM
function resetFormLuas(){
    document.getElementById("inputAlas").value="";
    document.getElementById("inputTinggi").value="";
    document.getElementById("resultLuas").textContent="";
}

function resetFormKeliling(){
    document.getElementById("inputSisi1").value="";
    document.getElementById("inputSisi2").value="";
    document.getElementById("inputSisi3").value="";
    document.getElementById("resultKeliling").textContent="";
}
//JAVASCRIPT KALKULATOR KELILING SEGITIGA
function kalkulatorKeliling(){
    var inputSisi1 = parseFloat(document.getElementById("inputSisi1").value);
    var inputSisi2 = parseFloat(document.getElementById("inputSisi2").value);
    var inputSisi3 = parseFloat(document.getElementById("inputSisi3").value);

    var keliling = inputSisi1 + inputSisi2 + inputSisi3;
    document.getElementById("resultKeliling").textContent="Keliling Segitiga adalah : "+ keliling;
}
//JAVASCRIPT LUAS SEGITIGA
function kalkulatorLuas(){
    var inputAlas = parseFloat(document.getElementById("inputAlas").value);
    var inputTinggi = parseFloat(document.getElementById("inputTinggi").value);

    var luas = 1/2 * (inputAlas * inputTinggi);
    document.getElementById("resultLuas").textContent="Luas Segitiga adalah : "+ luas;
}