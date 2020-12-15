// => ((x * a) * b) + c
// a = 2, b = 3, c = 4
function multiply(a, b) {
    return a * b;
}

// function multiplyTwo(a){
//     return multiply(a, 2);
// }

function multiplyX(x){
    return function(e){
        return multiply(a, x);
    }
}
// const multiplyTwo = multiply(2);
// const multiplyThree = multiplyX(3);
// const multiplyFour = multiplyX(4);

const add = (a, b) => a + b;

const addX = x => a => add(x, a);

const equation = (a, b, c) => x => ((x * a) * b) + c;
const formula = equation(2, 3, 4);
const x = 10;

const result = formula(x);

// console.log(result);


[multiplyTwo, multiplyThree, multiplyFour, addFour ].reduce(
    function (prevFunc, nextFunc){
        return function(value){
            return nextFunc(prevFunc(value));
        }
    },
    function(k) { return k; }
);




