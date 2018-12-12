import axios from 'axios';
import {URL, KEY1, KEY2 } from '../../constants';

export default class Search{
    constructor(query){
        this.query = query;
    }
    async getResults() {
        try{
            const result = await axios(`${URL}?key=${KEY1}&q=${this.query}`);
            this.recipes = result.data.recipes;
            console.log("result.data.recipes", result.data.recipes);
        } catch(error) {
            console.error(error);
        }
    }
}


