import Sequelize from "sequelize";

export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: '/database/database.sqlite',
  });
/*  import { Sequelize } from 'sequelize';

  export const sequelize = new Sequelize('bd_controlcolas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  });

  sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
  });
*/
  
//* export const sequelize = new Sequelize(
//  "projectsdb", // db name,
//  "postgres", // username
//  "mysecretpassword", // password
//  {
//    host: "localhost",
//    dialect: "sqlite",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
//  }
// );