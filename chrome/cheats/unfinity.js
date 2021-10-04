libcheat.toggleable(() => {
	tierGenerator(0);tetrGenerator(0)
	tierGenerator(1);tetrGenerator(1)
	tierGenerator(2);tetrGenerator(2)
	tierGenerator(3);tetrGenerator(3)
	tierGenerator(4);tetrGenerator(4)
	tierGenerator(5);tetrGenerator(5)
	tierGenerator(6);tetrGenerator(6)
	tierGenerator(7);tetrGenerator(7)
	tierMult()
	buyMax()
	tetrMult()
}, 'auto maxall');

libcheat.toggleable(()=> {
	buyMeta()
	tierMeta()
}, 'auto meta')

libcheat.parametric((function() {
	let i = 0;
	return v => {
		if (!v) return;
		i += 50;
		if(i > v) {
			transformPL();
			i = 0;
		}
	}
})(), 'auto pl');
