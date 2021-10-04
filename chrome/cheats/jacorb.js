libcheat.task(() => {
	buyUpg(1);
	buyUpg(2);
	buyUpg(3);
	buyUpg(4);
	buyPrestigeUpg(1);
	buyPrestigeUpg(2);
})

libcheat.parametric((function() {
	let i = 0;
	return function(v) {
		if(i>v) {
			i = 0;
			doPrestige();
		}
		i+=50;
	}
})(), 'prestige');

