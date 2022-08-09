import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Container } from "../../modules/filterCategory/filterCategories.style";
import Footer from "../footer/footer.component";
import Header from "../header/header";
import PostCardRender from "../postCard/postCardRender";
import CurrentPostCard from "./CurrentPostCard.component";
import { Loading } from "./currentPostCard.style";

function CurrentPost() {
  const param = useParams();
  const data = useFetch(`https://n36-blog.herokuapp.com/posts/${param.post}`);
  return (
    <>
      {data ? (
        <Container>
          <Header />
          <CurrentPostCard
            id={data.id}
            data={data.created_at}
            category={data.category_name}
            img={data.main_image_url}
            title={data.title}
            body={data.body}
          />
          <PostCardRender />
        </Container>
      ) : (
        <Loading>Loading...</Loading>
      )}
      <Footer/>
    </>
  );
}

export default CurrentPost;
