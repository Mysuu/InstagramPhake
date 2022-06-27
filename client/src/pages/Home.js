import React, { useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions/postAction";
import { Col, Row } from "antd";
import Post from "../components/Post/Post";

const Home = () => {
  const { posts } = useSelector((state) => state.postsReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <DefaultLayout>
      <Row justify="center">
        <Col lg={12} xs={24}>
          {posts.map((post) => {
            return <Post key={post._id} post={post} />;
          })}
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default Home;
