import React from "react";
import { Form, Input ,Button} from 'antd'
 const RegisterScreen = () => {
    const Login = ({username,password})=>{
        fetch('/api/login',{
            method:"POST",
            headers:{
                "Content-Type":'application/json'
            },
            body:JSON.stringify({username,password})

        }).then(async response => {
               if(response.ok){
                
               }
          })
    }
    const handleSubmit=(event)=>{
        event.preventDefault(); 
        const username = event.currentTarget.elements[0].value
        const password = event.currentTarget.elements[1].value
        Login({username,password})
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
        <Button htmlType={"submit"} type={"primary"}>注册</Button>
        </Form.Item>
        
    </Form>
    )
}


export default RegisterScreen