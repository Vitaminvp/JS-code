import Component from "../Component";

class Element extends Component{
    constructor(host, props) {
        super(host, props);
        this.host = host;
    }
    componentWillMount(){
        this.state = {
            color: this.props.background || 'transparent'
        }
    }
    componentDidMount(){
        setInterval(() => {
                return this.updateState({
                    color: Element.randomHsl(),
                });
            }, this.props.updateTime);
    }
    static randomHsl(){
        return `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
    }
    render(){
        const { width } = this.props;
        const fragment = document.createDocumentFragment();
        this.host.classList.add('element');
        this.host.style.background = this.state.color;
        this.host.style.width = width ? `${width}%` : '50px';
        return fragment;
    }
}

export default Element;