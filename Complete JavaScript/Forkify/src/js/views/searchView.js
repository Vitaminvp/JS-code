import { elements } from './base';


export const getInput = () => elements.searchInput.value;
export const clearInput = () => elements.searchInput.value = '';
export const clearResults = () => {
    elements.searchResultList.innerHTML = '';
    elements.resultsBtnPages.innerHTML = '';
};

const limitRecipeTitle = (title, limit = 18) => {
    if(title.length >= limit){
        const arrTitle = title.split(' ');
        let cutTitle = '';
        for(let i=0; i < arrTitle.length; i++){
            if(cutTitle.length + arrTitle[i].length > limit){
                return cutTitle + ' ...';
            }
            cutTitle+= ' '+arrTitle[i];
        }
        return cutTitle;
    }
    return title;
};
const renderRecipes = recipe => {
    const murkup =  `<li>
                        <a class="results__link" href="#${recipe.recipe_id}">
                            <figure class="results__fig">
                                <img src="${recipe.image_url}" alt="{recipe.title}">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                                <p class="results__author">${recipe.publisher}</p>
                            </div>
                        </a>
                    </li>`;
    elements.searchResultList.insertAdjacentHTML('beforeend', murkup);
};
const createBtn = (page, type) => `
                                    <button class="btn-inline results__btn--${ type }" data-goto=${type === 'prev' ? page - 1 : page + 1}>
                                        <span>Page ${ type === 'prev' ? page - 1 : page + 1 }</span>
                                        <svg class="search__icon">
                                            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
                                        </svg>
                                    </button>
                                `;
const renderBtn = (page, sumResults, resPerPage) => {
    const pages = Math.ceil(sumResults/resPerPage);
    let btn;
    if(page === 1 && pages > 1){
        btn = createBtn(page, 'next');
    }else if (page === pages && pages > 1) {
        btn = createBtn(page, 'prev');
    }else if (page < pages){
        btn = `${createBtn(page, 'next')} ${createBtn(page, 'prev')}`;
    }
    if( sumResults > 0 )
        elements.resultsBtnPages.insertAdjacentHTML('afterbegin', btn);
};

export const renderResults = (recipes, currentPage = 1, resPerPage = 10) => {
    const start = (currentPage - 1)*resPerPage;
    const end = currentPage*resPerPage;
    if(recipes && recipes.length !== 0){
        recipes.slice(start, end).forEach(renderRecipes);
    }
    renderBtn(currentPage, recipes.length, resPerPage)
};
