const uidivid = 'cheat_ui_div';
(function() {
	if(document.getElementById(uidivid)) return;
	const div = document.createElement('div');
	div.id = uidivid;
	div.style="border-width:3px;background-color:#333;border-style:solid;position:fixed;padding:7px;bottom:0;right:0;max-width:450px;z-index:999"
	document.body.appendChild(div);
})();

let tasks = [];

setInterval(()=>tasks.forEach(task => task()), 50);

const libcheat = {
	addTask: (task, toggleable=false, label="") => {
		if(toggleable) {
			const div = document.getElementById(uidivid);
			const box = document.createElement('input');
			const text = document.createElement('span');
			text.style.color = '#66FF33';
			text.innerText = label;
			box.setAttribute("type", "checkbox");
			div.appendChild(box);
			div.appendChild(text);
			div.appendChild(document.createElement('br'));
			const oldtask = task;
			task = () => {if(box.checked) oldtask()}
		}
		tasks.push(task);
	},
	clearTasks: () => tasks = [],
	addButton: (onClick, label) => {
		const div = document.getElementById(uidivid);
		const button = document.createElement('button');
		button.innerText = label;
		button.addEventListener('click', onClick);
		div.appendChild(button);
		div.appendChild(document.createElement('br'));
	},
	watch: (watcher) => {
		const div = document.getElementById(uidivid);
		const text = document.createElement('span');
		text.style.color = '#66FF33';
		text.innerText = "pending update";
		div.appendChild(text);
		div.appendChild(document.createElement('br'));
		tasks.push(()=> text.innerText = watcher());
	},
	paramTask: (task, label) => {
		const div = document.getElementById(uidivid);
		const text = document.createElement('span');
		text.style.color = '#66FF33';
		text.innerText = label;
		div.appendChild(text);
		const input = document.createElement('input');
		div.appendChild(input);
		div.appendChild(document.createElement('br'));
		tasks.push(()=> task(input.value));
	}
}

// This line is required for users who don't use the extension.
export libcheat;