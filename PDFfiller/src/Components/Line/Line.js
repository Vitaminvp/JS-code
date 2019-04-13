import Component from "../Component";
import { Element } from "../Element";

class Line extends Component{
    constructor(host, props) {
        super(host, props);
    }
    render(){
        const { elements } = this.props;
        const fragment = document.createDocumentFragment();
        if(elements && Array.isArray(elements) ) {
            elements.forEach(props => {
                const elementDiv = document.createElement('DIV');
                new Element(elementDiv, {...props, updateTime: this.props.updateTime});
                fragment.appendChild(elementDiv);
            })
        }
        return fragment;
    }
}

export default Line;