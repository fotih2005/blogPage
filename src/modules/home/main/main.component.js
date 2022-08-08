import { Link } from "react-router-dom";
import PostCardRender from "../../../components/postCard/postCardRender";
import {
  AddNewPost,
  ArrowIcon,
  Explore,
  ExploreWrapper,
  ListTitle,
  PagesBtn,
  PagesWrapper,
  PostsList,
  SiteMain,
  SiteMainContent,
  SiteMainDesc,
  SiteMainListWrapper,
  SiteMainTitle,
  SiteMainWrapper,
} from "./main.style";

function Main() {
  return (
    <>
      <SiteMain>
        <SiteMainWrapper>
          <SiteMainContent>
            <SiteMainTitle>What I do!</SiteMainTitle>
            <SiteMainDesc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              aliquet, orci in bibendum luctus, turpis ante pretium velit, eu
              rutrum augue erat ac eros. Cras ultricies mattis convallis.
            </SiteMainDesc>
            <ExploreWrapper>
              <Explore>explore me</Explore>
              <ArrowIcon>&gt;</ArrowIcon>
            </ExploreWrapper>
            <AddNewPost to={"/add"}>Add New Post</AddNewPost>
          </SiteMainContent>
          <SiteMainListWrapper>
            <ListTitle>Recent Posts</ListTitle>
            <PostsList>
              <PostCardRender/>
            </PostsList>
            <PagesWrapper>
              <PagesBtn>&lt;</PagesBtn>
              <PagesBtn>&gt;</PagesBtn>
            </PagesWrapper>
          </SiteMainListWrapper>
        </SiteMainWrapper>
      </SiteMain>
    </>
  );
}

export default Main;
