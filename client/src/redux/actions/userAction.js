import axios from "axios";
import { message } from "antd";

export const userRegister = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post("/api/users/register", values);
    dispatch({ type: "LOADING", payload: false });
    message.success("User registered successfully");
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("Something wrong!");
  }
};

export const userLogin = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const res = await axios.post("/api/users/login", values);
    dispatch({ type: "LOADING", payload: false });
    message.success("Login success");
    localStorage.setItem("user", JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("Invalid credentials!");
  }
};
