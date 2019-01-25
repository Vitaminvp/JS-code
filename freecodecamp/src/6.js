function translatePigLatin(str) {
    return str.replace(/^([aeiou])(.*)/, '$1$2way')
        .replace(/^([^aeiou]+)(.*)/,'$2$1ay');
}