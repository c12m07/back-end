import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv'
import _config from './config.js'

dotenv.config()

const env = process.env.ENV;
const config = _config[env];

const db = new Sequelize(
  process.env.DB_NAME || config.database, 
  process.env.DB_USER || config.username, 
  process.env.DB_PASSWORD || config.password, 
  
  {
    host: process.env.DB_HOST || config.host,
    dialect: 'postgres', 
    logging: false,
    port: '5432', 
    define: {
      timestamps: false 
    }
  }
);

export default db;