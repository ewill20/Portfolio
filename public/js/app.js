$(document).ready(function() {
	console.log("The document is ready and raring to go!");
});

// limited click listeners for homepage links //
$('#WebDevSS').on('click', function() {
	window.location = '/webPort';
})
$('experiencePanel').on('click', function() {
	window.location = '/experience';
})
$('educationPanel').on('click', function() {
	window.location = '/education';
})