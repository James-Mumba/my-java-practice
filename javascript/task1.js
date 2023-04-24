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
