const {
	successResponse,
	errorResponse,
} = require('../../../utils/lambda-response');
const { Publication, Author } = require('../../../database/models');

/**
 * Find one publication by ID
 *
 * @param id
 * @returns {Promise<{body: string, statusCode: *}>}
 */
const findOne = async ({ pathParameters: { id } }) => {
	try {
		const publication = await Publication.findByPk(id, {
			include: [Author],
		});
		return successResponse(publication || {});
	} catch (e) {
		return errorResponse(e);
	}
};

module.exports = findOne;
