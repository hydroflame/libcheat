
function loadCheat(config) {
	if(!config[location.href]) return;
	const libcheat = document.createElement('script');
	libcheat.src = chrome.extension.getURL('lib/latest/main.js');
	(document.head || document.documentElement).appendChild(libcheat);

	const s = document.createElement('script');
	s.src = chrome.extension.getURL('cheats/'+config[location.href]);
	(document.head || document.documentElement).appendChild(s);
}

const configURL = chrome.extension.getURL('cheats/config.json');
const get = new XMLHttpRequest();
get.open("GET", configURL, true);
get.onload = function (e) {
	if (get.readyState === 4) {
		if (get.status === 200) {
			loadCheat(JSON.parse(get.responseText));
		} else {
			console.error(get.statusText);
		}
	}
};
get.send(null);



