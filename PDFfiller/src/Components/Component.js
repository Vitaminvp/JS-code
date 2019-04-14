class Component {
    constructor(host, props = {}) {
        this.host = host;
        this.props = props;
        this.state = {};
        this.componentWillMount();
        this._render();
        this.componentDidMount();
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    updateState(nextState) {
        this.state = Object.assign({}, this.state, nextState);
        this._render();
    }

    _render() {
        this.host.innerHTML = '';
        const content = this.render();
        this.host.appendChild(content);
    }

    render() {
        return this.host.innerHTML = 'You are not supposed to see this :)';
    }
}

export default Component;