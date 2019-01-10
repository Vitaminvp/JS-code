import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Like from './models/Like';

import * as likesView from './views/likesView';
import * as listView from './views/listView';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import { elements, renderLoader, clearLoader } from './views/base';
const state = {};
//window.s = state;
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
        recipeView.clearRecipe();
        renderLoader(elements.recipe);
        state.recipe = new Recipe(id);

        if(state.search)
            searchView.highlightSelected(id);

        // Для теста
        //window.r = state.recipe;

        try{
            await state.recipe.getRecipe();
            state.recipe.parseIngridients();


            state.recipe.calcTime();
            state.recipe.calcServings();
            clearLoader();
            recipeView.renderRecipe(
                state.recipe,
                state.likes.isLiked(id)
                );
        }catch (error){
            console.error(error);
        }
    }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/**
 * ************************************** LIST CONTROLLER ********************************************************
 */
const controlList = () => {
    if(!state.list){
        state.list = new List();
    }
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItems(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    })
};



elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;
    if(e.target.matches('.shopping__delete, .shopping__delete *')){
        state.list.deleteItem('id');
        listView.deleteItem(id);
    }else if(e.target.matches('.shopping__count-value')){
        const val = parseFloat(e.target.value);
        state.list.updateCount(id, val);
    }
});

/**
 * ************************************** LIKES CONTROLLER ********************************************************
 */

state.likes = new Like();
likesView.toggleLikeMenu(state.likes.getNumberOfLikes());

const controlLike = () => {
    if(!state.likes){
        state.likes = new Like();
    }
    const currentId = state.recipe.id;
    if(!state.likes.isLiked(currentId)){
        const newLike = state.likes.addLike(
            currentId,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        );
        likesView.renderLike(newLike);
        likesView.toggleLikeBtn(true);
    }else{
        state.likes.deleteLike(currentId);
        likesView.toggleLikeBtn(false);
        likesView.deleteLike(currentId);
    }
    likesView.toggleLikeMenu(state.likes.getNumberOfLikes());
};

window.addEventListener('load', ()=>{
    state.likes = new Like();
    state.likes.readStorage();
    likesView.toggleLikeMenu(state.likes.getNumberOfLikes());
    state.likes.likes.forEach(like => likesView.renderLike(like));
});

elements.recipe.addEventListener('click', e => {
   if(e.target.matches('.btn-decrease, .btn-decrease *')){
       if(state.recipe.servings > 1){
           state.recipe.updateServings('dec');
           recipeView.updateServingsIngredients(state.recipe);
       }
   }else if (e.target.matches('.btn-increase, .btn-increase *')){
       state.recipe.updateServings('inc');
       recipeView.updateServingsIngredients(state.recipe);
   }else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')){
        controlList();
   }else if(e.target.matches('.recipe__love, .recipe__love *')){
       controlLike();
   }
});
//window.l = new List();