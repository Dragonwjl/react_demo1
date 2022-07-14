import React, { Component } from "react";
import { connect } from 'react-redux'
import { getDetail } from './store/actionCreators'
import {
    DetailWrapper,
    Header,
    Content
} from './style'

import { useParams, useLocation } from "react-router-dom";


//router6 从组件中获取路由参数
function propsRouteWithRouter(PropsRoute) {
    return (props) => {
        let params = useParams();
        const state = useLocation().state;
        params = Object.assign(params, state)
        return <PropsRoute {...props} params={params} />
    }
}
class Detail extends Component {
    componentDidMount() {
        this.props.getDetail(this.props.params.id)
    }

    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content
                    dangerouslySetInnerHTML={{ __html: this.props.content }}
                />
            </DetailWrapper>
        )
    }
}


export default propsRouteWithRouter(connect(
    state => ({
        title: state.detail.get('title'),
        content: state.detail.get('content')
    }),
    {
        getDetail: getDetail
    }
)(Detail)) 
