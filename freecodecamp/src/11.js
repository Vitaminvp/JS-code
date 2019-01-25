function convertHTML(str) {
    // &colon;&rpar;
    const html = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&rt;',
        '\"': '&quot;',
        '\'': '&aqos;'
    };
    return str.split('').map(item => html[item] || item).join('');
}

console.log(convertHTML("Dolce & Gabbana"));