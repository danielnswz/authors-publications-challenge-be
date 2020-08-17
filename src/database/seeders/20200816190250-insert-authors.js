'use strict';

const casual = require('casual');

// AUTHORS NUMBER
const AUTHORS_NUMBER = 4;
// FAKE AUTHORS ARRAY
const fakeAuthors = [];

// GENERATE FAKE AUTHORS
for (let i = 0; i++ < AUTHORS_NUMBER; ) {
	const firstName = casual.first_name;
	const lastName = casual.last_name;
	fakeAuthors.push({
		firstName,
		lastName,
		email: `${firstName}_${lastName}@${casual.domain}`,
		createdAt: new Date(),
		updatedAt: new Date(),
		birthDate: casual.date('YYYY-MM-DD'),
	});
}

module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.bulkInsert('authors', fakeAuthors, {}),

	down: (queryInterface, Sequelize) =>
		queryInterface.bulkDelete('authors', null, {}),
};
