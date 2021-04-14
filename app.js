class BankAcount {
  constructor(depositName, seedCapital, capitalisationRate, transferCommision) {
    this.depositName = depositName;
    this.seedCapital = seedCapital;
    this.capitalisationRate = capitalisationRate;
    this.depositIntrest = '';
    this.transferCommision = transferCommision;
  }

  getData = () => {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header">
     ${this.depositName}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>Kapital</b>: ${
        this.seedCapital
      } ${typeof this.seedCapital}</li>
      <li class="list-group-item">Kapitalizacja co: ${
        this.capitalisationRate
      } ${typeof this.capitalisationRate}</li>
      <li class="list-group-item">Odsetki: ${this.depositIntrest} ${typeof this
      .depositIntrest}</li>
      <li class="list-group-item">Prowizja od przelewu: ${
        this.transferCommision
      } ${typeof this.transferCommision}</li>
    </ul>
  </div>`;
  };

  getCapital = () => {
    return this.seedCapital;
  }

  incomTransfer = (amount) => {
    this.seedCapital = this.seedCapital + amount;
  };
  outcomeTransfer = (amount) => {
    this.seedCapital = this.seedCapital - amount;
  };
  getInterval = () => {
    return this.capitalisationRate;
  };
  setDepositIntrests = (depositIntrest) => {
    this.depositIntrest = depositIntrest;
  };
  getDepositInterests = () => {
    return this.depositIntrest;
  };
  getTransferCommision = () => {
    return this.transferCommision;
  };

  getIntrests = () => {
    const result = this.seedCapital * this.depositIntrest;
    const rounded = result.toFixed(2);
    return parseFloat(rounded);
  };
  setCapital = (intrests) => {
    this.seedCapital = parseFloat((this.seedCapital + intrests).toFixed(2));
  };
  getCapitalizationRate = () => {
    return this.capitalisationRate;
  };
}

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
  const depositIntrest = parseFloat(
    (Math.random() * (0.15 - 0.01) + 0.01).toFixed(2)
  );
  account.setDepositIntrests(depositIntrest);
  const card = account.getData();
  const container = document.getElementById('container');
  container.insertAdjacentHTML('afterBegin', card);
});

//// FUNCTIONS

// Get all deposits interests
const allDepositIntersts = () => {
  const depossitInterests = [];
  bankAccounts.forEach((account) => {
    const inerest = account.getDepositInterests();
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
  const interests = account.getDepositInterests();

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

console.log(bankAccounts);
// bankAccounts.forEach((account) => {
//     const interval = account.getInterval();
//     setInterval((account) => {
//       console.log(account.depositName)
//       console.log(interval, 'interval')
//     },interval*1000,(account));
// });
