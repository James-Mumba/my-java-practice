function addition() {
    let num1 = 20;
    let num2 = 30;

    let sum = num1 + num2

    console.log(sum)
}
// to display the above, one needs to call it with the command below
addition(); /*this here is the call command*/

function product(a, b) {
    return a * b;
}
product(10, 50)

document.getElementById('calculate').onclick = function () {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    let product = num1*num2
    document.getElementById('output').innerHTML = 'The product is:'+product
}