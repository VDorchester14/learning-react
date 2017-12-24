import React, {Component} from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {

    constructor(props) {
        super(props);
        this.state = { greeting: 'Hello' };
        this.frenchify = this.frenchify.bind(this);
        this.englishify = this.englishify.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    englishify() {
        this.setState({ greeting: "Hello" });
    }

    frenchify() {
        this.setState({ greeting: 'Bonjour' });
    }

    removeGreeting() {
        this.props.removeGreeting(this.props.name);
    }
    
    render() {
        return (
            <div className="HelloWorld">
                {this.state.greeting} {this.props.name}!
                <br/>
                <button className="frenchify" onClick={this.frenchify}>Frenchify!</button>
                <button className="englishify" onClick={this.englishify}>Englishify!</button>
                <br/>
                <button className="removeMe" onClick={this.removeGreeting}>Remove Me!</button>
            </div>
        );
    }

}

export default HelloWorld;
