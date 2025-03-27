function isInteger(num){
    if (num%1===0) 
        console.log('true');
    else console.log('false');
}

isInteger(2);
isInteger(1.5);

let a=prompt("a");
let b=prompt("b");

function findPrimes(a, b) {
    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    console.log(`Прості числа в інтервалі [${a}, ${b}]:`);
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

findPrimes(a,b);