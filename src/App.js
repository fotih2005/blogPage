import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CurrentPost from "./components/currentPost/currentPost";
import Edit from "./components/editPost/editPost";
import AddPost from "./modules/addPost/addPost";
import Explore from "./modules/explore/explore.component";
import FilterPosts from "./modules/filterCategory/filterCategories.component";
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
          <Route path="/category/:category" element={<FilterPosts />} />
          <Route path="/post/:post" element={<CurrentPost />} />
          <Route path="/add" element={<AddPost />} />
          <Route path="/edit/:id" element={<Edit/>} />
          <Route path="/explore" element={<Explore/>} />
        </Routes>
    </>
  );
}

export default App;