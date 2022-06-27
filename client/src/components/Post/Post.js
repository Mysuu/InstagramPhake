import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HeartFilled, CommentOutlined } from "@ant-design/icons";
import moment from "moment";
import {
  addComment,
  getAllPosts,
  likeOrUnlikePost,
} from "../../redux/actions/postAction";
import "./Post.css";
import { Col, Modal, Row, Input } from "antd";

const { TextArea } = Input;

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const alreadyLiked = post.likes.find(
    (obj) => obj.user.toString() === currentUser._id
  );
  const { likeOrUnlikeLoading, addCommentLoading } = useSelector(
    (state) => state.alertsReducer
  );
  const [commentModal, setCommentModal] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch, likeOrUnlikeLoading, addCommentLoading]);

  return (
    <div className="post-container">
      <div className="post-title">
        <div className="post-top">
          {post.user.profilePicUrl === "" ? (
            <span className="user-picture">{post.user.username[0]}</span>
          ) : (
            <img src={post.user.profilePicUrl} alt="" />
          )}
          <Link className="user-name" to="/user">
            {post.user.username}
          </Link>
        </div>
        <div className="">
          <p>{moment(post.createdAt).calendar()}</p>
        </div>
      </div>
      <img src={post.image} className="post-image" alt="" />
      <p className="description">{post.description}</p>
      <div className="post-bottom">
        <div>
          <HeartFilled
            style={{ color: alreadyLiked ? "red" : "grey" }}
            onClick={() => {
              dispatch(likeOrUnlikePost({ postid: post._id }));
            }}
          />
          <p>{post.likes.length}</p>
        </div>
        <div>
          <CommentOutlined
            onClick={() => {
              setCommentModal(true);
            }}
          />
          <p>{post.comments.length}</p>
        </div>
      </div>
      <Modal
        visible={commentModal}
        title="Comment"
        closable={false}
        width={900}
        okText="Add Comment"
        onOk={() => {
          dispatch(
            addComment({
              postid: post._id,
              comment: comment,
            })
          );
          setCommentModal(false);
          setComment("");
        }}
        onCancel={() => setCommentModal(false)}
      >
        <Row>
          <Col lg={13} xs={0}>
            <img src={post.image} height="400" width="450" alt="" />
          </Col>
          <Col lg={11} xs={24}>
            <TextArea
              placeholder="Add your comment here"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default Post;
