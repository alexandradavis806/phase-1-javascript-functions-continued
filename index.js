// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

// saturdayFun("bathe my dog");
// console.log(saturdayFun());
// console.log(saturdayFun("bathe my dog"))


function mondayWork(todo = "go to the office") {
    return `This Monday, I will ${todo}.`;
}

// console.log(mondayWork());


function wrapAdjective(param = "*") {
    return function(single = "special") {
        return `You are ${param}${single}${param}!`
    }
}

console.log(wrapAdjective('*')('a hard worker'))
console.log(wrapAdjective('||')('a dedicated programmer'));