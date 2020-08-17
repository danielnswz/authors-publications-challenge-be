const {
	successResponse,
	errorResponse,
} = require('../../../utils/lambda-response');
const { Author } = require('../../../database/models');

/**
 * Update author
 *
 * @param body
 * @param id
 * @returns {Promise<{body: string, statusCode: *}>}
 */
const update = async ({ body, pathParameters: { id = null } = {} }) => {
	try {
		const data = JSON.parse(body);
		const author = await Author.update(data, {
			where: { id },
			returning: true,
			plain: true,
		});
		return successResponse(author[1]);
	} catch (e) {
		return errorResponse(e);
	}
};

module.exports = update;
