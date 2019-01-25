function spinalCase(str) {
    let string = str.replace(/ *<[^>]*> */g, '')
                    .replace(/ *[-_] */g, ' ');
    console.log("string", string);
    const newString = string.split('').map((item, i, arr) => {
        if(item === item.toUpperCase() && i > 0 && arr[i-1] != ' ')
            return ` ${item}`;
        return item;
    }).join('').replace(/ +/g, ' ') ;
    console.log("newString", newString);
    return newString.split(' ').map(item => item.toLowerCase()).join('-');
}



console.log(spinalCase("thisIsSpinal<wbr>Tap")); //should return "this-is-spinal-tap".
console.log(spinalCase("The_Andy_<wbr>Griffith_Show")); //should return "the-andy-griffith-show".
console.log(spinalCase("AllThe-small Things")); // should return "all-the-small-things".