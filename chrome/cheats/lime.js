libcheat.toggleable(getLimesButton, 'auto lime');
libcheat.toggleable(eat, 'auto eat');
libcheat.toggleable(()=> {
    barStartGranularSkillBasic('rottenWisdom');
    barStartGranularSkillBasic('limebidextrous');
    barStartGranularSkillBasic('intelligence');
    barStartGranularSkillBasic('knifebidextrous');
}, 'auto skill');
libcheat.toggleable(()=>{makeMaxJuice();makeJuice();}, 'auto juice');
libcheat.toggleable(()=>{peelerPeelMax();peelerPeel();}, 'auto peel');
libcheat.toggleable(()=>{peelLime()}, 'auto knife');
libcheat.toggleable(()=>{sellYourJuice()}, 'auto sell juice');
libcheat.toggleable(()=>{payEmployee()}, 'auto pay');