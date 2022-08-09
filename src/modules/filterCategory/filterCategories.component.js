import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../components/postCard/postCard.component";
import { Container, LinkHome } from "./filterCategories.style";

function FilterCategories() {

  let param = useParams();

  const [data, setData] = useState([]);

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
      setData(data.posts);
    })();
  }, [param]);

  return (
    <>
      <Container>
        <LinkHome to={-1}>Go To Back</LinkHome>
        {data?.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          category={post.category_name}
          time={post.created_time}
        />
      ))}
      </Container>
    </>
  );
}

export default FilterCategories;