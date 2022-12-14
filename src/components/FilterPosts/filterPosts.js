import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../postCard/postCard.component";

function FilterPosts() {
  let param = useParams();

  const [data, setData] = useState([]);
  console.log(param);
   useEffect(() => {
    (async function () {
      let res = await fetch(
        "https://n36-blog.herokuapp.com/posts/bycategory?page=1",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            categoryname: !param.category ? "All" : param.category,
          },
        }
      );
      let data = await res.json();
      console.log(data);
      setData(data.posts);
    })();
  }, [param]);

  console.log(data);

  return (
    <>
      {data?.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          category={post.category_name}
          time={post.created_time}
        />
      ))}
    </>
  );
}

export default FilterPosts;
