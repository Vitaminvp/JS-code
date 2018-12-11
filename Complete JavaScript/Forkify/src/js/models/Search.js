import axios from 'axios';
import {URL, KEY1, KEY2 } from '../../constants';

export default class Search{
    constructor(query){
        this.query = query;
    }
    async getResults(query) {
        try{
            const result = await axios(`${URL}?key=${KEY1}&q=${this.query}`);
            this.recipes = result.data.recipes;
            console.log("recipes", this.recipes);
        } catch(error) {
            console.error(error);
        }
    }
}


