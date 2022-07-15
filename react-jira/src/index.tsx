import React from "react";
import ReactDom from "react-dom";
import {loadDevTools} from "jira-dev-tool"
import "antd/dist/antd.less"
import App from "ROOT/layout";

loadDevTools(()=>
ReactDom.render(<App />, document.getElementById("root"))
)

