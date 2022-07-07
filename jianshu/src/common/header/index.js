import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CSSTransition } from "react-transition-group"
import { changeFocused, getList, changeMouseIn, changePage } from "../../redux/action"
import { logout } from '../../pages/login/store/actionCreators';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style'
class Header extends Component {

    handleInputFocus = (list) => {
        console.log("size", list.size);
        this.props.changeFocused({ focused: true })
        //判断list值 避免重复获取发送请求
        if (list.size === 0) { this.props.getList() }


    }
    handleInputBlur = () => {
        console.log("handleInputBlur ");
        this.props.changeFocused({ focused: false })
    }

    handleMouseEnter = () => {
        this.props.changeMouseIn({ mouseIn: true })
    }

    handleMousLeave = () => {
        this.props.changeMouseIn({ mouseIn: false })
    }
    handleChangePage = (page, totalPage, spin) => {
        //正则表达式获取当前旋转角度值
        let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
        //将字符串转化成数值
        if (originAngle) {
            originAngle = parseInt(originAngle, 10);
        } else {
            originAngle = 0;
        }
        spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
        if (page < totalPage) {
            this.props.changePage({ page: page + 1 })

        } else {
            this.props.changePage({ page: 1 })
        }
    }


    showSearchInfo = (show) => {
        const { list, page, totalPage, mouseIn } = this.props
        const newList = list.toJS();
        const pageList = [];

        if (newList.length) { //解决列表key值重复定义问题
            for (let index = (page - 1) * 10; index < page * 10; index++) {
                pageList.push(<SearchInfoItem key={newList[index]}>{newList[index]}</SearchInfoItem>)

            }
        }


        if (show || mouseIn) {
            return (
                <SearchInfo onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMousLeave} >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => this.handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => this.spinIcon = icon} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        <SearchInfoList>
                            {/* {
                                list.map((item) => {
                                    return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                })
                            } */}
                            {
                                pageList
                            }

                            {/* <SearchInfoItem>教育</SearchInfoItem>
                            <SearchInfoItem>生活</SearchInfoItem>
                            <SearchInfoItem>资讯</SearchInfoItem>
                            <SearchInfoItem>编程</SearchInfoItem>
                            <SearchInfoItem>心理</SearchInfoItem> */}
                        </SearchInfoList>
                    </div>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const { focused, list, login } = this.props

        return (
            <div>
                <HeaderWrapper>
                    <Link to={'/'}>
                        <Logo />
                    </Link>
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载App</NavItem>
                        {
                            login ? <Link to={'/login'}><NavItem onClick={this.props.logout} className='right'>退出</NavItem></Link> : <Link to={'/login'}><NavItem className='right'>登录</NavItem></Link>
                        }

                        <NavItem className='right'>
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition in={focused} timeout={200} classNames="slide" >
                                <NavSearch className={focused ? "focused" : ""}
                                    onFocus={() => this.handleInputFocus(list)}
                                    onBlur={this.handleInputBlur}>

                                </NavSearch>
                            </CSSTransition>
                            <i className={focused ? "focused iconfont zoom" : "iconfont zoom "}>&#xe614;</i>
                            {this.showSearchInfo(focused)}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Link to={'/write'}>
                            <Button className='writing'>
                                <i className="iconfont">&#xe615;</i>
                                写文章</Button>
                            <Button className='word'>注册</Button>
                        </Link>
                    </Addition>
                </HeaderWrapper>
            </div>
        )
    }
}

export default connect(
    state => ({
        focused: state.header.get('focused'),
        list: state.header.get('list'),
        page: state.header.get('page'),
        totalPage: state.header.get('totalPage'),
        mouseIn: state.header.get('mouseIn'),
        login: state.login.get('login')
    }),
    {
        changeFocused: changeFocused,
        getList: getList,
        changeMouseIn: changeMouseIn,
        changePage: changePage,
        logout: logout
    }

)(Header)