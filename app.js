const howManyAccounts = 4;

class BankAcount {
  constructor(depositName, seedCapital, capitalisationRate, transferCommision) {
    this.depositname = depositName;
    this.seedCapital = seedCapital;
    this.capitalisationRate = capitalisationRate;
    this.depositIntrest = '';
    this.transferCommision = transferCommision
  }

  getData = () => {
   return `<div class="card" style="width: 18rem;">
    <div class="card-header">
     ${this.depositname}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>Kapital</b>: ${this.seedCapital} ${typeof this.seedCapital}</li>
      <li class="list-group-item">Kapitalizacja co: ${this.capitalisationRate} ${typeof this
        .capitalisationRate}</li>
      <li class="list-group-item">Odsetki: ${this.depositIntrest} ${typeof this
        .depositIntrest}</li>
      <li class="list-group-item">Prowizja od przelewu: ${this.transferCommision} ${typeof this
        .transferCommision}</li>
    </ul>
  </div>`;
  };

  getInterval = () => {
      return this.capitalisationRate;
  }
  setDepositIntrests = (depositIntrest) => {
      this.depositIntrest = depositIntrest;
  }
  getDepositInterests = () =>{
      return this.depositIntrest;
  }

  getTransferCommision = () => {
      return this.transferCommision;
  }

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

// Initialisation of deposits
const bankAccounts = [];
for (i = 0; i < howManyAccounts; i++) {
    const depositName = `Lokata nr <span>${i}</span>`
    const seedCapital = parseFloat(15000);
    const capitalisationRate = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    const transferCommision = parseFloat(
        (Math.random() * (0.15 - 0.01) + 0.01).toFixed(2)
      );
  bankAccounts.push(new BankAcount(depositName, seedCapital, capitalisationRate, transferCommision));
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
const allDepositIntersts = () =>{
    const depossitInterests = [];
    bankAccounts.forEach((account) => {
        const inerest = account.getDepositInterests();
        depossitInterests.push(inerest);
    });
     return depossitInterests;
} 

// Find higest deposit interest
const findHigestDepositInterest = (arrOfAllDepositsInterests) => {
  return Math.max.apply(null, arrOfAllDepositsInterests);
}



const arrOfAllDepositsInterests = allDepositIntersts()
const highestInterest = findHigestDepositInterest(arrOfAllDepositsInterests);

// Check if transfer commision is lower than highest intrest rate
const listOfDepositsForTransfers = bankAccounts.filter((account) => {
    const transferCommision = account.getTransferCommision();
    const interests = account.getDepositInterests();
    return (highestInterest>transferCommision && highestInterest>interests)
});

// Nr konta na które robimy przelew
const indexOfDeposit = arrOfAllDepositsInterests.findIndex(index =>index===highestInterest)

console.log(listOfDepositsForTransfers, 'listOfDepositsForTransfers')
console.log(highestInterest, 'highestInterest')
console.log(indexOfDeposit, 'przelew na')

// bankAccounts.forEach((account) => {
//     const interval = account.getInterval();
//     setInterval((account) => {  
//       console.log(account.depositname)
//       console.log(interval, 'interval')
//     },interval*1000,(account)); 
// });
