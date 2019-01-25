function fearNotLetter(str) {
    const strArr = str.split('');
    const first = strArr[0].charCodeAt(0);
    const last = strArr[strArr.length-1].charCodeAt(0);
    //console.log("first, last", first, last);
    for(let i = 0; i < strArr.length-1; i++){
        if(strArr[i].charCodeAt(0) !== (strArr[i+1].charCodeAt(0) - 1)){
            return String.fromCodePoint(strArr[i].charCodeAt(0)+1);
        }
    }

    return undefined;
}

console.log(fearNotLetter("abce"));