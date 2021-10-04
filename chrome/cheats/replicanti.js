libcheat.toggleable(() => {
	for(const btn of document.getElementsByClassName('btn')) {
		if(btn.innerText.includes('Reset previous features')) continue;
		if(btn.innerText.includes('Gain') && btn.innerText.includes('Infinity Points')) continue;
		btn.click();
	}
}, 'auto upgrade');
libcheat.parametric((function() {
	let i = 0;
	return v => {
		if (!v) return;
		i += 50;
		if(i > v) {
			FORMS.inf.reset();
			i = 0;
		}
	}
})(), 'auto infinity');