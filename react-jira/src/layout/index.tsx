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
      {isLogin ? <Authenticated isLogin={isLogin} setIsLogin={setIsLogin} /> : <IndexScreen isLogin={isLogin} setIsLogin={setIsLogin} />}
    </div>
  );
};

const Header = styled.header`
  background:url(${logo}) no-repeat center;
  padding: 50px 0;
  background-size:80px
  
 `



export default App;
