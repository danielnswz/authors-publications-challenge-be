const {
	successResponse,
	errorResponse,
} = require('../../../utils/lambda-response');
const { Publication } = require('../../../database/models');

/**
 * Destroy publication
 *
 * @param id
 * @returns {Promise<{body: string, statusCode: *}>}
 */
const destroy = async ({ pathParameters: { id } }) => {
	try {
		const publication = await Publication.findByPk(id);
		await publication.destroy();
		return successResponse(publication);
	} catch (e) {
		return errorResponse(e);
	}
};

module.exports = destroy;
