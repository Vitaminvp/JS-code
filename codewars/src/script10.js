function wave(str){
    // let str = arguments[0];
    const el = str.split('');
    console.log("el", el);
    const res = el.map((item, i) => {
        if(item !== ' '){
            const element = [...el];
            element[i] = element[i].toUpperCase();
            console.log("element[i]", element.join(''));
            return element.join('');
        }
        return item;
    });
    return res;
}
console.log("wave(\"hello\")", wave("hello"));