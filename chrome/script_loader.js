
// loadCheat is called once the library has been loaded, it's separated to avoid
// accidentally loading the cheats before the lib (which causes undefined
// libcheat)
function loadCheat(config) {
	// Create another script element to load the cheats specific for this game.
	const s = document.createElement('script');
	// the filename comes from the config directory.
	s.src = chrome.extension.getURL('cheats/'+config[location.href]);
	(document.head || document.documentElement).appendChild(s);
}

// loadLib is called once the config has been loaded, the first argument
// contains the map of url -> file.
function loadLib(config) {
	// Check if this website even has a cheat to load.
	if(!config[location.href]) return;

	// Create a new script element and load main libcheat in it.
	const libcheat = document.createElement('script');
	// the filename is hardcoded and comes with the extension.
	libcheat.onload = loadCheat;
	libcheat.src = chrome.extension.getURL('main.js');
	(document.head || document.documentElement).appendChild(libcheat);
}

// Get the mapping between the urls and file containing the relevant cheats.
// I'm sure there's a more recent way to do this but it works so who cares.
const configURL = chrome.extension.getURL('cheats/config.json');
const get = new XMLHttpRequest();
get.open("GET", configURL, true);
get.onload = function (e) {
	if (get.readyState === 4) {
		if (get.status === 200) {
			loadLib(JSON.parse(get.responseText));
		} else {
			console.error(get.statusText);
		}
	}
};
get.send(null);



