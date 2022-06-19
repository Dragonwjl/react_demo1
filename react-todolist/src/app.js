import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Table from "./components/table";
import { getLocalStorageData, setLocalStorageData } from "./utils"

class App extends React.Component {
    state = {
        status: "add",
        todoList: getLocalStorageData(),
        filter: "all",
        search: '',
        listNum: getLocalStorageData().length
    }

    onkeydown = (e) => {
        if (e.keyCode === 13 & this.state.status === "add") {
            let data = getLocalStorageData();
            if (e.target.value != '') {
                data.push({ title: e.target.value, done: false, id: data.length })
                this.setState(
                    {
                        todoList: data
                    }
                )
            }
            setLocalStorageData(data);
            e.target.value = ''
        }
        else if (e.keyCode === 13 && this.state.status === "search") {
            this.setState(
                {
                    search: e.target.value
                }
            )
        }

    }


    changeStatus = (value, type) => {
        if (type === "btn-left") {
            this.setState(
                {
                    status: value,
                    search: ''
                }
            )

        } else {
            this.setState(
                {
                    filter: value
                }
            )
        }

    }

    changeData = (i) => {
        let data = this.state.todoList
        data[i].done = !data[i].done
        this.setState(data)
        setLocalStorageData(data)
    }

    changeListNum = (n) => {
        this.setState({
            listNum: (n > 0 ? n : 0)
        })
    }


    render() {
        return (
            <div className="todolist">
                <Header onkeydown={this.onkeydown} status={this.state.status} />
                <Table chanegListNum = {this.changeListNum}   listNum= {this.state.listNum} search={this.state.search} onDataChange={this.changeData} filter={this.state.filter} todoList={this.state.todoList} />
                <Footer  listNum= {this.state.listNum} onStatusChange={this.changeStatus} filter={this.state.filter} status={this.state.status} />
            </div>
        )
    }
}

export default App