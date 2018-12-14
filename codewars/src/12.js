// const checkLogin = (str) => {
//     const s = String(str);
//     if(str.match(/[A-Ea-z0-9]/g).length === s.length && s.length >2 && s.length < 10)
//         return true;
//     return false;
// };

const checkNum = (str) => {
    const s = String(str);
    // return s.match(/[\d|.\+]+/g).join(', ');
    let arr2 = ["3/4 cups Fresh Basil Leaves",
    "1 1/2 cup Grated Parmesan Cheese",
    "3 Tablespoons Pine Nuts",
    "2 cloves Garlic, Peeled",
    "Salt And Pepper, to taste",
    "1/3 cup Extra Virgin Olive Oil",
    "1-1/2 cup Heavy Cream",
    "2 Tablespoons Butter",
    "1/4 cup Grated Parmesan (additional)",
    "12 ounces, weight Pasta (cavitappi, Fusili, Etc.)",
    "2 whole Tomatoes, Diced"];
    let arr = [
    "1-1/3 cup Shortening (may Substitute Butter)",
    "1-1/2 cup Sugar",
    "1 teaspoon Orange Zest",
    "1 teaspoon Vanilla",
    "2 whole Eggs",
    "8 teaspoons Whole Milk",
    "4 cups All-purpose Flour",
    "3 teaspoons Baking Powder",
    "1/2 teaspoon Salt",
    "2 jars (13 Ounces Each) Marshmallow Creme",
    "2 packages (8 Ounces Each) Cream Cheese",
    "Peaches",
    "Kiwi Fruit",
    "Blueberries",
    "2 Pears",
    "Raspberries",
    "Other Fruit Optional"
    ];
    const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
    const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
    return arr.map(item => {

            item = item.toLowerCase().replace(/ *\([^)]*\) */g, ' ');
            unitsLong.forEach((unit, i) => {
                item = item.replace(unit, unitsShort[i]);
            });

        const reg = new RegExp(/^[\d|/|\-| \+]+/g);
        const numFirst = item.match(reg);
        const str = item.replace(item.match(/^[\d|/|\-| \+]+/g) ? item.match(/^[\d|/|\-| \+]+/g)[0] : '', '').split(' ');
        let headerStr = '';
        let restStr = str.join(' ');
        for(let i = 0; i < unitsShort.length; i++){
            if(str[0].includes(unitsShort[i])){
                headerStr = unitsShort[i];
                restStr = str.splice(1).join(' ');
                break;
            }
        }
        return {
            num: numFirst ? eval(numFirst[0]
                    .trim()
                    .replace(' ', '+')
                    .replace('-', '+'))
                    .toFixed(2)
                : '',
            unit: headerStr,
            str: restStr
        }
    });
};

console.log("", checkNum('2 3/4 sd23424werwe446er7.4sdh456 89 88  .666'));