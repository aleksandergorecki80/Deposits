// kapitalizacji odsetek co "L" secund L - losowa liczba całkowita (5 - 10) generowana per instancje Bank

// Mam konta w "X" różnych bankach

class BankAcount {
constructor() { 
    this.seedCapital = parseFloat(15000);
    this.capitalisationRate = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    this.depositIntrest = parseFloat((Math.random() * (0.05 - 0.01) + 0.01).toFixed(2));
    this.transferCommision = parseFloat((Math.random() * (0.15 - 0.01) + 0.01).toFixed(2));
}

getData = () => {
    console.log(`Kapital: ${this.seedCapital} ${typeof this.seedCapital}`);
    console.log(`Kapitalizacja co: ${this.capitalisationRate} ${typeof this.capitalisationRate}`);
    console.log(`Procent: ${this.depositIntrest} ${typeof this.depositIntrest}`);
    console.log(`Prowizja od przelewu: ${this.transferCommision} ${typeof this.transferCommision}`)
}

getIntrests = () => {
    const result = this.seedCapital * this.depositIntrest;
    const rounded = result.toFixed(2)
    return parseFloat(rounded);
 }
 setCapital = (intrests) => {
     this.seedCapital = parseFloat((this.seedCapital + intrests).toFixed(2));
 }
 getCapitalizationRate = () =>{
     return this.capitalisationRate;
 }
}

const bankAccounts = [];
// for (i=0; i<5; i++){
//     bankAccounts.push(new BankAcount());
//     bankAccounts[i].getData();
// }

bankAccounts.push(new BankAcount());
bankAccounts[0].getData()
const rate = bankAccounts[0].getCapitalizationRate();
console.log(rate)


setInterval(() => {
const intrests = bankAccounts[0].getIntrests();
console.log(intrests, 'intrests')
bankAccounts[0].setCapital(intrests);
bankAccounts[0].getData();
}, rate*1000);

// bankAccounts.push(new BankAcount());
// bankAccounts[0].getData();
// const intrests = bankAccounts[0].getIntrests();
// console.log(typeof intrests, 'intrests')
// bankAccounts[0].setCapital(intrests);
// bankAccounts[0].getData();


// console.log(bankAccounts)