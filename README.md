# ext_cheat

This is a chrome extension that helps script html based games. Due to the nature
of the extension is needs to be installed with developper mode on, if you're
likely to make changes anyway.

To enable it you first need to create a cheat file under the `cheats/` folder.
Then you need to add an entry in `cheats/config.json`.

Then you need to reload the extension at `chrome://extensions`. 

Then open the game and hit the button for the extension in the top left corner.

Check out [this game](https://spotky1004.com/Calculator-Evolution/) to see it in
action.


const { libcheat } = await import('https://hydroflame.github.io/ext_cheat/lib/latest/main.js');