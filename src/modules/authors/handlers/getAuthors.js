const {
	successResponse,
	errorResponse,
} = require('../../../utils/lambda-response');
const { Author } = require('../../../database/models');

/**
 * Get all authors, sorted by name
 *
 * @returns {Promise<{body: string, statusCode: *}>}
 */
const getAll = async () => {
	try {
		const authors = await Author.findAll({
			order: [['firstName', 'ASC']],
		});
		return successResponse(authors);
	} catch (e) {
		return errorResponse(e);
	}
};

module.exports = getAll;
