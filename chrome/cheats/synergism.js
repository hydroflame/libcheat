function idClick(s) {
	document.getElementById(s).click();
}

libcheat.toggleable(()=>{
	for(let i = 1; i <= 12; i++)
		idClick('antUpgrade'+i);
	for(let i = 1; i <= 10; i++)
		idClick('buyConstantUpgrade'+i);
	idClick('buyofferingpotion');
	idClick('useofferingpotion');
	idClick('buyobtainiumpotion');
	idClick('useobtainiumpotion');
}, 'auto everything');

libcheat.button(() => {
	const save = JSON.parse(atob(window.localStorage.getItem('Synergysave2')));
	save.worlds = 1e99;
	window.localStorage.setItem('Synergysave2', btoa(JSON.stringify(save)));
	// We need to force reload.
	location.reload();
}, '+1e99 quarks');

libcheat.button(() => {
	for(let i = 1; i <= 7; i++)
		idClick('buyTalismanItem'+i);
}, 'buy all shards');