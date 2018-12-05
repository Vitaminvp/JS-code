const findMaxPalindrom = () => {
    const Primes = () => {
        const isPrime = num => {
            const max =  Math.floor(num/2);
            for (let j = 2; j < max; j++) {
                if (num % j === 0)
                    return false;
            }
            return true;
        };
        const arrOfPrimes = [];
        for (let i = 10000; i <= 99999; i++) {
            if(isPrime(i))  arrOfPrimes.push(i);
        }
        return arrOfPrimes;
    };
    const arrOfPrimes = Primes();
    const palindroms = {};
    for(let i=0; i < arrOfPrimes.length; i++){
        for(let j=i; j < arrOfPrimes.length; j++){
            const number = arrOfPrimes[i]*arrOfPrimes[j];
            if(String(number) === String(number).split('').reverse().join(''))
                palindroms[number]=[arrOfPrimes[i], arrOfPrimes[j]];
        };
    }
    return `${palindroms[Math.max(...Object.keys(palindroms))].join(' x ')} = ${Math.max(...Object.keys(palindroms))}`;
};


console.log(findMaxPalindrom());