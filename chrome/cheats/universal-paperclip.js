// Always make paperclips.
libcheat.task(()=>clipClick(1));

// Toggleable task to automatically buy wire when we have none.
libcheat.toggleable(() => {
	if(wire < 1) buyWire();
}, 'smart buy wire');

// Toggleable task to automatically buy clippers.
libcheat.toggleable(makeClipper, 'auto buy clipper');

// This is an actual cheat, you should not be able to get 1000 free wire.
libcheat.button(() => {
	wire += 10000;
}, 'add 1e4 wire');