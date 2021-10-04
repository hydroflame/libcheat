libcheat.toggleable(prestige, 'auto depth');
libcheat.toggleable(buyQuarkCharge, 'auto quark');
libcheat.toggleable(boostHadrons, 'auto hadron');
libcheat.task(maxAllUniUpgs);

libcheat.task(() => {
	for(const upg of document.getElementsByClassName('photonGenerator'))
		upg.click();


	for(const upg of document.querySelectorAll('.void.unlocked > .void.text'))
		upg.click();
});

libcheat.parametric((function() {
	let i = 0;
	return v => {
		if(!v) return;
		i += 50;
		if(i>v) {
			annihilate();
			i = 0;
		}

	}
})(), 'auto annihilation');