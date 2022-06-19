import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Table from "./components/table";
import { setLocalData, getLocalData } from "./utils"

class App extends React.Component {
    state = {
        status: "add",
        todoList: getLocalData(),
        filter: "all",
        search: ''
    }

    onkeydown = (e) => {
        if (e.keyCode === 13 & this.state.status === "add") {
            let data = getLocalData();
            if (e.target.value != '') {
                data.push({ title: e.target.value, done: false, id: data.length })
                this.setState(
                    {
                        todoList: data
                    }
                )
            }
            setLocalData(data);
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
        setLocalData(data)
    }



    render() {
        return (
            <div className="todolist">
                <Header onkeydown={this.onkeydown} status={this.state.status} />
                <Table search={this.state.search} onDataChange={this.changeData} filter={this.state.filter} todoList={this.state.todoList} />
                <Footer onStatusChange={this.changeStatus} filter={this.state.filter} status={this.state.status} />
            </div>
        )
    }
}

export default App