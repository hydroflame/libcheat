function get(name) {
	return Array.prototype.slice.call( document.getElementsByTagName('div') ).find(d=>d.getAttribute('name') === name)
}

function click(name) {
	get(name).click();
}

function auto(name) {
	libcheat.toggleable(() => click(name), 'auto '+name);
}

auto('Plank')
auto('Log')
auto('Charcoal')
auto('Copper')
auto('Iron')
auto('Gold')
auto('Volcano')
auto('Pump')
auto('Metalwork Factory')
auto('Generator')
auto('Brick')
auto('Wall')
auto('House')
auto('Glass')
auto('Steam')
auto('Trap')
auto('Animal')
auto('Treasure Map')
auto('Loot')
auto('Axe')
auto('Saw')
auto('Divine Powder')