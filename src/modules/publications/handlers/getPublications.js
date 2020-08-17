const { Op } = require('sequelize');
const {
	successResponse,
	errorResponse,
} = require('../../../utils/lambda-response');
const { Publication } = require('../../../database/models');

/**
 * Find all publications
 *
 * @returns {Promise<{body: string, statusCode: *}>}
 */
const findAll = async ({ queryStringParameters }) => {
	try {
		let author = null,
			searchTerms = null;
		if (queryStringParameters) {
			author = queryStringParameters.author;
			searchTerms = queryStringParameters.searchTerms;
		}
		let whereStatement = {};
		if (author) whereStatement.authorId = author;
		if (searchTerms) whereStatement.title = { [Op.iLike]: `%${searchTerms}%` };

		const publications = await Publication.findAll({
			order: [['createdAt', 'DESC']],
			where: whereStatement,
		});
		return successResponse(publications);
	} catch (e) {
		return errorResponse(e);
	}
};

module.exports = findAll;
