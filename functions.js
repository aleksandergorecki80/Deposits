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
    return (
      highestInterestRate > transferCommision && highestInterestRate > interests
    );
  });
};

const getTotalAmount = (bankAccounts, totalAmount = 0) => {
  bankAccounts.forEach((element) => {
    totalAmount = totalAmount + element.getCapital();
  });
  return totalAmount;
};

const render = (bankAccounts, totalAmount) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  const totalAmountPlacer = `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
        <p class="card-text"><b>Total amount:</b> ${totalAmount}</p>
        </div>
      </div>
      `;
  totalAmount.innerHTML = totalAmount;
  bankAccounts.forEach((account) => {
    const card = account.getData();
    container.insertAdjacentHTML('afterBegin', card);
  });
  container.insertAdjacentHTML('afterBegin', totalAmountPlacer);
  return container;
};