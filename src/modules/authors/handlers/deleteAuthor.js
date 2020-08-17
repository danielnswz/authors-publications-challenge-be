const {
	successResponse,
	errorResponse,
} = require('../../../utils/lambda-response');
const { Author } = require('../../../database/models');

/**
 * Delete an author
 *
 * @param id
 * @returns {Promise<{body: string, statusCode: *}>}
 */
const remove = async ({ pathParameters: { id } }) => {
	try {
		const author = await Author.findByPk(id);
		await author.destroy();
		return successResponse(author);
	} catch (e) {
		return errorResponse(e);
	}
};

module.exports = remove;
