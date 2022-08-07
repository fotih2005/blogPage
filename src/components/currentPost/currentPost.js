import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Container } from "../../modules/filterCategory/filterCategories.style";
import Header from "../header/header";
import PostCardRender from "../postCard/postCardRender";
import CurrentPostCard from "./CurrentPostCard.component";

function CurrentPost() {
  const param = useParams();
  const data = useFetch(`https://n36-blog.herokuapp.com/posts/${param.post}`);
  return (
    <>
      {data ? (
        <Container>
          {" "}
          <Header />{" "}
          <CurrentPostCard
            id={data.id}
            data={data.created_at}
            category={data.category_name}
            img={data.main_image_url}
            title={data.title}
            body={data.body}
          />{" "}
          <PostCardRender />{" "}
        </Container>
      ) : (
        <b>Loading...</b>
      )}
    </>
  );
}

export default CurrentPost;
