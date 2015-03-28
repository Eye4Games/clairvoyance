
var characterData = {
	'zhengi':{
		'name': 'Zheng Shi',
		'video': 'https://www.youtube.com/embed/yvXOD3yp3xs',
		'intro': 'intro2'
	},
	'appleseed':{
		'name': 'Johnny Appleseed',
		'video': 'https://www.youtube.com/embed/XhOUP5My9SI',
		'intro': 'intro1'
	},
	'tut':{
		'name': 'Tutankhamun',
		'video': 'https://www.youtube.com/embed/lACsQGoyYEQ',
		'intro': 'intro1'
	},
	'caesar':{
		'name': 'Julius Caesar',
		'video': 'https://www.youtube.com/embed/D2uIzuRGfno',
		'intro': 'intro2'
	},
	'evita':{
		'name': 'Evita Peron',
		'video': 'https://www.youtube.com/embed/kMIYECJendc',
		'intro': 'intro2'
	},
	'sacagawea':{
		'name': 'Sacagawea',
		'video': 'https://www.youtube.com/embed/yl9XOuBI4T0',
		'intro': 'intro1'
	}
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
	if (!characterData[character])
	{
		console.error("incorrect path to this page");
		return;
	}
	document.getElementById('resultsVideo').src = characterData[character].video;
	document.title = "Quiz Results " + characterData[character].name +
		" | Clairvoyance: Psychic Battles, Also Furniture";

	document.getElementById(character + "Text").style.display = 'block';
	document.getElementById(characterData[character].intro).style.display = 'block';
};
