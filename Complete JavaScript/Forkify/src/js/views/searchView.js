import { elements } from './base';


export const getInput = () => elements.searchInput.value;
export const clearInput = () => elements.searchInput.value = '';
export const clearResults = () => elements.searchResultList.innerHTML = '';
const limitRecipeTitle = (title, limit = 17) => {
    // if(title.length >= limit){
    //     const arrTitle = title.split(' ');
    //     let cutTitle = '';
    //     for(let i=0; i < arrTitle.length; i++){
    //         if(cutTitle.length + arrTitle[i].length > limit){
    //             return cutTitle + ' ...';
    //         }
    //         cutTitle+= ' '+arrTitle[i];
    //     }
    //     return cutTitle;
    // }
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
export const renderResults = recipes => {
    if(recipes)
        recipes.forEach(renderRecipes);
};
