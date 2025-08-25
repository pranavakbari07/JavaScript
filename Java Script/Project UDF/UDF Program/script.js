let salary = Number(prompt("Enter your salary : "));
let rent = Number(prompt("Enter your rent : "));
let foodExpense = Number(prompt("Enter your food expense : "));
let otherExpense = Number(prompt("Enter your other expense : "));
let extraIncome = Number(prompt("Enter your extra income : "));


let totalExpense = rent + foodExpense + otherExpense;

let netSalary = salary - totalExpense + extraIncome;


function claculateIncome(){
    document.getElementById("salary").innerText = `Salary is : ${salary}`;
    document.getElementById("rent").innerText = `Rent is : ${rent}`;
    document.getElementById("foodExpense").innerText = `Food Expense is : ${foodExpense}`;
    document.getElementById("otherExpense").innerText = `Other Expense is : ${otherExpense}`;
    document.getElementById("extraIncome").innerText = `Extra Income is : ${extraIncome}`;
    document.getElementById("netSalary").innerText = `Net Salary Is : ${netSalary}`;
}

claculateIncome();


