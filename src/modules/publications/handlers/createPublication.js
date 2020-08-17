const {
	successResponse,
	errorResponse,
} = require('../../../utils/lambda-response');
const { Publication } = require('../../../database/models');

/**
 * Create publication
 *
 * @param body
 * @returns {Promise<{body: string, statusCode: *}>}
 */
const create = async ({ body }) => {
	try {
		const data = JSON.parse(body);
		const publication = await Publication.create(data);
		return successResponse(publication);
	} catch (e) {
		return errorResponse(e);
	}
};

module.exports = create;
