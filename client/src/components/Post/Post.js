import React from "react";
import { Link } from "react-router-dom";
import { HeartOutlined, CommentOutlined } from "@ant-design/icons";
import moment from "moment";
import "./Post.css";

const Post = ({ post }) => {
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
          <p>{moment(post.createdAt).format("MMM Do YY")}</p>
        </div>
      </div>
      <img src={post.image} className="post-image" alt="" />
      <p className="description">{post.description}</p>
      <div className="post-bottom">
        <div>
          <HeartOutlined />
          <p>{post.likes.length}</p>
        </div>
        <div>
          <CommentOutlined />
          <p>{post.comments.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
