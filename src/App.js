import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "use-selector";
import CurrentPost from "./components/currentPost/currentPost";
import FilterCategories from "./modules/filterCategory/filterCategories.component";
import Home from "./modules/home/home.component";
import Login from "./modules/login/login";
import { getPosts } from "./store/reducer/postSlice";


function App() {

  useEffect(() => {
    (function () {
      const post = useSelector(state => state)
    console.log(post);
    })()
  })

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
        </Routes>
    </>
  );
}

export default App;
