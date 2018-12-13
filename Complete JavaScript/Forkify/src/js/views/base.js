export const elements = {
    searchForm:       document.querySelector('.search'),
    searchInput:      document.querySelector('.search__field'),
    searchResultList: document.querySelector('.results__list'),
    searchResult:     document.querySelector('.results'),
    resultsBtnPages:  document.querySelector('.results__pages')
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