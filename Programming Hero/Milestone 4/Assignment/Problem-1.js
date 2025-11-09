function calculateTax(monthlyIncome, monthlyExpenses) {
    if (monthlyIncome < 0 || monthlyExpenses < 0) {
        return "invalid Input";
    }

    Diff = monthlyIncome - monthlyExpenses;
    tax = Diff * 0.20;

    return tax;
}

console.log(calculateTax(5000, 2000));