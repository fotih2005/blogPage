import PostCardRender from "../../components/postCard/postCardRender";
import { Container, LinkHome } from "./filterCategories.style";

function FilterCategories() {
  return (
    <>
      <Container>
        <LinkHome to={-1}>Go To Back</LinkHome>
        <PostCardRender/>
      </Container>
    </>
  );
}

export default FilterCategories;
