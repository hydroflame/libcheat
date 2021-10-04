setInterval(() => {
	for(let i = 0; i < 7; i++)
		LIQUIDS.fill(i);
}, 150);

setInterval(() => {
	for(let i = 0; i < 9; i++)
		UPGS.buy('upgs', i);
}, 150);