/* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */

import { utils } from 'near-api-js';

export class LockCalendar {

  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse
  }

  async getBookings() {
    // Check how many bookings there are and ask for the last 10
    const total_bookings = this.wallet.viewMethod({ contractId: this.contractId, method: "booking_count" })
    const from = total_bookings > 10 ? total_bookings - 10 : 0;
    const bookings = await this.wallet.viewMethod({ contractId: this.contractId, method: "list_bookings", from })
    return bookings
  }

  async addBooking(name, numberOfDays, totalPrice, description, pin) {
    const amount = utils.format.parseNearAmount(totalPrice);
    return await this.wallet.callMethod({ contractId: this.contractId, method: "add_booking", args: { name: name, nbr_days: numberOfDays, total_price: totalPrice, description: description, password: pin }, amount });
  }
}