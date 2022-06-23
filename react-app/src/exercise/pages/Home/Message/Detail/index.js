import React, { Component } from "react";
import { Link } from "react-router-dom";
import qs from 'qs'
export default class Detail extends Component {
    state = {
        detailData: [
            { id: "1", content: "我是1的详情" },
            { id: "2", content: "我是2的详情" },
            { id: "3", content: "我是3的详情" }
        ]
    }

    render() {
        // 从props中获取路由地址中传递的param参数
        const { id,title } = this.props.match.params

        //从props中获取Search参数
        // const {search} = this.props.location
        // const {id,title} =qs.parse( search.slice(1))

        //从props中获取state参数
        // const { id, title } = this.props.location.state
        // console.log(this.props.location.state);


        const resultContent = this.state.detailData.find((Obj) => {
            return Obj.id === id
        })
        return (
            <div>
                <li>{`Id是:${id} `}</li>
                <li>{`Title是:${title} `}</li>
                <li>{`Content是:${resultContent.content} `}</li>
            </div>

        )
    }
}