import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import { getHomeInfo, toggleTopShow } from './store/actionCreators';
import { BackTop } from './style';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight

} from "./style";

class Home extends Component {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        this.props.getHomeInfo()
        this.bindEvents()
    }
    bindEvents() {
        window.addEventListener('scroll', this.changeScrollTopShow)
    }
    //判断是否显示返回顶部的功能
    changeScrollTopShow = () => {
        if (document.documentElement.scrollTop > 800) {
            this.props.toggleTopShow(true)
        } else {
            this.props.toggleTopShow(false)
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.changeScrollTopShow);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src="https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
            </HomeWrapper>

        )
    }
}

export default connect(
    state => ({
        showScroll: state.home.get('showScroll')
    }),
    {
        getHomeInfo: getHomeInfo,
        toggleTopShow: toggleTopShow
    }
)(Home)