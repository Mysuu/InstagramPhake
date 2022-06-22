import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Form.css";
import { userRegister } from "../redux/actions/userAction";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const register = (values) => {
    console.log(values);
    delete values.cpassword;
    dispatch(userRegister(values));
    navigate("/login");
  };

  return (
    <div>
      <Row justify="center" className="register-div">
        <Col lg={10} xs={24}>
          <Form
            layout="vertical"
            className="container-form"
            onFinish={register}
          >
            <h3>Register</h3>
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
            <Form.Item
              label="Confirm password"
              name="confirm password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
            <div>
              <span>
                <Link to="/login">Already registered? Click here to login</Link>
              </span>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
