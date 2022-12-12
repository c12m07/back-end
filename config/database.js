import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'
import _config from './config.js';

const env = process.env.ENV
const config = _config[env]

const db = new Sequelize(
  config.database,
  config.username,
  config.password,
  
  {
    host: config.host,
    dialect: 'postgres', 
    logging: config.logging,
    port: '5432', 
    define: {
      timestamps: false 
    }
  }
);

export default db;