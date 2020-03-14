// function Check() {
//     let total = parseFloat(document.getElementById("total").value);
//     console.log(typeof total);
//     let rate = parseFloat(document.getElementById("rate").value);
//     document.getElementById("tip").innerHTML = "$" + total * rate / 100;
//     document.getElementById("tax").innerHTML = "$" + total * 5.50 / 100;
//     document.getElementById("grandtotal").innerHTML = "$" + (total + (total * rate / 100) + (total * 5.50 / 100));
//     return false;
// }
function weightConverter() {
    const x = document.getElementById('lb').value;
    const s = convert(x);
    document.getElementById("kg").value = s;
}

const convert = (x) => { return x / 2.2046 }