// SET INITIAL STATE
const howManyAccounts = 4;
// Deposits
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
// Interests rates
bankAccounts.forEach((account) => {
  const depositIntrestRate = parseFloat(
    (Math.random() * (0.15 - 0.01) + 0.01).toFixed(2)
  );
  account.setDepositIntrestsRate(depositIntrestRate);
});
render(bankAccounts);

//    --  App runs ---    //
bankAccounts.forEach((account) => {
  const interval = account.getInterval();
  const intervals = setInterval(
    (account) => {
      const arrOfAllDepositsInterests = allDepositIntersts();
      const highestInterestRate = findHigestDepositInterest(
        arrOfAllDepositsInterests
      );
      const arrOfDepositsToTransferFrom = getDepositsToTransferFrom(
        bankAccounts,
        highestInterestRate
      );
      // Index of the deposit to tranfer
      const indexAccountTransferTo = arrOfAllDepositsInterests.findIndex(
        (index) => index === highestInterestRate
      );
      const transferMoneyTo = bankAccounts[indexAccountTransferTo];
      //  MAKE TRANSFERS
      arrOfDepositsToTransferFrom.forEach((account) => {
        const moneyToTransfer = account.getCapital();
        account.outcomeTransfer(moneyToTransfer);
        transferMoneyTo.incomTransfer(moneyToTransfer);
      });
      // ADD INTERESTS AND SET A NEW BALANS
      const interests = transferMoneyTo.getIntrests();
      transferMoneyTo.addInterestsToCapital(interests);
      const newBalance = transferMoneyTo.getCapital();
      
      // RENDER
      render(bankAccounts);

      // SET NEW INTERESTS RATE
      const depositIntrestRate = parseFloat(
        (Math.random() * (0.15 - 0.01) + 0.01).toFixed(2)
      );
      account.setDepositIntrestsRate(depositIntrestRate);
    },
    interval * 1000,
    account
  );

  document.getElementById('stop').addEventListener('click', () => {
    console.log('STOP')
    clearInterval(intervals);
  });
});
