class BankAcount {
    constructor(depositName, seedCapital, capitalisationRate, transferCommision) {
      this.depositName = depositName;
      this.seedCapital = seedCapital;
      this.capitalisationRate = capitalisationRate;
      this.depositIntrestRate = '';
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
        } zł</li>
        <li class="list-group-item">Kapitalizacja co: ${
          this.capitalisationRate
        } s.</li>
        <li class="list-group-item">Odsetki: ${Math.floor(this.depositIntrestRate * 100)} %</li>
        <li class="list-group-item">Prowizja od przelewu: ${
          Math.floor(this.transferCommision * 100)
        } %</li>
      </ul>
    </div>`;
    };
    getCapital = () => {
      return this.seedCapital;
    }
    getInterval = () => {
      return this.capitalisationRate;
    };
    getCapitalizationRate = () => {
      return this.capitalisationRate;
    };
    getTransferCommision = () => {
      return this.transferCommision;
    };
    setDepositIntrestsRate = (depositIntrestRate) => {
      this.depositIntrestRate = depositIntrestRate;
    };
    getDepositInterestsRate = () => {
      return this.depositIntrestRate;
    };
    getIntrests = () => {
      const result = this.seedCapital * this.depositIntrestRate;
      const rounded = result.toFixed(2);
      return parseFloat(rounded);
    };
    addInterestsToCapital = (intrests) => {
      this.seedCapital = parseFloat((this.seedCapital + intrests).toFixed(2));
    };
    incomTransfer = (amount) => {
      this.seedCapital = this.seedCapital + amount;
    };
    outcomeTransfer = (amount) => {
      this.seedCapital = this.seedCapital - amount;
    }; 
  }