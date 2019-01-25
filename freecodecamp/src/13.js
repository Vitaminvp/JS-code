function sumPrimes(num) {
    if(num === 1) return 0;
    const isPrime = (number) => {
        for(let i=2; i<=number; i++){
            if(number%i === 0 && number !== i) return false;
        }
        return true;
    };
    return !isPrime(num)?sumPrimes(num-1):num+sumPrimes(num-1);
}

console.log(sumPrimes(10));