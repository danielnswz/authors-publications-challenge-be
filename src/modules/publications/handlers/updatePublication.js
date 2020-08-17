const {
	successResponse,
	errorResponse,
} = require('../../../utils/lambda-response');
const { Publication } = require('../../../database/models');

/**
 * Update publication
 *
 * @param body
 * @param id
 * @returns {Promise<{body: string, statusCode: *}>}
 */
const update = async ({ body, pathParameters: { id = null } = {} }) => {
	try {
		const data = JSON.parse(body);
		const publication = await Publication.update(data, {
			where: { id },
			returning: true,
			plain: true,
		});
		return successResponse(publication[1]);
	} catch (e) {
		return errorResponse(e);
	}
};

module.exports = update;
