import axios from "axios";
import { message } from "antd";

export const addPost = (values) => async (dispatch) => {
  values.user = JSON.parse(localStorage.getItem("user"))._id;
  values.likes = [];
  values.comments = [];

  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post("/api/posts/addpost", values);
    dispatch({ type: "LOADING", payload: false });
    message.success("Post added successfully");
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("Something wrong!");
  }
};

export const getAllPosts = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const res = await axios.get("/api/posts/getallposts", values);
    dispatch({ type: "LOADING", payload: false });
    dispatch({ type: "GET_ALL_POSTS", payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const likeOrUnlikePost = (values) => async (dispatch) => {
  values.userid = JSON.parse(localStorage.getItem("user"))._id.toString();

  dispatch({ type: "LIKE_UNLIKE_LOADING", payload: true });
  try {
    await axios.post("/api/posts/likeorunlikepost", values);
    dispatch({ type: "LIKE_UNLIKE_LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LIKE_UNLIKE_LOADING", payload: false });
    message.error("Something wrong!");
  }
};
