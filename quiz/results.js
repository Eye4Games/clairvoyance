
var videos = {
	'zhengi':'https://www.kickstarter.com/projects/742911353/clairvoyance-card-game-a-battle-of-psychics-and-fu/widget/video.html',
	'appleseed':'https://www.kickstarter.com/projects/742911353/clairvoyance-card-game-a-battle-of-psychics-and-fu/widget/video.html',
	'tut':'https://www.kickstarter.com/projects/742911353/clairvoyance-card-game-a-battle-of-psychics-and-fu/widget/video.html',
	'caesar':'https://www.kickstarter.com/projects/742911353/clairvoyance-card-game-a-battle-of-psychics-and-fu/widget/video.html',
	'evita':'https://www.kickstarter.com/projects/742911353/clairvoyance-card-game-a-battle-of-psychics-and-fu/widget/video.html',
	'sacagewea':'https://www.kickstarter.com/projects/742911353/clairvoyance-card-game-a-battle-of-psychics-and-fu/widget/video.html'
};

window.onload = function () {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	if (vars.length != 1)
	{
		console.error("incorrect path to this page");
		return;
	}
	var input = vars[0].split("=");
	if (input[0] != "choice")
	{
		console.error("incorrect path to this page");
		return;
	}
	var character = input[1];
	if (!videos[character])
	{
		console.error("incorrect path to this page");
		return;
	}
	console.log(document.getElementById('resultsVideo'));
	document.getElementById('resultsVideo').src = videos[character];
};
