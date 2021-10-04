libcheat.task(clickScrap)
libcheat.task(clickMagnet)
libcheat.task(clickSteelBeam)
libcheat.task(maxAllRMUs)
libcheat.task(maxAllRBUs)
libcheat.task(()=>buyStars('max'))
libcheat.task(()=>buyFactory('max', 1))
libcheat.task(()=>buyFactory('max', 0))
libcheat.toggleable(()=>buyMultiplicator('max'), 'm', true)

libcheat.toggleable(()=>{
	transformBoosters(Math.floor(Math.random()*6), 'half')
},'distribute')
libcheat.toggleable(()=>{
	steelBeamSacrifice();
	magnetSacrifice();
}, 'sac')
libcheat.toggleable(()=>{
	for(let i = 0; i < 28; i++)
	buyGoldenScrapUpgrade(i)
}, 'GoldenScrap')


libcheat.task(()=> {

	for(let i = 0; i < 16; i++)
		buyMagnetUpgrade(i)
	for(let i = 0; i < 8; i++)
		buyBrickUpgrade(i)
})

libcheat.toggleable(libcheat.slowdown(enterExitDecayverse, 1000), 'decay')
libcheat.toggleable(libcheat.slowdown(compression, 3500), 'compression')
libcheat.button(compression, 'compression')