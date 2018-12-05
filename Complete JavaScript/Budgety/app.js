
const UIController = (() => {
    const DOMelements = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container'

    };
    return {
        getInput() {
            return {
                type: document.querySelector(DOMelements.inputType).value,
                description: document.querySelector(DOMelements.inputDescription).value,
                value: parseFloat(document.querySelector(DOMelements.inputValue).value)
            }
        },
        getDOMelements(){
            return DOMelements
        },
        distpayBudget(obj){
            document.querySelector(DOMelements.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMelements.incomeLabel).textContent = '+ ' +obj.totalInc;
            document.querySelector(DOMelements.expensesLabel).textContent = '- ' +obj.totalExp;
            if( obj.percentage > 0 ){
                document.querySelector(DOMelements.percentageLabel).textContent = obj.percentage +'%';
            }
            else{
                document.querySelector(DOMelements.percentageLabel).textContent = '-';
            }
        },
        addListItem(obj, type) {
            const element = type ==='inc' ? DOMelements.incomeContainer : DOMelements.expensesContainer;
            const HTML = type ==='inc' ?`<div class="item clearfix" id="inc-${obj.id}">
                                            <div class="item__description">${obj.description}</div>
                                            <div class="right clearfix">
                                                <div class="item__value">+ ${obj.value}</div>
                                                <div class="item__delete">
                                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                                </div>
                                            </div>
                                          </div>` :
                                        `<div class="item clearfix" id="exp-${obj.id}">
                                            <div class="item__description">${obj.description}</div>
                                            <div class="right clearfix">
                                                <div class="item__value">- ${obj.value}</div>
                                                <div class="item__percentage">21%</div>
                                                <div class="item__delete">
                                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                                </div>
                                            </div>
                                        </div>`;
            document.querySelector(element).insertAdjacentHTML('beforeend', HTML);
        },
        clearFields(){
            const fields = document.querySelectorAll(DOMelements.inputDescription+', '+DOMelements.inputValue);
            Array.from(fields).map(field => field.value = '');
            fields[0].focus();
        }
    }
})();

const budgetController = ((UICtrl) => {
    const Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    const Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    const calculateTotal = (type) => {
        const summ = data.allItems[type].reduce((acc, item) => acc + item.value, 0);
        data.totals[type] = summ;
        return summ;
    };
    const data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };
    return {
        addItem(type, des, value) {
            const ID = data.allItems[type].length > 0 ? data.allItems[type][data.allItems[type].length - 1].id + 1 : 0;
            const newItem = type === 'exp' ? new Expense(ID, des, value) : new Income(ID, des, value);
            data.allItems[type].push(newItem);
            return newItem;
        },
        calculateBudget(){
            data.budget = calculateTotal('inc') - calculateTotal('exp');
            data.percentage = data.totals.inc > 0 ? Math.round(data.totals.exp / data.totals.inc * 100) : -1;
        },
        deleteItem(type, id){
            data.allItems[type] = data.allItems[type].filter(item => parseInt(item.id) !== parseInt(id));
            data.budget = calculateTotal('inc') - calculateTotal('exp');
            data.percentage = data.totals.inc > 0 ? Math.round(data.totals.exp / data.totals.inc * 100) : -1;
            UICtrl.distpayBudget({
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            });
        },
        getData() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        }
    }
})(UIController);


const controller = ((budgetCtrl, UICtrl) => {
    const updateBudget = () => {
        budgetCtrl.calculateBudget();
        UICtrl.distpayBudget(budgetController.getData());
    };
    const ctrlAddItem = () => {
        const input = UICtrl.getInput();
        if(input.description !== '' && !isNaN(input.value) && input.value > 0){
            const newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            UICtrl.addListItem(newItem, input.type);
            UICtrl.clearFields();
            updateBudget();
            console.log("getData", budgetController.getData());
        }
    };
    const ctrlDeleteItem = (e) => {
        if (e.target.classList.contains('ion-ios-close-outline')){
            const [type, ID] = e.target.closest('.item').id.split('-');
            budgetCtrl.deleteItem(type, ID);
        }
    };
    const setupEventListeners = () => {
        const DOM = UICtrl.getDOMelements();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', (e) => {
            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        });
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem)
    };
    return {
        init() {
            setupEventListeners();
            UIController.distpayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
        }
    }
})(budgetController, UIController);

controller.init();