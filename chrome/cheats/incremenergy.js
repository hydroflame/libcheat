libcheat.task(libcheat.slowdown((function(){
	let t = 0;
	return function() {
		t = (t + 1) % 2;
		for(let i = 1; i <= 8; i++) {
			//toggleUltraChoice(i, 1+t);
		}
	}
	
})(), 1000));