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

// Get list of deposit to transfer from
const getDepositsToTransferFrom = (bankAccounts, highestInterestRate) => {
    return bankAccounts.filter((account) => {
        const transferCommision = account.getTransferCommision();
        const interests = account.getDepositInterestsRate();
      
        if (highestInterestRate > transferCommision && highestInterestRate > interests) {
          console.log('Opłata za przelew=' + account.depositName);
          console.log('Opłata za przelew=' + transferCommision);
          console.log('Najwyzsze odsetki=' + highestInterestRate);
          console.log('Odsetki na tym koncie=' + interests);
          console.log('--------------------------------------');
        }
        return highestInterestRate > transferCommision && highestInterestRate > interests;
      });
}

const render = (bankAccounts) =>{
  const container = document.getElementById('container');
  container.innerHTML = '';
  bankAccounts.forEach(account => {
    const card = account.getData();
    container.insertAdjacentHTML('afterBegin', card);
  });
  return container;
}