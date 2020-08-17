const Sequelize = require('sequelize');

module.exports = class Author extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				id: {
					type: Sequelize.INTEGER,
					autoIncrement: true,
					primaryKey: true,
				},
				firstName: Sequelize.STRING,
				lastName: Sequelize.STRING,
				email: Sequelize.STRING,
				birthDate: Sequelize.DATE,
			},
			{
				sequelize,
				modelName: 'author',
			}
		);
	}

	static associate(models) {
		this.hasMany(models.Publication);
	}
};
