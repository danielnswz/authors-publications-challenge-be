const Sequelize = require('sequelize');

module.exports = class Publication extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				id: {
					type: Sequelize.INTEGER,
					autoIncrement: true,
					primaryKey: true,
				},
				title: Sequelize.STRING,
				body: Sequelize.TEXT,
			},
			{
				sequelize,
				modelName: 'publication',
			}
		);
	}

	static associate(models) {
		this.belongsTo(models.Author);
	}
};
