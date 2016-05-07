
var authKey = "2595957b1f614595bb6d46f2084af190";

var search_term;
var numRecords;
var startYear;
var endYear;

// URL Base
var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey; 

$('button').on('click', function() {
	$.ajax({
	    url: queryURL,
	    method: 'GET'
	})
	.done(function(response) {
		console.log(response);
	});
});