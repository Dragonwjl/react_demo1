import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
class Demo extends Component {

 
    state = {
        date: new Date().toLocaleTimeString()
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    deletes = () => {
        ReactDOM.createRoot(document.getElementById('divs')).unmount()
        debugger
        console.log("组件已经删除了");
    }


    render() {
        return (
            <div id='divs'>
                <h1 >{this.state.date}</h1>
                <div>{this.props.children[0]}</div>
                <div>{this.props.children[1]}</div>
                <button onClick={this.deletes} >删除时间显示</button>
            </div>

        )
    }
}


export default Demo