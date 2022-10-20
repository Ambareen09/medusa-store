"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _medusaInterfaces = require("medusa-interfaces");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var CashfreePaymentService = /*#__PURE__*/function (_PaymentService) {
  (0, _inherits2["default"])(CashfreePaymentService, _PaymentService);
  var _super = _createSuper(CashfreePaymentService);
  function CashfreePaymentService() {
    (0, _classCallCheck2["default"])(this, CashfreePaymentService);
    return _super.call(this);
  }

  /**
   * Returns the currently held status.
   * @param {object} paymentData - payment method data from cart
   * @return {string} the status of the payment
   */
  (0, _createClass2["default"])(CashfreePaymentService, [{
    key: "getStatus",
    value: function () {
      var _getStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(paymentData) {
        var status;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                status = paymentData.status;
                return _context.abrupt("return", status);
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function getStatus(_x) {
        return _getStatus.apply(this, arguments);
      }
      return getStatus;
    }() /**
         * Creates a manual payment with status "pending"
         * @param {object} cart - cart to create a payment for
         * @return {object} an object with staus
         */
  }, {
    key: "createPayment",
    value: function () {
      var _createPayment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", {
                  status: 'pending'
                });
              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function createPayment() {
        return _createPayment.apply(this, arguments);
      }
      return createPayment;
    }() /**
         * Retrieves payment
         * @param {object} data - the data of the payment to retrieve
         * @return {Promise<object>} returns data
         */
  }, {
    key: "retrievePayment",
    value: function () {
      var _retrievePayment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(data) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", data);
              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      function retrievePayment(_x2) {
        return _retrievePayment.apply(this, arguments);
      }
      return retrievePayment;
    }() /**
         * Updates the payment status to authorized
         * @return {Promise<{ status: string, data: object }>} result with data and status
         */
  }, {
    key: "authorizePayment",
    value: function () {
      var _authorizePayment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", {
                  status: 'authorized',
                  data: {
                    status: 'authorized'
                  }
                });
              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      function authorizePayment() {
        return _authorizePayment.apply(this, arguments);
      }
      return authorizePayment;
    }() /**
         * Noop, simply returns existing data.
         * @param {object} sessionData - payment session data.
         * @return {object} same data
         */
  }, {
    key: "updatePayment",
    value: function () {
      var _updatePayment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(sessionData) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", sessionData.data);
              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));
      function updatePayment(_x3) {
        return _updatePayment.apply(this, arguments);
      }
      return updatePayment;
    }() /**
         .
         * @param {object} sessionData - payment session data.
         * @param {object} update - payment session update data.
         * @return {object} existing data merged with update data
         */
  }, {
    key: "updatePaymentData",
    value: function () {
      var _updatePaymentData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(sessionData, update) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", _objectSpread(_objectSpread({}, sessionData.data), update.data));
              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));
      function updatePaymentData(_x4, _x5) {
        return _updatePaymentData.apply(this, arguments);
      }
      return updatePaymentData;
    }()
  }, {
    key: "deletePayment",
    value: function () {
      var _deletePayment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return");
              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));
      function deletePayment() {
        return _deletePayment.apply(this, arguments);
      }
      return deletePayment;
    }() /**
         * Updates the payment status to captured
         * @param {object} paymentData - payment method data from cart
         * @return {object} object with updated status
         */
  }, {
    key: "capturePayment",
    value: function () {
      var _capturePayment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", {
                  status: 'captured'
                });
              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));
      function capturePayment() {
        return _capturePayment.apply(this, arguments);
      }
      return capturePayment;
    }() /**
         * Returns the data currently held in a status
         * @param {object} paymentData - payment method data from cart
         * @return {object} the current data
         */
  }, {
    key: "getPaymentData",
    value: function () {
      var _getPaymentData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(session) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", session.data);
              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));
      function getPaymentData(_x6) {
        return _getPaymentData.apply(this, arguments);
      }
      return getPaymentData;
    }() /**
         * Noop, resolves to allow manual refunds.
         * @param {object} payment - payment method data from cart
         * @return {string} same data
         */
  }, {
    key: "refundPayment",
    value: function () {
      var _refundPayment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(payment) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", payment.data);
              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));
      function refundPayment(_x7) {
        return _refundPayment.apply(this, arguments);
      }
      return refundPayment;
    }() /**
         * Updates the payment status to cancled
         * @return {object} object with canceled status
         */
  }, {
    key: "cancelPayment",
    value: function () {
      var _cancelPayment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", {
                  status: 'canceled'
                });
              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));
      function cancelPayment() {
        return _cancelPayment.apply(this, arguments);
      }
      return cancelPayment;
    }()
  }]);
  return CashfreePaymentService;
}(_medusaInterfaces.PaymentService);
(0, _defineProperty2["default"])(CashfreePaymentService, "identifier", 'cashfree');
var _default = CashfreePaymentService;
exports["default"] = _default;