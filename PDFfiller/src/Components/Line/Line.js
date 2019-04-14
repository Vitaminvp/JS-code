import Component from "../Component";
import { Element } from "../Element";
import {CLASSES} from "../params";

class Line extends Component{
    constructor(host, props) {
        super(host, props);
    }
    render(){
        const { elements, updateTime } = this.props;
        const fragment = document.createDocumentFragment();
        if(elements && Array.isArray(elements) ) {
            elements.forEach(elementProps => {
                const elementDiv = document.createElement('DIV');
                elementDiv.classList.add(CLASSES.element);
                new Element(elementDiv, {...elementProps, updateTime });
                fragment.appendChild(elementDiv);
            })
        }
        return fragment;
    }
}

export default Line;