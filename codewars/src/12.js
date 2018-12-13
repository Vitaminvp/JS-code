// const checkLogin = (str) => {
//     const s = String(str);
//     if(str.match(/[A-Ea-z0-9]/g).length === s.length && s.length >2 && s.length < 10)
//         return true;
//     return false;
// };

const checkNum = (str) => {
    const s = String(str);
    return s.match(/[\d|.\+]+/g).join(', ');
};

console.log("", checkNum('234sd23424werwe446er7.4sdh456 89 88  .666'));