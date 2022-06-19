import React, { Component } from "react"
import "./index.css"
class Table extends Component {
    datas = {}
    componentDidUpdate(prevProps) {
        if (prevProps.listNum !== this.datas.length) {

            this.props.chanegListNum(this.datas.length)
        }

    }

    render() {
        const { todoList, onDataChange, filter, search } = this.props
        let data = this.datas = todoList.filter((data) => {
            if (filter === "all") {
                return data && data.title.includes(search)
            } else if (filter === "active") {
                return data.done === false && data.title.includes(search)
            } else if (filter === "completed") {
                return data.done === true && data.title.includes(search)
            }
        })
        return (
            <ul className="list-unstyled">
                {
                    data.map(
                        (value) => {
                            return (
                                < li key={value.id} className="todo-item ui-state-default pending " >
                                    <div className="checkbox">
                                        <label style={value.done === true ? { textDecoration: "line-through", color: "#aaa" } : null}>
                                            <input type="checkbox"
                                                onClick={() =>
                                                    onDataChange(value.id)
                                                }
                                                defaultChecked={value.done} />
                                            {value.title}
                                        </label  >
                                    </div>
                                </li>
                            )
                        }
                    )
                }
            </ul >
        )
    }
}


export default Table