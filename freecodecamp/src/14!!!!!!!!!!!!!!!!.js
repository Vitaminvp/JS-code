function smallestCommons(arr) {
    const range = [];
    for (let i = Math.max(arr[0],arr[1]); i>= Math.min(arr[0],arr[1]); i--){
        range.push(i);
    }
    function gcd(x,y) {
        return y===0?x:gcd(y,x%y);
    }
    let lcm = range[0];
    for(let i=1; i<range.length; i++){
        const GCD = gcd(lcm, range[i]);
        lcm = lcm * range[i]/GCD;
    }
    return lcm;
}