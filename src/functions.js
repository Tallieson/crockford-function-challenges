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
    return function(){
            return x++
    }
}

function to(gen, lim){
    return function(){
        let val = gen()
        if (val < lim){
            return val
        }
    }
}

function fromTo(x, y){
    return function(){
        if(x < y)
        return x++
    }
}

function element(array, gen){
//     if (gen) {
//         return function(){
//             let val = gen()
//             return array[val]
//         }
//     }
//     else {
//         let x = -1
//         return function(){
//         x++
//         return array[x]
//         }
//     }
// }
    gen = gen || from(0)
    return function(){
        return array[gen()]
    }
}

function collect(gen, array){
    return function(){
        val = gen()
        if (val != undefined)
        {array.push(val)}
    return val
    }
}

function filter(gen, pred){
    return function(){
        while(true){
            val = gen()
            if (pred(val)){
                return val
            }
            else if(val === undefined){
                return undefined
            }
        }
    }
}


function concat(gen1, gen2){
    return function gen3(){
        let val = gen1()
        if(val !== undefined){
            return val
        }
        else{
            return gen2()
        }
    }
}

function repeat(gen){
    do{
        val = gen()
    }
        while(val !== undefined){
            return val
        }
    }


function gensymf(val){
    let int = 0
    return function(){
        int++ 
        return val + int
    }
}

