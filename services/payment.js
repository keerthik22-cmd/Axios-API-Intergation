async function processPayment(amount) {
  if (!amount || amount <= 0) {
    throw new Error("Invalid payment amount");
  }

  return {
    status: "success",
    transactionId: "TXN" + Date.now(),
    amount
  };
}

module.exports = { processPayment };
