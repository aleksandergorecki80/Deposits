const howManyAccounts = 4;
// Initialisation of deposits
const bankAccounts = [];
for (i = 0; i < howManyAccounts; i++) {
  const depositName = `Lokata nr <span>${i}</span>`;
  const seedCapital = parseFloat(15000);
  const capitalisationRate = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const transferCommision = parseFloat(
    (Math.random() * (0.15 - 0.01) + 0.01).toFixed(2)
  );
  bankAccounts.push(
    new BankAcount(
      depositName,
      seedCapital,
      capitalisationRate,
      transferCommision
    )
  );
}

// set initial deposits interests
bankAccounts.forEach((account) => {
  const depositIntrestRate = parseFloat(
    (Math.random() * (0.15 - 0.01) + 0.01).toFixed(2)
  );
  account.setDepositIntrestsRate(depositIntrestRate);
  const card = account.getData();
  const container = document.getElementById('container');
  container.insertAdjacentHTML('afterBegin', card);
});


//    --  App runs ---    //
const arrOfAllDepositsInterests = allDepositIntersts();
const highestInterestRate = findHigestDepositInterest(arrOfAllDepositsInterests);
const arrOfDepositsToTransferFrom = getDepositsToTransferFrom(bankAccounts, highestInterestRate);
// Index of the deposit to tranfer 
const indexAccountTransferTo = arrOfAllDepositsInterests.findIndex(
  (index) => index === highestInterestRate
);
//  MAKE TRANSFERS
arrOfDepositsToTransferFrom.forEach((account) => {
    const moneyToTransfer = account.getCapital()
    account.outcomeTransfer(moneyToTransfer);
    bankAccounts[indexAccountTransferTo].incomTransfer(moneyToTransfer);
});
// ADD INTERESTS AND SET NEW BALANS
const interests = bankAccounts[indexAccountTransferTo].getIntrests();
bankAccounts[indexAccountTransferTo].addInterestsToCapital(interests);
const newBalance = bankAccounts[indexAccountTransferTo].getCapital();
console.log(newBalance, 'New balance');

// SET NEW INTEREST RATE
const depositIntrestRate = parseFloat(
  (Math.random() * (0.15 - 0.01) + 0.01).toFixed(2)
);
// account.setDepositIntrestsRate(depositIntrestRate);


console.log(bankAccounts);
bankAccounts.forEach((account) => {
    const interval = account.getInterval();
    setInterval((account) => {
      console.log(account.depositName, interval, 'interval')



    },interval*1000,(account));
});
