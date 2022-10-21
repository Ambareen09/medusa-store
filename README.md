# Medusa Hackathon 2022 - 
# Cashfree plugin integration with MedusaJS

![Medusa Hackathon 2022](https://raw.githubusercontent.com/Ambareen09/hackathon-oct2022-guidelines/main/hackathon-banner.jpg)

### Demo Link

https://www.npmjs.com/package/medusa-payment-cashfree

## About

A Cashfree plugin (https://www.cashfree.com/) integrated with MedusaJS for seamless payment.

### Participants

| GitHub        | Discord          | Twitter        |
| :------------ |   :-----      | :------------ |
| [@Azanul](https://github.com/Azanul) | JohnDoe297#5970        | [@Azanul](https://twitter.com/AzanulZ)   |
| [@Ambareen09](https://github.com/Ambareen09)            | D3l1l4H#8233          | [@AzamAmbareen](https://twitter.com/AzamAmbareen)    |

### Description

We have made a chasfree plugin which is integrated for MedusaJS. It will provide an addition to payment options available to end users.


### Prerequisites

Before you start with the tutorial make sure you have

- Node.js v14 or greater installed on your machine
- Expo CLI
- Medusa Backend/Frontend setup

## Set up Project
1. Create an account on (cashfree.com) and activate the account. From there can generate get the API keys.
    Please follow (https://docs.cashfree.com/docs) for detailed steps to generate API keys.
    
### Installation


- Configure below paramers in backend medsa-config.js file
```js
  {
    resolve: `medusa-payment-cashfree`,
    options: {
      name: "cashfree",
      api_key: CASHFREE_API_KEY,
      api_secret_key: CASHFREE_SECRET_KEY,
    },
  }

```
- add local package using [npm link](https://www.npmjs.com/package/medusa-payment-cashfree) with backend repo

## Resources
- [Cashfree Plugin](https://www.npmjs.com/package/medusa-payment-cashfree)
- [Medusa Plugin's Doc](https://docs.medusajs.com/advanced/backend/plugins/create/)
- [Medusa’s GitHub repository](https://github.com/medusajs/medusa)
- [How to Create Services](https://docs.medusajs.com/advanced/backend/services/create-service)
