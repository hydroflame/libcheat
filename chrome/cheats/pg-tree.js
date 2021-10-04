libcheat.toggleable(() => {
	for(const upg of document.getElementsByClassName('upg'))
		upg.click();
	for(const upg of document.getElementsByClassName('buyable'))
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