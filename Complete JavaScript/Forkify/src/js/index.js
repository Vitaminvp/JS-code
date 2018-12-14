import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';
const state = {};

/**
 * ************************************** SEARCH CONTROLLER ********************************************************
 */

const controlSearch = async () => {
    const query = searchView.getInput();
    if( query ){
        state.search = new Search(query);
        renderLoader(elements.searchResult);
        searchView.clearInput();
        searchView.clearResults();
        try{
            await state.search.getResults();
            searchView.renderResults(state.search.recipes);
            clearLoader();
        }catch(error){
            clearLoader();
            console.error(error);
        }

    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.resultsBtnPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    console.log("btn", btn);
    if(btn){
        const goToPage = parseInt(btn.dataset.goto);
        console.log("goToPage", goToPage);
        searchView.clearResults();
        searchView.renderResults(state.search.recipes, goToPage);
    }
});

/**
 * ************************************** RECIPE CONTROLLER ********************************************************
 */

const controlRecipe = async () => {
    const id = window.location.hash.replace('#', '');
    if(id){
        state.recipe = new Recipe(id);

        // Для теста
        window.r = state.recipe;

        try{
            await state.recipe.getRecipe();
            state.recipe.parseIngridients();
            state.recipe.calcTime();
            state.recipe.calcServings();
        }catch (error){
            console.error(error);
        }
    }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));