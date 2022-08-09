import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../components/postCard/postCard.component";
import { Loading } from "../login/login.style";
import { Container, LinkHome } from "./filterCategories.style";

function FilterCategories() {

  let param = useParams();

  const [data, setData] = useState([]);
  const [error, setError] = useState({error: false, loading: false})

  useEffect(() => {
    (async function () {
      setError({loading: "loading"})
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
      if(!res.ok){
        setError({error: "error"})
      }
      let data = await res.json();
      setData(data.posts);
      setError({loading: false})

    })();
  }, [param]);

    
  
  
  return (
    <>
      <Container>
        <LinkHome to={-1}>Go To Back</LinkHome>
        {
          error.error && <b>Error</b>
        }
        {
          error.loading && <Loading>Loading...</Loading>
        }
        {data?.map((post) => (
          <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          category={post.category_name}
          time={post.created_time}
          />
          ))
        }
      </Container>
    </>
  );
}

export default FilterCategories;