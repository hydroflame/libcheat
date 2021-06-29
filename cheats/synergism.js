function idClick(s) {
	document.getElementById(s).click();
}

libcheat.addTask(()=>{
	for(let i = 1; i <= 12; i++)
		idClick('antUpgrade'+i);
	for(let i = 1; i <= 10; i++)
		idClick('buyConstantUpgrade'+i);
	idClick('buyofferingpotion');
	idClick('useofferingpotion');
	idClick('buyobtainiumpotion');
	idClick('useobtainiumpotion');
}, true, 'auto everything');