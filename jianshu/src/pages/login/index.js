import React, { Component } from 'react';
import { Navigate  } from 'react-router';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { login } from './store/actionCreators';

class Login extends Component {
    render() {
        const { loginStatus } = this.props;
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' innerRef={(input) => { this.account = input }} />
                        <Input placeholder='密码' type='password' innerRef={(input) => { this.password = input }} />
                        <Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
    
            return <Navigate  to='/' replace  />
        }
    }
}

export default connect(
    state => ({
        loginStatus: state.login.get('login')
    }),
    {
        login: login
    }
)(Login)