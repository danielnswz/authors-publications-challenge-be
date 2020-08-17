require('dotenv').config();

module.exports = {
	development: {
		username: process.env.DEV_DB_USERNAME || 'postgres',
		password: process.env.DEV_DB_PASSWORD || '1234',
		database: process.env.DEV_DB_DATABASE || 'database_development',
		host: process.env.DEV_DB_HOST || '127.0.0.1',
		dialect: process.env.DEV_DB_DIALECT || 'postgres',
		port: process.env.DEV_DB_PORT || 5432,
	},
	production: {
		username: process.env.PROD_DB_USERNAME || 'root',
		password: process.env.PROD_DB_PASSWORD || '123',
		database: process.env.PROD_DB_DATABASE || 'database_production',
		host: process.env.PROD_DB_HOST || '127.0.0.1',
		dialect: process.env.PROD_DB_DIALECT || 'mysql',
		port: process.env.PROD_DB_PORT || 3306,
	},
};
