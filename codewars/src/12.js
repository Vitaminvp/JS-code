// const checkLogin = (str) => {
//     const s = String(str);
//     if(str.match(/[A-Ea-z0-9]/g).length === s.length && s.length >2 && s.length < 10)
//         return true;
//     return false;
// };

const checkNum = (str) => {
    const s = String(str);
    // return s.match(/[\d|.\+]+/g).join(', ');
    let arr = ["3/4 cups Fresh Basil Leaves",
    "1 1/2 cup Grated Parmesan Cheese",
    "3 Tablespoons Pine Nuts",
    "2 cloves Garlic, Peeled",
    "Salt And Pepper, to taste",
    "1/3 cup Extra Virgin Olive Oil",
    "1-1/2 cup Heavy Cream",
    "2 Tablespoons Butter",
    "1/4 cup Grated Parmesan (additional)",
    "12 ounces, weight Pasta (cavitappi, Fusili, Etc.)",
    "2 whole Tomatoes, Diced"]
    return arr.map(item => ({
        num: item.match(/^[\d|/|\-| \+]+/g) ? eval(item.match(/^[\d|/|\-| \+]+/g)[0]
                                                  .trim()
                                                  .replace(' ', '+')
                                                  .replace('-', '+'))
                                                  .toFixed(2)
            : '',
        string: item.replace(item.match(/^[\d|/|\-| \+]+/g)?item.match(/^[\d|/|\-| \+]+/g)[0] : '', '')
    }));
};

console.log("", checkNum('2 3/4 sd23424werwe446er7.4sdh456 89 88  .666'));