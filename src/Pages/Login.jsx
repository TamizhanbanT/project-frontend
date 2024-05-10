import React from 'react'
import { Row, Col, Form, Input, Button, message } from "antd"
import axios from "axios"
import { API } from '../global'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
  const onFinish=(values)=>{
        console.log("value"+values)
       /*  render link vekkanum */
       axios.post(`${API}/users/login`, values) .then((res) => {
        if(res.data.message=="Login Failed"){
            console.log(res.data)
            message.error("Invalid Detail")
            }
        else{
            message.success("Login Success")
        localStorage.setItem("user_data", JSON.stringify(res.data))
        navigate("/Dashboard")

        }}).catch((err) => {
        message.error("Invalid Detail")
    })  

    } 

    function gg(){

        navigate("/Signup")

        console.log("jj")
    }

  return (
    <div>
         <Row>
                <Col lg={12} >
                    <Form onFinish={onFinish} >
                        <h1 className='text-center'>Tamizh Shirts</h1>
                        <h4>Login</h4>
                        <Form.Item name="EmailId" label="Email ID">
                            <Input id="EmailId" placeholder="123@gmail.com" />
                        </Form.Item>

                        <Form.Item name="password" label="Password">
                            <Input id="password" placeholder="password" />
                        </Form.Item>

                        <Button htmlType="submit" type="primary">Login</Button>
                    </Form>
                    
                   <Button onClick={()=>{gg()}}>Signup</Button>
                </Col>
            </Row>  
    </div>
    
  )
}

export default Login