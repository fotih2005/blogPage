import { useDispatch } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import CurrentPost from "./components/currentPost/currentPost";
import AddPost from "./modules/addPost/addPost";
import FilterCategories from "./modules/filterCategory/filterCategories.component";
import Home from "./modules/home/home.component";
import Login from "./modules/login/login";
import { getPosts } from "./store/reducer/postSlice";


function App() {

  const dispatch = useDispatch()
  dispatch(getPosts())
  const token = localStorage.getItem("token");

    if (!token) {
      return <Login />;
    }
  return (
    <>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/category/:category" element={<FilterCategories />} />
          <Route path="/post/:post" element={<CurrentPost />} />
          <Route path="/add" element={<AddPost />} />
        </Routes>
    </>
  );
}

export default App;
