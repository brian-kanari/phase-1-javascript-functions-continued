// code your solution here

 function saturdayFun(activity){
    if (typeof activity === "undefined") {return ( 'This Saturday, I want to roller-skate!')} 
    else { return (`This Saturday, I want to ${activity}!`) }
 }

 function mondayWork(activity) {
    if (typeof activity === "undefined") {return ('This Monday, I will go to the office.')} 
    else {return(`This Monday, I will ${activity}.`)}
}

function wrapAdjective (highlight){
const string ='You are'
return function(adjective){
 if 
 (typeof adjective==='undefined') {console.log(`${string} special!`);} 
 else
 { console.log(`${string} ${highlight}${adjective}${highlight}!`); }
 return `${string} ${highlight}${adjective}${highlight}!`
}}

