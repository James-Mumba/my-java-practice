/*
TASK 2: CHECK AGE - DETERMINE INCOME

 0 - 17 => allowance
18 - 22 => stipend
23 - 65 => salary
above 65 => pension
*/

document.getElementById("income").onclick = function () {
  let age = document.getElementById("age").value;

  let determineIncome;
  determineIncome = "allowance";
  determineIncome = "stipend";
  determineIncome = "salary";
  determineIncome = "pension";

  let theAge = parseInt(age);

  if ((theAge >= 0) & (theAge <= 17)) {
    console.log("allowance");
    document.getElementById("determineIncome").innerText = "allowance";
  }
  if ((theAge >= 18) & (theAge <= 22)) {
    document.getElementById("determineIncome").innerText = "stipend";
  }
  if ((theAge >= 23) & (theAge <= 65)) {
    document.getElementById("determineIncome").innerText = "salary";
  }
  if (theAge >= 66) {
    document.getElementById("determineIncome").innerText = "pension";
  }
};

/*
if promocode = KARIBU ; then discount = 25%
applicable to purchases of 20,000+
  for purchases 50,000+ additional discount = 2%
  for purchases 100,000+ additional discount = 5%
promocode = Nairobi then discount = 15%
applicable 10,000+
*/

document.getElementById("generate").onclick = function () {
  let promocode = document.getElementById("promocode").value;
  let amount = document.getElementById("amount").value;
  let promocodek = "KARIBU";
  let promocodeN = "NAIROBI";

  if (promocode == promocodek) {
    if (amount >= 20000) {
      calcDiscount = (25 / 100) * amount;
      document.getElementById("discount").innerText = calcDiscount;
    } else if (amount >= 50000) {
      calcDiscount = (27 / 100) * amount;
    } else if (amount >= 100000) {
      calcDiscount = (27 / 100) * amount;
    }
  }
  if (promocode == promocodeN) {
    if (amount >= 10000) {
      calcDiscount = (15 / 100) * amount;
      document.getElementById("discount").innerText = calcDiscount;
    }
  }
};

/* 
using only two variables, salary & expense, create a budget calculator
that displays on the HTML window by the click of a button:
1. Heading
2. Takes salary as input
3. Displays in two seperate columns; the Expense and Remaining Salary after expense
*/
document.getElementById("calculate").onclick = function () {
  let salary = document.getElementById("salary").value;
  let expense = document.getElementById("expense").value;
  let salarybalance = salary - expense;
  document.getElementById("expense").innerText = expense;

};
