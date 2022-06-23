import { Button, Col, Form, Input, Row } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions/postAction";
import DefaultLayout from "../components/DefaultLayout";
import "./Form.css";

const { TextArea } = Input;

const Addpost = () => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const addPostForm = (values) => {
    values.image = image;
    dispatch(addPost(values));
  };

  return (
    <DefaultLayout>
      <Row justify="center">
        <Col lg={12}>
          <Form
            layout="vertical"
            className="container-form"
            onFinish={addPostForm}
          >
            <h1>Add new post</h1>
            <hr />
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true }]}
            >
              <TextArea />
            </Form.Item>
            <Form.Item name="image" label="Image" rules={[{ required: true }]}>
              <Input type="file" onChange={handleFileInput} />
            </Form.Item>
            {image !== "" && (
              <img src={image} height="200" width="200" alt="" />
            )}
            <br />
            <div style={{ marginTop: "10px" }}>
              <Button type="primary" htmlType="submit">
                Post
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default Addpost;
