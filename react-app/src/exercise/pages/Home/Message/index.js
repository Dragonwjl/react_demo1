import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
    state = {
        dataArr: [
            { id: "1", title: "我是1" },
            { id: "2", title: "我是2" },
            { id: "3", title: "我是3" }
        ]
    }

    render() {
        const { dataArr } = this.state
        return (
            <div>
                <ul>{
                    dataArr.map((data) => {
                        return (
                            <li key={data.id}>
                                {/* 向路由组件中传递param参数 */}
                                {/* <Link to={`/home/message/detail/${data.id}/${data.title}`}>{data.title}</Link> */}
                                {/*向路由组件中传递Search参数 */}
                                {/* <Link to={`/home/message/detail/?id=${data.id}&title=${data.title}`}>{data.title}</Link> */}
                                {/*向路由组件中传递state参数 */}
                                <Link to={{ pathname: "/home/message/detail", state: { id: data.id, title: data.title } }}>{data.title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <hr></hr>
                {/* 声明接收param参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}
                {/*Search和state参数无需声明接收 */}
                <Route path="/home/message/detail" component={Detail} />

            </div>


        )
    }
}