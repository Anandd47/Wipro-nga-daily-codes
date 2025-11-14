function generateInvoice(orderId) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {


      if (!orderId) {
        return reject("Invoice generation failed: Missing Order ID");
      }

      const invoice = {
        invoiceId: "INV-" + Date.now(),
        orderId,
        amount: 499,
        generatedAt: new Date().toISOString()
      };

      resolve(invoice);

    }, 1000);

  });
}



async function createInvoice() {
  try {
    const invoice = await generateInvoice(101);
    console.log(" Invoice generated:", invoice);
  } catch (err) {
    console.log(err);
  }


  try {
    const errorInvoice = await generateInvoice(null);
    console.log(errorInvoice);
  } catch (err) {
    console.log(err);
  }
}

createInvoice();
