document.addEventListener('DOMContentLoaded', function () {
    const inputForm = document.getElementById('inputForm');
    const counterForm = document.getElementById('counterForm');
    const startingAmountInput = document.getElementById('startingAmount');
    const rateInput = document.getElementById('rate');
    const submitButton = document.getElementById('submitButton');
    const counter = document.getElementById('counter');
    const counterValue = document.getElementById('counterValue');

    submitButton.addEventListener('click', function (e) {
        e.preventDefault();

        const startingAmount = parseFloat(startingAmountInput.value);
        const rate = parseFloat(rateInput.value);

        if (isNaN(startingAmount) || isNaN(rate)) {
            alert('Please enter valid numbers.');
            return;
        }

        inputForm.style.display = 'none';
        counter.style.display = 'block';

        let currentCounter = startingAmount;
        counterValue.textContent = Math.round(currentCounter); // Round to the nearest whole number

        // Calculate the time it takes to increase the counter by 1
        const timeToIncrementByOne = 60 / rate * 1000; // Convert rate to seconds, then to milliseconds

        const interval = setInterval(function () {
            currentCounter += 1;
            counterValue.textContent = Math.round(currentCounter); // Round to the nearest whole number
            
        }, timeToIncrementByOne);
    });
});
