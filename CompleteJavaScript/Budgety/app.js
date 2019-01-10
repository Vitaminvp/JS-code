const budgetController = (() => {
    const Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function (totalIncome) {
        this.percentage = totalIncome > 0 ? Math.round(this.value / totalIncome * 100) : -1;
    };

    Expense.prototype.getPercentage = function(){
        return this.percentage;
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
            data.percentage = data.totals.inc > 0 && data.totals.inc > data.totals.exp ? Math.round((data.totals.exp / data.totals.inc) * 100) : -1;
        },
        calculatePercentages(){
            data.allItems.exp.forEach(cur => cur.calcPercentage(data.totals.inc))
        },
        getPercentages(){
            const allPerc = data.allItems.exp.map(cur => cur.getPercentage());
            return allPerc;
        },
        deleteItem(type, id){
            data.allItems[type] = data.allItems[type].filter(item => item.id !== parseInt(id));
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
})();

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
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'

    };
    const formatNumbers = (number, type) => {
        number = Math.abs(number).toFixed(2);
        const [int, dec] = number.split('.');
        return (type === 'exp' ? '- ' : '+ ') + String(int).split("").reverse().join("")
            .replace(/(.{3}\B)/g, "$1 ")
            .split("").reverse().join("") + '.' + dec;

    };
    return {
        displayDate(){
            const manthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth();
            document.querySelector(DOMelements.dateLabel).textContent = manthArr[month] +' '+year;
        },
        changedType(){
            const fields = document.querySelectorAll(DOMelements.inputType+', '+DOMelements.inputDescription+', '+DOMelements.inputValue);
            Array.from(fields).forEach(item => {
                item.classList.toggle('red-focus');
            });
            document.querySelector(DOMelements.inputBtn).classList.toggle('red');
        },
        getInput() {
            return {
                type: document.querySelector(DOMelements.inputType).value,
                description: document.querySelector(DOMelements.inputDescription).value,
                value: parseFloat(document.querySelector(DOMelements.inputValue).value)
            }
        },
        getDOMelements(){
            return DOMelements;
        },
        displayPercentages(percentages){
            const fields = document.querySelectorAll(DOMelements.expensesPercLabel);
            Array.from(fields).forEach((current, i) => {
                current.textContent = percentages[i] > 0 ? percentages[i] + '%' : '-';
            });
        },
        distpayBudget(obj){
            document.querySelector(DOMelements.budgetLabel).textContent = formatNumbers(obj.budget, obj.budget<0?'exp':'');
            document.querySelector(DOMelements.incomeLabel).textContent = formatNumbers(obj.totalInc);
            document.querySelector(DOMelements.expensesLabel).textContent = formatNumbers(obj.totalExp, 'exp');
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
                                                <div class="item__value">${formatNumbers(obj.value)}</div>
                                                <div class="item__delete">
                                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                                </div>
                                            </div>
                                          </div>` :
                                        `<div class="item clearfix" id="exp-${obj.id}">
                                            <div class="item__description">${obj.description}</div>
                                            <div class="right clearfix">
                                                <div class="item__value">${formatNumbers(obj.value, 'exp')}</div>
                                                <div class="item__percentage">21%</div>
                                                <div class="item__delete">
                                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                                </div>
                                            </div>
                                        </div>`;
            document.querySelector(element).insertAdjacentHTML('beforeend', HTML);
        },
        deleteListItem(selectorID){
            const element = document.getElementById(selectorID);
            element.parentNode.removeChild(element);
        },
        clearFields(){
            const fields = document.querySelectorAll(DOMelements.inputDescription+', '+DOMelements.inputValue);
            Array.from(fields).map(field => field.value = '');
            fields[0].focus();
        }
    }
})();

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
            updatePersantages();
        }
    };
    const ctrlDeleteItem = (e) => {
        if (e.target.classList.contains('ion-ios-close-outline')){
            const selectorID = e.target.closest('.item').id;
            const [type, ID] = selectorID.split('-');
            budgetCtrl.deleteItem(type, ID);
            UICtrl.deleteListItem(selectorID);
            updateBudget();
            updatePersantages();
        }
    };
    const updatePersantages = () => {
        budgetCtrl.calculatePercentages();
        const percentages = budgetCtrl.getPercentages();
        UICtrl.displayPercentages(percentages);
        console.log("percentages", percentages);
    };
    const setupEventListeners = () => {
        const DOM = UICtrl.getDOMelements();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', (e) => {
            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        });
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);

    };
    return {
        init() {
            setupEventListeners();
            UICtrl.displayDate();
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