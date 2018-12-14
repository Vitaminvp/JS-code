import axios from 'axios';
import {URL2, KEY1 } from '../../constants';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const result = await axios(`${URL2}?key=${KEY1}&rId=${this.id}`);
            console.log("result", result);
            const res = result.data.recipe;
            this.title = res.title;
            this.author = res.publisher;
            this.img = res.image_url;
            this.url = res.source_url;
            this.ingredients = res.ingredients;

        } catch (error) {
            console.error(error);
        }
    }

    calcTime() {
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    };

    calcServings() {
        this.servings = 4;
    }

    parseIngridients() {
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound', 'kg', 'g'];
        this.ingredients = this.ingredients.map(el => {
            //Удаление скобок с текстом (*)
            let ingridient = el.toLowerCase().replace(/ *\([^)]*\) */g, ' ');
            unitsLong.forEach((unit, i) => {
                ingridient = ingridient.replace(unit, unitsShort[i]);
            });
            //Поиск числа в начале строки
            const reg = new RegExp(/^[\d|/|\-| \+]+/g);
            const numFirst = ingridient.match(reg);
            const str = ingridient.replace(ingridient.match(/^[\d|/|\-| \+]+/g) ? ingridient.match(/^[\d|/|\-| \+]+/g)[0] : '', '').split(' ');
            let headerStr = '';
            let restStr = str.join(' ');

            for (let i = 0; i < unitsShort.length; i++) {
                if (str[0].includes(unitsShort[i])) {
                    headerStr = unitsShort[i];
                    restStr = str.splice(1).join(' ');
                    break;
                }
            }
            return {
                count: numFirst ? eval(numFirst[0]
                        .trim()
                        .replace(' ', '+')
                        .replace('-', '+'))
                        //.toFixed(2)
                    : '1',
                unit: headerStr,
                ingredient: restStr.trim()
            }
        });
    }
}


