import { Sequelize } from "sequelize";

const db = new Sequelize("database_app", "root", "", {
  host: "172.17.223.27",
  dialect: "mysql"
});

export default db;