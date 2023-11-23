function convert() {
    // Get user input
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Check for valid input
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid positive number for the amount.');
        return;
    }

    // Call an API to get real-time exchange rates
    const apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[toCurrency];
            if (exchangeRate) {
                const convertedAmount = (amount * exchangeRate).toFixed(3);
                document.getElementById('result').value = `${convertedAmount}`;
            } else {
                alert('Error retrieving exchange rate. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Error fetching exchange rates. Please try again later.');
        });
}





