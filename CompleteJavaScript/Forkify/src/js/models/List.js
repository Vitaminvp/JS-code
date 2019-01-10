import uniqid from 'uniqid';

export default class List{
    constructor(){
        this.items =[];
    }

    addItems(count, unit, ingredient){
        const item ={
            id: uniqid(),
            count,
            unit,
            ingredient
        };
        this.items.push(item);
        return item
    }
    deleteItem(id){
        this.items.splice(this.items.findIndex(el => el.id.toString() === id.toString()), 1);
    }
    updateCount(id, newCount){
        this.items.find(el => el.id === id).count = newCount;
    }
}