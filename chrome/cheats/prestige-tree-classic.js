let { libcheat } = await import('https://hydroflame.github.io/libcheat/lib/latest/main.js');

libcheat.toggleable(() => {
	for(const upg of document.getElementsByClassName('upg'))
		upg.click();
}, 'auto upgrade');

libcheat.parametric((function() {
	let i = 0;
	return v => {
		if (!v) return;
		i += 50;
		if(i > v) {
			for(const r of document.getElementsByClassName('can reset')) {
				r.click();
			}
			i = 0;
		}
	}
})(), 'auto click');