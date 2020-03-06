// function Check() {
//     let total = parseFloat(document.getElementById("total").value);
//     console.log(typeof total);
//     let rate = parseFloat(document.getElementById("rate").value);
//     document.getElementById("tip").innerHTML = "$" + total * rate / 100;
//     document.getElementById("tax").innerHTML = "$" + total * 5.50 / 100;
//     document.getElementById("grandtotal").innerHTML = "$" + (total + (total * rate / 100) + (total * 5.50 / 100));
//     return false;
// }
function weightConverter(In lbs) {
    document.getElementById("In Kgs").innerHTML = In lbs / 0.0022046;
}