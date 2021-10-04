
// uidivid is the id of the content of the cheat window. It's used to insert the
// cheat ui elements.
const uidivid = 'cheat_ui_div';

// The list of tasks that need to be executed every frame.
const tasks = [];

// Every 50ms we run all tasks
const waitTime = 50;

// Setup the interval that does the execution
setInterval(() => tasks.forEach(task => task()), waitTime);

// Create the actual libcheat object.
export const libcheat = {
	// Add a task always executed.
	task: (f) => {
		tasks.push(f);
	},
	// Add a toggleable task.
	toggleable: (f, label, def = false) => {
		const div = document.getElementById(uidivid);
		const box = document.createElement('input');
		const text = document.createElement('span');
		text.style.color = '#66FF33';
		text.innerText = label;
		box.setAttribute("type", "checkbox");
		box.checked = def;
		div.appendChild(box);
		div.appendChild(text);
		div.appendChild(document.createElement('br'));
		tasks.push(() => {if(box.checked) f()});
	},
	// Add a button.
	button: (f, label) => {
		const div = document.getElementById(uidivid);
		const button = document.createElement('button');
		button.innerText = label;
		button.addEventListener('click', f);
		div.appendChild(button);
		div.appendChild(document.createElement('br'));
	},
	// Add a watched value.
	watch: (f) => {
		const div = document.getElementById(uidivid);
		const text = document.createElement('span');
		text.style.color = '#66FF33';
		text.innerText = "pending update";
		div.appendChild(text);
		div.appendChild(document.createElement('br'));
		tasks.push(()=> text.innerText = f());
	},
	// Add a parametric task.
	parametric: (f, label) => {
		const div = document.getElementById(uidivid);
		const text = document.createElement('span');
		text.style.color = '#66FF33';
		text.innerText = label;
		div.appendChild(text);
		const input = document.createElement('input');
		div.appendChild(input);
		div.appendChild(document.createElement('br'));
		tasks.push(()=> f(input.value));
	},
	slowdown: (f, ms) => {
		let counter = 0;
		return function() {
			counter += waitTime;
			if(counter < ms) return;
			counter = 0;
			f();
		}
	}
};


// This sets up the cheat window.
(function() {
	// CSS we'll use for the window. Give it a little POP.
	const cheatWindowCSS = `
	.cw * {
		background: 0 0;
		color: inherit;
		font-size: inherit;
		line-height: 1.2;
		vertical-align: middle;
		margin: 0;
	}
	.cw {
		opacity: 0.25;
		background: rgba(40,40,40,.8);
		box-shadow:0 0 0 1px #fff, 0 0 0 2px #000;
		color: lime;
		font-family: monospace;
		font-size: 14px;
		padding: 2px;
		position: absolute;
		z-index: 1e99;
	}
	.cw:hover {
		opacity: 1;
	}
	.cwhead {
		background: #555;
		font-size: 16px;
		color: #fff;
		text-align: center;
		padding: 0 25px;
	}
	.cwdrag {
		position: absolute;
		left: 1px;
		right: 1px;
		top: 1px;
		height: 18px;
		cursor: move;
	}`;

	function edgeDetection(cw) {
		const cs = window.getComputedStyle(cw);
		const position = {
			left: cw.offsetLeft,
			right: parseInt(cs.right),
			top: cw.offsetTop,
			bottom: parseInt(cs.bottom)
		};
		if (position.right < 0)
			cw.style.left = (position.left + position.right) + "px";
		if (position.bottom < 0)
			cw.style.top = (position.top + position.bottom) + "px";
		if (position.top < 0)
			cw.style.top = "0px";
		if (position.left < 0)
			cw.style.left = "0px";
	};

	function drag(e,cw) {
		e.preventDefault();
		let x = e.clientX;
		let y = e.clientY;
		let left = cw.offsetLeft;
		let top = cw.offsetTop;
		function mouseMove(e) {
			left+=e.clientX-x;
			top+=e.clientY-y;
			cw.style.left=left+'px';
			cw.style.top=top+'px';
			// reset right and bottom to avoid the window stretching
			cw.style.right='';
			cw.style.bottom='';
			x=e.clientX;
			y=e.clientY;
		};
		function mouseUp(e) {
			document.removeEventListener('mouseup', mouseUp)
			document.removeEventListener('mousemove', mouseMove)
		};
		document.addEventListener('mouseup', mouseUp)
		document.addEventListener('mousemove', mouseMove)
	};

	
	// Setup the styles.
	const st=document.createElement('style');
	document.head.appendChild(st);
	st.id = "cwstyle";
	st.innerText = cheatWindowCSS;

	// Setup the cheat window.
	let cw = document.createElement('div');
	document.body.appendChild(cw);
	cw.outerHTML = `
<div class="cw" id="libcheat-cw" style="bottom:0;right:0;">
	<h2 class="cwhead">
		<div class="cwdrag"></div>
		libcheat
	</h2>
	<div id="${uidivid}"></div>
</div>`;
	// Changing outerHTML breaks the old reference.
	cw = document.querySelector(`#libcheat-cw`);
	
	// add the drag function to the drag div.
	document.querySelector(`#libcheat-cw .cwdrag`).
		addEventListener('mousedown',e=>drag(e,cw));

	// Setup edge detection. Which clips the window back in bound if it goes
	// too far.
	window.setInterval(()=>edgeDetection(cw),100);
})();