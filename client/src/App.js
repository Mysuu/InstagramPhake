import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Addpost from "./pages/Addpost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Spinner from "./components/Spin/Spin";
import { useSelector } from "react-redux";

function App() {
  const { loading } = useSelector((state) => state.alertsReducer);

  return (
    <div className="App">
      {loading && <Spinner />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addpost" element={<Addpost />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
