function pairElement(str) {
    const arr = str.split('').map(item => {
        if(item == "A"){
            return [item, "T"];
        }else if(item == "T"){
            return [item, "A"];
        }else if(item == "C"){
            return [item, "G"];
        }else if(item == "G"){
            return [item, "C"];
        }
    });
    return arr;
}

pairElement("GCG");