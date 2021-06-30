libcheat.toggleable(()=>[0, 1, 2, 3, 4, 5, 6, 7].forEach(x => researchBuy(x)), 'auto research');
libcheat.toggleable(()=>[0, 1, 2, 3, 4, 5].forEach(x => shopBuy(x)), 'auto shop');

function atMaxBase() {
	return game.base.eq(calcMaxBase());
}

function atMaxDigit() {
	return game.digits.eq(calcMaxDigit());
}

function atMaxNumber() {
	return game.base.pow(game.digits).sub(game.number).lessThanOrEqualTo(1);
}

function safeReboot() {
	if(!game.programActive[4]) activeProgram(4);
	reboot();
}

function forceRespect() {
	for(let i = 0; i < 10; i++) quantumUpgradeRespec();
}

function convertIdx(x) {
	for(let i = 0; i < 100; i++) {
		const idx = (Math.floor(i/qUpgradeData.row)+1) + (i%qUpgradeData.col+1)*10;
		if(idx===x) return i;
	}
	throw new Error('wtf' +x);
}

function autoSetup(setups) {
	let leastWaste = 99999999;
	let theSetup = [];
	for(const setup of setups) {
		let cost = 0;
		for(const upg of setup) {
			cost += getQuantumUpgradeCost(convertIdx(upg));
		}
		if(game.qubit.sub(cost).lt(0)) break;
		theSetup = setup;
	}

	forceRespect();
	for(const upg of theSetup) {
		buyQuantumUpgrade(convertIdx(upg));
	}
}

function replaceSing(i) {
	const positions = [
		[1, 0],
		[2, 1],
		[2, 2],
		[0, 2],
		[1, 0],
		[2, 1],
		[2, 2],
		[0, 2],
		[1, 0],
		[2, 1],
	];

	for(const pos of positions) {
		singularityGridClick(pos[0], pos[1], 'r');
	}
	selectedMachine = i;
	const m = Math.min(positions.length, getSingularityMachineHave(machineIdx[i]));
	for(let i = 0; i < m; i++) {
		singularityGridClick(positions[i][0], positions[i][1], 'l');
	}

	game.singularityGrid[21].rotate = 1;
	game.singularityGrid[22].rotate = 1;
	game.singularityGrid["02"].rotate = 3;
}

libcheat.toggleable(function() {
	if(calcMultiProcess()<5) {
		if(!game.programActive[0]) activeProgram(0);
		if(atMaxNumber() && !atMaxDigit() && !game.programActive[2]) activeProgram(2);
		if(atMaxDigit() && !atMaxBase() && !game.programActive[3]) activeProgram(3);
		if(atMaxDigit() && atMaxBase() && atMaxNumber() && !game.programActive[1]) activeProgram(1);
		if(game.money.mul(1e5).lt(calcMoneyGain()) && !game.programActive[1]) activeProgram(1);
	} else {
		const order = [0, 1, 2, 3, 4, 6, 5];
		for(let i = 0; i < Math.min(order.length, calcMultiProcess()); i++) {
			if(!game.programActive[order[i]]) activeProgram(order[i]);
		}
	}

	game.base.pow(game.digits).sub(game.number).lessThanOrEqualTo(1)
}, 'smart process');

libcheat.toggleable(function() {
	quantum()
}, 'smart quantum');
libcheat.toggleable(function() {
	singularity()
}, 'auto singularity');

libcheat.toggleable(function() {
	const rp = game.researchPoint.eq(0)?D(1):game.researchPoint
	if(rp.mul(1e5).lt(calcRPGain())) safeReboot();
	if(game.durability.lt(0.5)) safeReboot();
}, 'smart reboot');

libcheat.button(safeReboot, 'reboot');

libcheat.button(forceRespect, 'respect');

libcheat.button(function() {
	forceRespect();
	const extra = [35, 34, 33, 32, 31, 21, 11, 41, 51, 52, 42, 22, 12, 53, 43, 23, 13, 54, 44, 24, 14, 55, 45, 25, 15, 46, 56, 36, 26, 16, 71];
	for(const upg of extra) buyQuantumUpgrade(convertIdx(upg));
}, 'qubits');



const qlabsSetups = [
	[32, 23, 22, 21, 11],
	[32, 21, 11, 13, 23, 22],
	[32, 22, 21, 11, 12, 13, 23],
	[32, 22, 21, 11, 12, 13, 23, 24],
	[21, 11, 12, 22, 32, 23, 25, 13],
	[25, 23, 13, 12, 32, 22, 21, 11],
	[32, 22, 21, 11, 12, 25, 23, 13, 24],
	[25, 15, 23, 13, 12, 11, 21, 22, 32],
	[25, 15, 23, 13, 12, 11, 21, 22, 32],
	[15, 25, 32, 22, 21, 11, 12, 13, 23, 24],
	[26, 23, 22, 32, 21, 11, 12],
	[26, 32, 22, 21, 11, 12, 13, 23],
	[26, 25, 32, 22, 21, 11],
	[26, 25, 32, 22, 21, 11, 12],
	[26, 25, 23, 22, 32, 21, 11, 12],
	[26, 25, 32, 22, 21, 11, 12, 23, 13],
	[26, 25, 32, 22, 21, 11, 12, 13, 23, 24],
	[26, 25, 15, 13, 23, 22, 12, 11, 21, 32],
	[26, 25, 15, 32, 22, 21, 11, 12, 13, 23, 24, 14],
	[16, 26, 25, 32, 22, 21, 11, 12, 13, 23],
	[16, 26, 25, 14, 13, 23, 22, 12, 11, 21, 32],
	[16, 26, 25, 15, 13, 23, 12, 11, 21, 22, 32],
	[16, 26, 25, 15, 32, 22, 21, 11, 12, 13, 23, 14],
	[26, 16, 15, 25, 24, 14, 13, 23, 22, 12, 11, 21, 32],
	[36, 26, 16, 15, 25, 32, 22, 21, 11, 12, 23, 13],
	[36, 26, 16, 15, 25, 24, 14, 13, 23, 22, 12, 11, 21, 32],
];

libcheat.button(function() {
	autoSetup(qlabsSetups);
	const extra = [42, 43, 44, 45, 35, 34, 33, 31, 41, 51, 52, 53, 54, 55, 46, 56, 71, 37, 27, 17, 75];
	for(const upg of extra) {
		buyQuantumUpgrade(convertIdx(upg));
	}
}, 'qlabs');

const boosts = ["base","digit","money","rp","rspeed","speed", 'qubits'];
for(let i = 0; i < boosts.length; i++) {
	libcheat.button(()=> replaceSing(i), boosts[i]);
}