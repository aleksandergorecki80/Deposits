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

//// FUNCTIONS

// Get all deposits interests
const allDepositIntersts = () => {
  const depossitInterests = [];
  bankAccounts.forEach((account) => {
    const inerest = account.getDepositInterestsRate();
    depossitInterests.push(inerest);
  });
  return depossitInterests;
};

// Find higest deposit interest
const findHigestDepositInterest = (arrOfAllDepositsInterests) => {
  return Math.max.apply(null, arrOfAllDepositsInterests);
};

const arrOfAllDepositsInterests = allDepositIntersts();
const highestInterest = findHigestDepositInterest(arrOfAllDepositsInterests);
console.log(highestInterest, 'highestInterest');


// Check if transfer commision is lower than highest intrest rate
const listOfDepositsTransfersFrom = bankAccounts.filter((account) => {
  const transferCommision = account.getTransferCommision();
  const interests = account.getDepositInterestsRate();

  if (highestInterest > transferCommision && highestInterest > interests) {
    console.log('Opłata za przelew=' + account.depositName);
    console.log('Opłata za przelew=' + transferCommision);
    console.log('Najwyzsze odsetki=' + highestInterest);
    console.log('Odsetki na tym koncie=' + interests);
    console.log('--------------------------------------');
  }
  return highestInterest > transferCommision && highestInterest > interests;
});

// Nr konta na które robimy przelew
const indexAccountTransferTo = arrOfAllDepositsInterests.findIndex(
  (index) => index === highestInterest
);

console.log(listOfDepositsTransfersFrom, 'listOfDepositsTransfersFrom');

// console.log(
//   bankAccounts[indexAccountTransferTo],
//   'przelew na: ' + bankAccounts[indexAccountTransferTo].depositName
// );

listOfDepositsTransfersFrom.forEach((account) => {
    const moneyToTransfer = account.getCapital()
    account.outcomeTransfer(moneyToTransfer);
    console.log('moneyToTransfer: ' + moneyToTransfer);
    console.log(
      bankAccounts[indexAccountTransferTo],
      'przelew na: ' + bankAccounts[indexAccountTransferTo].depositName
    );
    console.log('wplacamy na index: ' + indexAccountTransferTo)
    bankAccounts[indexAccountTransferTo].incomTransfer(moneyToTransfer);
});

// Obliczamy oprocentowanie oraz dodajemy odsetki do kapitalu
  const interests = bankAccounts[indexAccountTransferTo].getIntrests();
  console.log(interests, 'interests')


console.log(bankAccounts);
// bankAccounts.forEach((account) => {
//     const interval = account.getInterval();
//     setInterval((account) => {
//       console.log(account.depositName)
//       console.log(interval, 'interval')
//     },interval*1000,(account));
// });
