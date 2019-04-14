import Component from "../Component";
import Line from "../Line/Line";
import {CLASSES} from "../params";

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
            lines.forEach(lineProps => {
                if(lineProps.elements && Array.isArray(lineProps.elements)){
                    const div = document.createElement('div');
                    div.style.background = lineProps.background;
                    div.classList.add(CLASSES.line);
                    div.style.height = `${Height}px`;
                    new Line(div, lineProps);
                    fragment.appendChild(div);
                }
            })
        }
        return fragment;
    }
}

export default Lines;