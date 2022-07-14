import React from "react";
 const LoginScreen = () => {
    const Login = ({username,password})=>{
        fetch('/login',{
            method:"POST",
            headers:{
                "Content-Type":'application/json'
            },
            body:JSON.stringify({username,password})

        }).then(async response => {
               
          })
    }
    const handleSubmit=(event)=>{
        event.preventDefault(); 
        const username = event.currentTarget.elements[0].value
        const password = event.currentTarget.elements[1].value
        Login({username,password})
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>  
                <label htmlFor="username">用户名:</label>
                <input type="text" id={'username'} />

            </div>
            <div>
                <label htmlFor="password">密码:</label>
                <input type="text" id={'password'} />
            </div>
            <button type={"submit"}>注册</button>
        </form>
    )
}


export default LoginScreen