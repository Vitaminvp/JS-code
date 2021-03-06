export const elements = {
    searchForm:       document.querySelector('.search'),
    searchInput:      document.querySelector('.search__field'),
    searchResultList: document.querySelector('.results__list'),
    searchResult:     document.querySelector('.results'),
    resultsBtnPages:  document.querySelector('.results__pages'),
    recipe:           document.querySelector('.recipe'),
    recipeDataPeople: document.querySelector('.recipe__info-data--people'),
    recipeCount:      document.querySelectorAll('.recipe__count'),
    shopping:         document.querySelector('.shopping__list'),
    likesField:       document.querySelector('.likes__field'),
    likesList:       document.querySelector('.likes__list')
};

export const elementStrings = {
    loader: 'loader'
};

export const renderLoader = target => {
    const loader = `<div class="${elementStrings.loader}">
                        <svg>
                            <use href="img/icons.svg#icon-cw"></use>
                        </svg>
                    </div>`;
    target.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if(loader) loader.parentNode.removeChild(loader);
};