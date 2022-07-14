import React from "react";
import { useState } from "react";
import RegisterScreen from  './register'
import LoginScreen  from "./login";
import {Card} from "antd"
const IndexScreen = () => {
    const [isRegister, setIsRegister] = useState(false);
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
          <Card>
          {isRegister?  "请注册" : "请登录"}
            {isRegister ? (
          <RegisterScreen />
        ) : (
          <LoginScreen />
        )}
           <button type={"link"} onClick={() => setIsRegister(!isRegister)}> 
          {isRegister ? "已经有账号了？直接登录" : "没有账号？注册新账号"}
    </button>
          </Card>
           
        </div>

    )
}


export default IndexScreen