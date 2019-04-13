import Component from "../Component";
import Line from "../Line/Line";

class Lines extends Component {
    constructor(host, props) {
        super(host, props);
        this.props = props;
    }

    render() {
        const { lines } = this.props;
        const fragment = document.createDocumentFragment();

        if(lines && Array.isArray(lines) ) {
            const Height = window.innerHeight/lines.length;
            lines.forEach(props => {
                if(props.elements && Array.isArray(props.elements)){
                    const div = document.createElement('div');
                    div.style.background = props.background;
                    div.classList.add('line');
                    div.style.height = `${Height}px`;
                    new Line(div, props);
                    fragment.appendChild(div);
                }
            })
        }
        return fragment;
    }
}

export default Lines;