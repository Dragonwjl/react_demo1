import React, { Component } from "react";
export default class Count extends Component {
    increment = () => {
        const { value } = this.selectNum
        this.props.increment(value * 1)

    }

    decrement = () => {
        const { value } = this.selectNum
        this.props.decrement(value * 1)

    }

    incrementIfOdd = () => {
        const { value } = this.selectNum
        if (this.props.count % 2 != 0) {
            this.props.increment(value * 1)
        }
    }


    incrementAsync = () => {
        const { value } = this.selectNum
        this.props.incrementAsync(value * 1, 2000)
    }
    render() {

        return (
            <div>
                <h1>当前求和为: {this.props.count},Person组件总人数是:{this.props.personNum}</h1>
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