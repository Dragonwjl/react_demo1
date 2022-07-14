import React, { useState } from "react";
import IndexScreen from "../screens/login/index"
import {ProjectListScreen} from "../screens/project-list/index"
const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div>
      {isLogin ? <ProjectListScreen /> : <IndexScreen />}
      <button onClick={() => setIsLogin(!isLogin)}> 是否显示登录</button>
    </div>




  );
};
export default App;
