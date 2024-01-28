function convertCurrency() {
    let amount = parseFloat(document.getElementById('amount').value);
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;
  
    if (isNaN(amount)) {
      document.getElementById('result').innerHTML = 'Please enter a valid amount.';
      return;
    }
  
    let exchangeRates = {
      'USD': 1,
      'EUR': 0.85,
      'GBP': 0.73,
      'JPY': 113.5,
      'INR': 74.7
      
    };
  
    if (fromCurrency in exchangeRates && toCurrency in exchangeRates) {
      let convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
      document.getElementById('result').innerHTML = `${amount.toFixed(2)} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
      document.getElementById('result').innerHTML = 'Invalid currency selection.';
    }
  }
  