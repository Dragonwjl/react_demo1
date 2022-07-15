import './index.less'
import React, { useState } from "react";
import IndexScreen from "../screens/login/index"
import Authenticated from "../authenticated"
import styled from "@emotion/styled"
import logo from '../assets/logo.svg'

const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div>
      {/* <Header/> */}
    
      {isLogin ? <Authenticated /> : <IndexScreen />}
      <button onClick={() => setIsLogin(!isLogin)}> 是否显示登录</button>
    </div>




  );
};

 const Header = styled.header`
  background:url(${logo}) no-repeat center;
  padding: 50px 0;
  background-size:80px
  
 `



export default App;
