function runDotEnv() {
  if (process.env.ENV === 'development') {
    import('dotenv').then(dotenv => dotenv.config({ path: '.env' }));
  }
}

runDotEnv();

const config = {
  development: {
    username: "db_a1dm_user",
    password: "G6VwUvTduSeadfwMJeed1ZHZmmFNLroa",
    database: "db_a1dm",
    host: "dpg-ce0fvuen6mpu84u1srb0-a",
    logging: true,
    dialect: "postgres"
  },
  test: {
    username: "postgres",
    password: "postgres",
    database: "db_testeo",
    host: "localhost",
    logging: true,
    dialect: "postgres"
  },
  production: {
    username: "db_a1dm_user",
    password: "G6VwUvTduSeadfwMJeed1ZHZmmFNLroa",
    database: "db_a1dm",
    host: "dpg-ce0fvuen6mpu84u1srb0-a",
    logging: true,
    dialect: "postgres"
  }
}

export default config;