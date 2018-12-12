import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';
const state = {};

const controlSearch = async () => {
    const query = searchView.getInput();
    if(query){
        state.search = new Search(query);
        renderLoader(elements.searchResult);
        searchView.clearResults();
        await state.search.getResults();
        searchView.clearInput();
        console.log("state.search.recipes", state.search.recipes);
        searchView.renderResults(state.search.recipes);
        clearLoader();
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.resultsBtnPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goToPage = parseInt(btn.dataSet.goto);
        searchView.clearResults();
        searchView.renderResults(state.search.recipes, goToPage);
    }
});

