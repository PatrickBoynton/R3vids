const Sequelize = require("sequelize");

const sequelize = new Sequelize("playground", "root", "safepass1", {
	dialect: "mysql",
	host: "localhost",
});

module.exports = sequelize;
