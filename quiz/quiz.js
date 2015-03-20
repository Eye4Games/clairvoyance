
var errorMssgs;
window.onload = function()
{
	errorMssgs = document.getElementsByClassName("errorMessage");
	for (var i = 0; i < errorMssgs.length; i++)
	{
		errorMssgs[i].style.display = "none";
	}
}

var validate = function()
{
	for (var i = 0; i < errorMssgs.length; i++)
	{
		errorMssgs[i].style.display = "none";
	}
	var ghostScore = {
		'zhengi':0,
		'appleseed':0,
		'tut':0,
		'caesar':0,
		'evita':0,
		'sacagewea':0
	};

	var winner;
	var topScore = 0;
	var errors = false;
	for (var i = 0; i < 7; i++)
	{
		var answer = $('input[name=question' + (i + 1) + ']:checked').val();
		if (!answer)
		{
			errors = true;
			errorMssgs[i].style.display = "block";
		}
		ghostScore[answer]++;
		if (ghostScore[answer] > topScore)
		{
			winner = answer;
			topScore = ghostScore[answer];
		}
	}
	if (errors)
	{
		return;
	}
	window.open("http://clairvoyance.eye4games.com/quiz/results.html?choice=" + winner);
};
