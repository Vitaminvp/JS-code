function alphabetPosition(text) {
    const T = text
        .toUpperCase()
        .match(/[a-z]/gi)
        console.log("T", T);
    if(!T) T=[];
     return   T.map( (c) => c.charCodeAt() - 64)
        .join(' ');
}

console.log("alphabetPosition", alphabetPosition("The sunset sets at twelve o' clock."));