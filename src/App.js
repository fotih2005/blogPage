import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CurrentPost from "./components/currentPost/currentPost";
import Edit from "./components/editPost/editPost";
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
          <Route path="/edit/:id" element={<Edit/>} />
        </Routes>
    </>
  );
}

export default App;