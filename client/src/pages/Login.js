import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import "./Form.css";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/actions/userAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = (values) => {
    console.log(values);
    dispatch(userLogin(values));
    navigate("/");
  };

  return (
    <div>
      <Row justify="center" className="register-div">
        <Col lg={10} xs={24}>
          <Form layout="vertical" className="container-form" onFinish={login}>
            <h3>Login</h3>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
            <div>
              <span>
                <Link to="/register">
                  Don't have account? Click here to register
                </Link>
              </span>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
