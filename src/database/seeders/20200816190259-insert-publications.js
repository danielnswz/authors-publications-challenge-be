'use strict';

const casual = require('casual');

// MIN PUBLICATIONS NUMBER
const minPub = 25;
// MAX PUBLICATIONS NUMBER
const maxPub = 30;
// AUTHORS NUMBER
const AUTHORS_NUMBER = 4;
// GENERATE PUBLICATIONS RANDOM NUMBER
const randomPublicationsNumber =
	Math.floor(Math.random() * (maxPub - minPub)) + minPub;
// RANDOM DATES
function randomDate(start, end) {
	return new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
	);
}
// FAKE AUTHORS ARRAY
const fakePublications = [];

// GENERATE FAKE AUTHORS
for (let i = 0; i++ < randomPublicationsNumber; ) {
	fakePublications.push({
		title: casual.title,
		body: casual.text,
		createdAt: randomDate(new Date(2012, 0, 1), new Date()),
		updatedAt: new Date(),
		authorId: Math.floor(Math.random() * (AUTHORS_NUMBER - 1)) + 1, // Generate random authorId
	});
}

module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.bulkInsert('publications', fakePublications, {}),

	down: (queryInterface, Sequelize) =>
		queryInterface.bulkDelete('publications', null, {}),
};
