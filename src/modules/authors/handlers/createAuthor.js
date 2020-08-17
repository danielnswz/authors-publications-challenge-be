const {
	successResponse,
	errorResponse,
} = require('../../../utils/lambda-response');
const { Author } = require('../../../database/models');

/**
 * Create author
 *
 * @param body
 * @returns {Promise<{body: string, statusCode: *}>}
 */
const create = async ({ body }) => {
	try {
		const data = JSON.parse(body);
		const author = await Author.create(data);
		return successResponse(author);
	} catch (e) {
		return errorResponse(e);
	}
};

module.exports = create;
