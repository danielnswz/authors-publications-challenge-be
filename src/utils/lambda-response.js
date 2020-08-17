function lambdaResponse(json, statusCode) {
	return {
		statusCode,
		body: JSON.stringify(json),
	};
}

function errorResponse(json) {
	return lambdaResponse({
		json,
		statusCode: 500,
	});
}

function successResponse(json) {
	return lambdaResponse(
		{
			success: true,
			messages: [],
			payload: json,
		},
		200
	);
}

module.exports = {
	errorResponse,
	successResponse,
};
