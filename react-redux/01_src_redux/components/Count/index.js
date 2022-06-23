import React, { Component } from "react";
import store from "../../redux/store";
import { createIncrementAction, createDecrementAction ,createAnscIncrementAction} from "../../redux/count_action"
export default class Count extends Component {
    // state = {
    //     count: 0
    // }

    componentDidMount() {
        store.subscribe(() =>
            this.setState({})
        )
    }

    increment = () => {
        const { value } = this.selectNum
        store.dispatch(createIncrementAction(value * 1))
    }

    decrement = () => {
        const { value } = this.selectNum
        store.dispatch(createDecrementAction(value * 1))
    }

    incrementIfOdd = () => {
        const { value } = this.selectNum
        const count = store.getState()
        if (count % 2 != 0) {
            store.dispatch(createIncrementAction(value * 1))
        }
    }


    incrementAsync = () => {
        const { value } = this.selectNum
        // setTimeout(() => {
            store.dispatch(createAnscIncrementAction(value * 1,2000))
        // }, 2000)
    }
    render() {
        return (
            <div>
                <h1>当前求和为: {store.getState()}</h1>
                <select ref={c => this.selectNum = c} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment} >+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前和为奇数加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}