import React, { Component } from "react";
import { nanoid } from "nanoid"
export default class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = { id: nanoid(), name, age }
        this.props.addPerson(personObj)
    }

    render() {
        return (
            <div>
                <h2>Person 组件,Count组件总和为:{this.props.count}</h2>
                <input ref={c => this.nameNode = c} placeholder="请输入姓名" />
                <input ref={c => this.ageNode = c} placeholder="请输入年龄" />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.person.map((p) => {
                            return <li key={p.id}>{p.name}-----{p.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

}