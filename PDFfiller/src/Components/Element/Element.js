import Component from "../Component";
import { DEFAULT_VALUES } from "../params";

class Element extends Component{
    constructor(host, props) {
        super(host, props);
        this.host = host;
    }
    componentWillMount(){
        this.state = {
            color: this.props.background || DEFAULT_VALUES.background
        }
    }
    componentDidMount(){
        setInterval(() => {
                return this.updateState({
                    color: Element.randomHsl(),
                });
            }, this.props.updateTime || DEFAULT_VALUES.delay);
    }
    static randomHsl(){
        return `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
    }
    render(){
        const { width } = this.props;
        const fragment = document.createDocumentFragment();
        this.host.style.background = this.state.color;
        this.host.style.width = width ? `${width}%` : DEFAULT_VALUES.width;
        return fragment;
    }
}

export default Element;