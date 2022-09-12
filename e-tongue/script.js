function myAsinFunction() {
  // Get the value of the input field with id="numb"
    let x = document.getElementById("cawan").value;
  // If x is Not a Number or less than one or greater than 10
    let total;
    let TDAB;
    let hexadecanol;
    if (isNaN(x) || x < 1) {
        document.getElementById("alert-asin1").innerHTML = "Input not valid";
        document.getElementById("alert-asin2").innerHTML = "Please input valid data";
    } else {
    total = 93 * x;
    TDAB = (total/715) * 400;
    hexadecanol = (total/715) * 315;
    document.getElementById("alert-asin1").innerHTML = "Kamu perlu TDAB : " + TDAB + " mg";
    document.getElementById("alert-asin2").innerHTML = "Kamu perlu Hexadecanol : " + hexadecanol + " mg";
    }
}