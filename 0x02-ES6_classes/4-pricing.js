import Currency from './3-currency';

export default class Pricing {
  constructor(amount = 0, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} ${this._currency._code}`;
  }

  static convertPrice(amount = 0, conversionRate = 0) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a string');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a string');
    }

    return (amount * conversionRate);
  }
}
