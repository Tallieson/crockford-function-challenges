const add = (num1, num2) => {
    return num1 + num2
}


const sub = (num1, num2) => {
    return num1 - num2
}


const mul = (num1, num2) => {
    return num1 * num2
}


const identity = (arg) => {
    return arg
}


const identityf = (arg) => {
    return function() {
        return arg
    }
}


const addf = (num1) => {
    return function(num2){
        return num1 + num2
        }
    }

// liftf takes in the function fn, which returns a function taking x as an arg
// which returns a function taking y as an arg, which returns the call of 
// fn passing in both x and y.
const liftf = (fn) => x => y => fn(x, y)

// curry is taking in the function fn, which returns a function which
// takes another arguement, which returns calling fn  with the 2 previous arguments.
// curry could return liftf as calling the function and variable passed into it
const curry = (fn, x) => y => fn(x, y)

// function twice(fn){
//     return function(x){
//         return fn(x, x)
//     }
// }

const twice = fn => x => fn(x, x)


function reverse(fn){
    return function flip(x, y){
    return fn(y, x)
    }
}

function composeu(fn, fn2){
    return function fn3(x){
        return fn2(fn(x))
    }
}

function composeb(fn, fn2){
    return function fn3(x, y, z){
        return fn2(fn(x, y), z)
    }
}

function limit(fn, x){
    it = 0
    return function (z, y){
        if (it < x){
            it += 1
            return fn(y, z)
        }
    }
}

function from(x){
    let it = 0
    return function(){
        if (it < 3){
            if (it == 0){
                it += 1
                return x
            }
            x += 1 
            it += 1
            return x
        }
    }
}

function to(x, lim){
    let it = x
    return function(){
        if (it < lim){
            if (it == x){
                it += 1
                return x
            }
            x += 1 
            it += 1
            return x
        }
    }
}