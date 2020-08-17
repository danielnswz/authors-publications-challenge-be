const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/database')[env];

const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	config
);
const Author = require('./Author');
const Publication = require('./Publication');

const models = {
	Author: Author.init(sequelize),
	Publication: Publication.init(sequelize),
};

// Run `.associate` if it exists,
// ie create relationships in the ORM
Object.values(models)
	.filter((model) => typeof model.associate === 'function')
	.forEach((model) => model.associate(models));

const db = {
	...models,
	sequelize,
};

module.exports = db;
