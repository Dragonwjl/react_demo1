import React from "react";
import { useState } from "react";
import RegisterScreen from  './register'
import LoginScreen  from "./login";
import {Card} from "antd"
import styled from "@emotion/styled"
import {useDocumentTitle} from '../../utils/index'
const IndexScreen = ( {isLogin, setIsLogin}) => {
  useDocumentTitle("登录页面")
    const [isRegister, setIsRegister] = useState(false);
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
          <Card>
          {isRegister?  "请注册" : "请登录"}
            {isRegister ? (
          <RegisterScreen  />
        ) : (
          <LoginScreen isLogin={isLogin}  setIsLogin={setIsLogin} />
        )}
           <Button type={"link"} onClick={() => setIsRegister(!isRegister)}> 
          {isRegister ? "已经有账号了？直接登录" : "没有账号？注册新账号"}
    </Button>
          </Card>
           
        </div>

    )
}
const Button = styled.div`
text-align: center;
margin-top:1rem;
cursor: pointer;
`


export default IndexScreen