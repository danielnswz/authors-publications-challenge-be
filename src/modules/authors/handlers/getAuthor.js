const {
	successResponse,
	errorResponse,
} = require('../../../utils/lambda-response');
const { Author } = require('../../../database/models');

/**
 * Find one author by ID
 *
 * @param id
 * @returns {Promise<{body: string, statusCode: *}>}
 */
const getOne = async ({ pathParameters: { id } }) => {
	try {
		const author = await Author.findByPk(id);
		return successResponse(author || {});
	} catch (e) {
		return errorResponse(e);
	}
};

module.exports = getOne;
