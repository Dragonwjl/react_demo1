import React, { Component } from "react"
import { connect } from "react-redux"
import "./index.css"
import { setLocalStorageData, getLocalStorageData } from "../../utils"
import { setListNum, setListData } from "../../redux/actions/table"
class Table extends Component {
    datas = {}
    componentDidUpdate(prevProps) {
        if (prevProps.table[0].value !== this.datas.length) {
            console.log("componentDidUpdate");
            this.props.table[0].value = this.datas.length
            this.props.setListNum(this.props.table)
            setLocalStorageData(this.props.table[1].value)
        }
    }

    componentDidMount() {
        this.props.table[0].value = this.datas.length
        this.props.setListNum(this.props.table)
        this.props.table[1].value = getLocalStorageData()
        this.props.setListData(this.props.table)
    }

    changeData = (i) => {
        let data = this.props.table[1].value
        data[i].done = !data[i].done
        this.props.setListData(this.props.table)
        setLocalStorageData(this.props.table[1].value)
    }

    render() {
        const { footer, header, table } = this.props
        let data = this.datas = table[1].value.filter((data) => {
            if (footer[1].title === "all") {
                return data && data.title.includes(header)
            } else if (footer[1].title === "active") {
                return data.done === false && data.title.includes(header)
            } else if (footer[1].title === "completed") {
                return data.done === true && data.title.includes(header)
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
                                                    this.changeData(value.id)
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


export default connect(
    //store中存储的值
    state => ({
        table: state.table,
        footer: state.footer,
        header: state.header
    }),
    {
        //相关操作方法
        setListNum: setListNum,
        setListData: setListData
    }
)(Table)