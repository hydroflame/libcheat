libcheat.toggleable(getLimesButton, 'auto lime', true);
libcheat.toggleable(eat, 'auto eat');
libcheat.toggleable(()=> {
    barStartGranularSkillBasic('rottenWisdom');
    barStartGranularSkillBasic('limebidextrous');
    barStartGranularSkillBasic('intelligence');
    barStartGranularSkillBasic('knifebidextrous');
}, 'auto skill', true);
libcheat.toggleable(()=>{makeMaxJuice();makeJuice();}, 'auto juice', true);
libcheat.toggleable(()=>{peelerPeelMax();peelerPeel();}, 'auto peel', true);
libcheat.toggleable(()=>{peelLime()}, 'auto knife', true);
libcheat.toggleable(()=>{sellYourJuice()}, 'auto sell juice', true);
libcheat.toggleable(()=>{payEmployee()}, 'auto pay', true);