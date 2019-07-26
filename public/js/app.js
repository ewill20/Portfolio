$(document).ready(function() {
	console.log("The document is ready and raring to go!");
});

// click listeners for homepage links //
$("#WebDevSS").click(function() {
	$(this).hide();
});
$('experiencePanel').on('click', function() {
	window.location = '/experience';
});
$('educationPanel').on('click', function() {
	window.location = '/education';
});
