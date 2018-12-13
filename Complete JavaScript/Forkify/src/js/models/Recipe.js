import axios from 'axios';
import {URL2, KEY1 } from '../../constants';

export default class Recipe{
    constructor(id){
        this.id = id;
    }
    async getRecipe() {
        try{
            const result = await axios(`${URL2}?key=${KEY1}&rId=${this.id}`);
            console.log("result", result);
            const res = result.data.recipe;
            this.title = res.title;
            this.author = res.publisher;
            this.img = res.image_url;
            this.url = res.source_url;
            this.ingredients = res.ingredients;

        } catch(error) {
            console.error(error);
        }
    }
    calcTime(){
        const numIng = this.ingredients.length;
        const periods = Math.ceil( numIng/3 );
        this.time = periods * 15;
    };
    calcServings(){
        this.servings = 4;
    }
     s.match(/^[\d,d|\\+]+/g).join(', ');
}


