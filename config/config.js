function runDotEnv() {
  if (process.env.ENV === 'development') {
    import('dotenv').then(dotenv => dotenv.config({ path: '.env' }));
  }
}

runDotEnv();

const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    logging: console.log,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_TEST_USER || 'postgres',
    password: process.env.DB_TEST_PASSWORD || 'postgres',
    database: process.env.DB_TEST_DB_NAME || 'db_testing',
    host: process.env.DB_TEST_HOST || '127.0.0.1',
    port: process.env.DB_TEST_PORT || 5432,
    logging: console.log,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    logging: false,
    dialect: 'postgres',
  }
}

export default config;