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

function getImage(ctx) {
	const	imageLink = $('.posterColumn a img', ctx).attr('src');
	const regex = /(https\:\/\/m\.media-amazon\.com\/images\/M\/\w*(@@|@))|(\.jpg)/gi;

	return imageLink.match(regex).join('');
}

function getRating(ctx) {
	return +$('.imdbRating strong', ctx).text();
}

function getUrl(ctx) {
	const fullUrl = $('.titleColumn a', ctx).attr('href');
	const regex = /(\/title\/\w+\/)/gi;

	return 'https://www.imdb.com' + fullUrl.match(regex).join('');
}

module.exports = api