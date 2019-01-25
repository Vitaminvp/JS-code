function myReplace(str, before, after) {
    const beforeArr = before.split('');
    const afterArr = after.split('');
    if(beforeArr[0] === beforeArr[0].toUpperCase()){
        afterArr[0] = afterArr[0].toUpperCase();
    }

    return str.replace(before, afterArr.join(''));
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");