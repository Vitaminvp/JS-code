function solution(N, S) {
    const taken = S.split(' ');
    console.log("taken", taken);
    let families = 0;
    for (let i = 1; i <= N; i++) {
        const sits = taken
            .filter(el => el.replace(/[A-K]/, '') === i.toString())
            .map(el => el[el.length - 1]);
        console.log("sits", sits);
        if (!sits.some(sit => 'ABC'.includes(sit))) families++;
        if (!sits.some(sit => 'HJK'.includes(sit))) families++;
        if (sits.some(sit => 'EF'.includes(sit)) || (sits.includes('D'))&& sits.includes('G')) continue;
        else {
            families++;
        }
    }
    return families;
}
str1 = '1A 2F 1C';
str2 = '1A 2D';
str3 = '1A 2D 2G';
str4 = '1K';
console.log("solution(2, str1)", solution(2, str1) === 4);
console.log("solution(2, str2)", solution(2, str2) === 5);
console.log("solution(2, str3)", solution(2, str3) === 4);
console.log("solution(1, str4)", solution(1, str4) === 2);
