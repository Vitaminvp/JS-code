import { elements } from './base';

export const renderItem = item => {
    const murkup = `<li class="shopping__item" data-itemid=${item.id}>
                        <div class="shopping__count">
                            <input type="number" value="${item.count}" step="${item.count}" class="shopping__count-value">
                            <p>${item.unit}</p>
                        </div>
                        <p class="shopping__description">${item.ingredient}</p>
                        <button class="shopping__delete btn-tiny">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-cross"></use>
                            </svg>
                        </button>
                    </li>`;
    elements.shopping.insertAdjacentHTML('beforeend', murkup);
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    if(item) item.parentElement.removeChild(item);
};