function processPayment(amount) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (amount <= 0) {
        return reject("Payment failed: Invalid amount");
      }

    
      resolve(`Payment of ₹${amount} processed successfully`);
    }, 1000);

  });
}

processPayment(500)
  .then(result => console.log(result))
  .catch(error => console.log(error));


processPayment(-100)
  .then(result => console.log(result))
  .catch(error => console.log(error));
