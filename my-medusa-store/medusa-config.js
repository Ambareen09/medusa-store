const dotenv = require('dotenv')

let ENV_FILE_NAME = '';
switch (process.env.NODE_ENV) {
	case 'production':
		ENV_FILE_NAME = '.env.production';
		break;
	case 'staging':
		ENV_FILE_NAME = '.env.staging';
		break;
	case 'test':
		ENV_FILE_NAME = '.env.test';
		break;
	case 'development':
	default:
		ENV_FILE_NAME = '.env';
		break;
}

try {
	dotenv.config({ path: process.cwd() + '/' + ENV_FILE_NAME });
} catch (e) {
}

// CORS when consuming Medusa from admin
const ADMIN_CORS = process.env.ADMIN_CORS || "http://localhost:7000,http://localhost:7001";

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = process.env.STORE_CORS || "http://localhost:8000";

// Database URL (here we use a local database called medusa-development)
const DATABASE_URL =
  process.env.DATABASE_URL || "postgres://localhost/medusa-store";

// Medusa uses Redis, so this needs configuration as well
const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

// Stripe keys
const CASHFREE_API_KEY = process.env.CASHFREE_API_KEY || "";
const CASHFREE_SECRET_KEY = process.env.CASHFREE_SECRET_KEY || "";

// This is the place to include plugins. See API documentation for a thorough guide on plugins.
const plugins = [
  `medusa-fulfillment-manual`,
  `medusa-payment-manual`,
  // Uncomment to add Stripe support.
  // You can create a Stripe account via: https://stripe.com
  {
    resolve: `medusa-payment-cashfree`,
    options: {
      name: "cashfree",
      api_key: CASHFREE_API_KEY,
      api_secret_key: CASHFREE_SECRET_KEY,
    },
  },
];

module.exports = {
  projectConfig: {
    // redis_url: REDIS_URL,
    // For more production-like environment install PostgresQL
    // database_url: DATABASE_URL,
    // database_type: "postgres",
    database_database: "./medusa-db.sql",
    database_type: "sqlite",
    store_cors: STORE_CORS,
    admin_cors: ADMIN_CORS,
  },
  plugins,
};
