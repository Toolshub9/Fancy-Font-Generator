function calculate() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const years = parseInt(document.getElementById('years').value);
    const paymentType = document.getElementById('paymentType').value;

    let result = '';

    switch (paymentType) {
        case 'loan':
            const totalInterest = loanAmount * interestRate * years; // Simple interest
            result = `Total Interest: ₹${totalInterest.toFixed(2)}`;
            break;
        case 'mortgage':
            const monthlyRate = interestRate / 12;
            const numberOfPayments = years * 12;
            const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
            result = `Monthly Mortgage Payment: ₹${monthlyPayment.toFixed(2)}`;
            break;
        case 'annuity':
            const annuityPayment = loanAmount * interestRate / (1 - Math.pow(1 + interestRate, -years));
            result = `Annuity Payment: ₹${annuityPayment.toFixed(2)}`;
            break;
        case 'futureValue':
            const futureValue = loanAmount * Math.pow(1 + interestRate, years);
            result = `Future Value: ₹${futureValue.toFixed(2)}`;
            break;
        case 'npv':
            const cashFlows = prompt("Enter cash flows separated by commas:").split(',').map(Number);
            const npv = cashFlows.reduce((acc, cashFlow, index) => acc + cashFlow / Math.pow(1 + interestRate, index), -loanAmount);
            result = `Net Present Value (NPV): ₹${npv.toFixed(2)}`;
            break;
        case 'irr':
            const irrCashFlows = prompt("Enter cash flows separated by commas:").split(',').map(Number);
            const irr = calculateIRR(irrCashFlows);
            result = `Internal Rate of Return (IRR): ${irr.toFixed(2)}%`;
            break;
    }

    document.getElementById('result').innerText = result;
    playSound();
}

function calculateIRR(cashFlows) {
    const iterations = 1000;
    let lowerBound = 0;
    let upperBound = 1;

    for (let i = 0; i < iterations; i++) {
        const guess = (lowerBound + upperBound) / 2;
        const npv = cashFlows.reduce((acc, cashFlow, index) => acc + cashFlow / Math.pow(1 + guess, index), 0);

        if (npv > 0) {
            lowerBound = guess; // Increase the lower bound
        } else {
            upperBound = guess; // Decrease the upper bound
        }
    }

    return (lowerBound + upperBound) / 2 * 100; // Return percentage
}

// Function to play sound
function playSound() {
    const sound = document.getElementById("buttonSound");
    sound.currentTime = 0; // Reset the sound to play from the start
    sound.play();
}
