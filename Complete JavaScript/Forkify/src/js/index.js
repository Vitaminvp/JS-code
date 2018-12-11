import Search from './models/Search';

const state = {};

const controlSearch = async () => {
    const query = 'pizza';
    if(query){
        state.search = new Search(query);
        await state.search.getResults();
        console.log("state.search.result", state.search.recipes);
    }
};

const btn = document.querySelector('.search');
btn.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

// search.getResults();


