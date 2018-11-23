function parse( data )
{
    const arr =[];
    let value = 0;
    data.split('').map(item => {
        switch(item) {
            case 'i': value++;
                break;
            case 'd': value--;
                break;
            case 's': value = value**2;
                break;
            case 'o': arr.push(value);
                break;
            default: ;
        }
    });
    return arr;
}
console.log("parse(\"iiisdoso\") => [ 8, 64 ]", parse("iiisdoso"));