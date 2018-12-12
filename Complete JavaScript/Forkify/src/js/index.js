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
        searchView.renderResults(state.search.recipes);
        clearLoader();
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();

    controlSearch();
});
// elements.searchForm.addEventListener('keypress', e => {
//     if(e.keyCode === 13) {
//         // e.preventDefault();
//         controlSearch();
//     }
// });



