import React, { Component } from "react";
import styles from './Vote.module.css';

class Vote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            mouseOverCounter: 0
        }
    }

    voted = () => {
        this.setState({
            counter: this.state.counter + 1
        })

    }

    mouseOver = () => {
        this.setState({
            mouseOverCounter: this.state.mouseOverCounter + 1
        })
    }

    render() {
        return (
            <div onClick={this.voted} className={styles.card} onMouseOver={this.mouseOver}>
                <h1>{this.props.candidate}</h1>
                <h4>{this.props.address}</h4>
                <h2>{this.state.counter}</h2>
                <p>{this.state.mouseOverCounter}</p>
            </div>
        );
    }
}

export default Vote;