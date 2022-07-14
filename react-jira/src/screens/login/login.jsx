import React from "react";
import { Form, Input ,Button} from 'antd'
const LoginScreen = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.currentTarget.elements[0].value
        const password = event.currentTarget.elements[1].value

    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Item
                name={"username"}
                rules={[{ required: true, message: "请输入用户名" }]}
            >
                <Input placeholder={"用户名"} type="text" id={"username"} />
            </Form.Item>
            <Form.Item
                name={"password"}
                rules={[{ required: true, message: "请输入密码" }]}
            >
                <Input placeholder={"密码"} type="password" id={"password"} />
            </Form.Item>
            <Form.Item>
            <Button htmlType={"submit"} type={"primary"}>登录</Button>
            </Form.Item>
            
        </Form>
    )
}


export default LoginScreen