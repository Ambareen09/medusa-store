import {PaymentService} from 'medusa-interfaces';
const {PaymentGateway} = require('@cashfreepayments/cashfree-sdk');

class CashfreePaymentService extends PaymentService {
  static identifier = 'cashfree';

  constructor() {
    super(options);
    this.options_ = options;

    this.pg = new PaymentGateway({
      env: options.env,
      apiVersion: options.api_version,
      appId: options.api_key_id,
      secretKey: options.api_key_secret,
    });
  }

  /**
   * Returns the currently held status.
   * @param {object} order - payment order data from cart
   * @return {string} the status of the payment
   */
  async getStatus(cart) {
    try {
      const {cart_id} = cart;
      const response = await this.pg.orders.getStatus({orderId: cart_id});

      console.log(response);
      return response;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Creates a manual payment with status "pending"
   * @param {object} cart - cart to create a payment for
   * @return {object} an object with staus
   */
  async createPayment(cart) {
    try {
      amount = cart.total;
      const {cart_id, customer_name, email, phone_number, return_url} = cart;

      const response = await this.pg.orders .createOrders({
        orderId: cart_id,
        orderAmount: amount,
        customerName: customer_name,
        customerPhone: phone_number,
        customerEmail: email,
        returnUrl: return_url,

      });

      console.log(response);
      return response;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Retrieves payment
   * @param {object} data - the data of the payment to retrieve
   * @return {Promise<object>} returns data
   */
  async retrievePayment(data) {
    try {
      const {order_id} = data;
      const response = await this.pg.orders.getDetails({orderId: order_id});

      console.log(response);
      return response;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Updates the payment status to authorized
   * @return {Promise<{ status: string, data: object }>} result with data and status
   */
  async authorizePayment() {
    // return {status: 'authorized', data: {status: 'authorized'}};
    return 'Funtion not allowed';
  }

  /**
   * Noop, simply returns existing data.
   * @param {object} sessionData - payment session data.
   * @return {object} same data
   */
  async updatePayment(sessionData) {
    // return sessionData.data;
    return 'Funtion not allowed';
  }

  /**
   .
   * @param {object} sessionData - payment session data.
   * @param {object} update - payment session update data.
   * @return {object} existing data merged with update data
   */
  async updatePaymentData(sessionData, update) {
    // return {...sessionData.data, ...update.data};
    return 'Funtion not allowed';
  }

  async deletePayment() {
    // return;
    return 'Funtion not allowed';
  }

  /**
   * Updates the payment status to captured
   * @param {object} paymentData - payment method data from cart
   * @return {object} object with updated status
   */
  async capturePayment() {
    return {status: 'captured'};
  }

  /**
   * Returns the data currently held in a status
   * @param {object} paymentData - payment method data from cart
   * @return {object} the current data
   */
  async getPaymentData(session) {
    // return session.data;
    return 'Funtion not allowed';
  }

  /**
   * Noop, resolves to allow manual refunds.
   * @param {object} payment - payment method data from cart
   * @return {string} same data
   */
  async refundPayment(payment) {
    try {
      const {order_id, reference_id, redund_amount, refund_note} = payment;
      const response = await this.pg.refunds.refunds({
        orderId: order_id,
        referenceId: reference_id,
        refundAmount: redund_amount,
        refundNote: refund_note,
      });
      console.log(response);
      return response;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Updates the payment status to cancled
   * @return {object} object with canceled status
   */
  async cancelPayment() {
    // return {status: 'canceled'};
    return 'Funtion not allowed';
  }
}

export default CashfreePaymentService;
