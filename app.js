// kapitalizacji odsetek co "L" secund L - losowa liczba całkowita (5 - 10) generowana per instancje Bank

// Mam konta w "X" różnych bankach

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


bankAccounts.forEach((account) => {
    const interval = account.getInterval();
    setInterval((id) => {  
      console.log(account.depositname)
      console.log(interval, 'interval')
    },interval*1000,(0)); 
});

// setInterval((id) => {
//   console.log(bankAccounts[id]);
// },2000,(1));

// setInterval((id) => {
//     console.log(bankAccounts[id])
//   },3000,(2));
  
// setInterval((id) => {
//     console.log(bankAccounts[id]);
//   },4000,(3));

// bankAccounts.push(new BankAcount());
// bankAccounts[0].getData()
// const rate = bankAccounts[0].getCapitalizationRate();
// console.log(rate)

// setInterval(() => {
// const intrests = bankAccounts[0].getIntrests();
// console.log(intrests, 'intrests')
// bankAccounts[0].setCapital(intrests);
// bankAccounts[0].getData();
// }, rate*1000);

// bankAccounts.push(new BankAcount());
// bankAccounts[0].getData();
// const intrests = bankAccounts[0].getIntrests();
// console.log(typeof intrests, 'intrests')
// bankAccounts[0].setCapital(intrests);
// bankAccounts[0].getData();

// console.log(bankAccounts)
