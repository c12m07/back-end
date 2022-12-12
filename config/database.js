import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv'

dotenv.config()

const db = new Sequelize(
  'db_a1dm', 
  'db_a1dm_user', 
  'G6VwUvTduSeadfwMJeed1ZHZmmFNLroa', 
  
  {
    host: 'dpg-ce0fvuen6mpu84u1srb0-a',
    dialect: 'postgres', 
    logging: false,
    port: '5432', 
    define: {
      timestamps: false 
    }
  }
);

export default db;