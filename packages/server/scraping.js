const axios = require('axios');
const $ = require('cheerio');
const url = 'https://www.imdb.com/chart/tvmeter';

let api = [];

function getRanking(num) {
	return num + 1
}

function getName(ctx) {
	return $('.titleColumn a', ctx).text();
}

module.exports = api