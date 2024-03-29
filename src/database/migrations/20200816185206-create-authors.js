'use strict';

module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable('authors', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			firstName: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			lastName: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			email: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			birthDate: {
				allowNull: false,
				type: Sequelize.DATEONLY,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		}),
	down: (queryInterface, Sequelize) => queryInterface.dropTable('authors'),
};
