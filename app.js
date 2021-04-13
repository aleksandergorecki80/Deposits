// kapitalizacji odsetek co "L" secund L - losowa liczba całkowita (5 - 10) generowana per instancje Bank

// Mam konta w "X" różnych bankach

function CreateBankAccount(){
    return {
        seedCapital: 15000,
        capitalisationRate: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
        prowizjaOdPrzelewu: (Math.random() * (0.15 - 0.01) + 0.01).toFixed(2),
        oprocentowanieLokaty: Math.random().toFixed(2),
    }
}

const bankAccounts = [];
for (i=0; i<5; i++){
    bankAccounts.push(new CreateBankAccount());
}


console.log(bankAccounts)