
function ownloop(val, testFunc, updateFunc, bodyFunc){

    for (let i = val; testFunc(i) ; i = updateFunc(i))
        bodyFunc(i);
}

ownloop(3, n => n > 0, n => n - 1, console.log);