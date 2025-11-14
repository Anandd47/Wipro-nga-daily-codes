function fetchOrder(orderId, callback) {

  setTimeout(() => {

    if (!orderId) {
      return callback(" Error: Order ID is missing", null);
    }

    const order = {
      id: orderId,
      item: "Burger",
      price: 120
    };

    callback(null, order);

  }, 1000);
}


fetchOrder(101, (err, order) => {
  if (err) return console.log(err);
  console.log(" Order fetched:", order);
});

fetchOrder(null, (err, order) => {
  if (err) return console.log(err);
  console.log(order);
});
