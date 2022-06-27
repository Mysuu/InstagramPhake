import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HeartFilled, CommentOutlined } from "@ant-design/icons";
import moment from "moment";
import { getAllPosts, likeOrUnlikePost } from "../../redux/actions/postAction";
import "./Post.css";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const alreadyLiked = post.likes.find(
    (obj) => obj.user.toString() === currentUser._id
  );
  const { likeOrUnlikeLoading } = useSelector((state) => state.alertsReducer);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch, likeOrUnlikeLoading]);

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
          <HeartFilled
            style={{ color: alreadyLiked ? "red" : "grey" }}
            onClick={() => {
              dispatch(likeOrUnlikePost({ postid: post._id }));
            }}
          />
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
