'use strict';

module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable('publications', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			body: {
				allowNull: false,
				type: Sequelize.TEXT,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			authorId: {
				type: Sequelize.INTEGER,
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
				allowNull: false,
				references: {
					model: 'authors',
					key: 'id',
				},
			},
		}),
	down: (queryInterface, Sequelize) => queryInterface.dropTable('publications'),
};
