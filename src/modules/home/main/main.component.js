import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PostCardRender from "../../../components/postCard/postCardRender";
import { getCard } from "../../../store/reducer/cardsSlice";
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

  const dispatch = useDispatch()


  const [num, setCount] = useState(0)
  
  useEffect(() => {
    dispatch(getCard({num}))
  }, [num])



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
              <PagesBtn onClick={() => setCount(num + 1)}>&lt;</PagesBtn>
              <PagesBtn onClick={() => setCount(num - 1)}>&gt;</PagesBtn>
            </PagesWrapper>
          </SiteMainListWrapper>
        </SiteMainWrapper>
      </SiteMain>
    </>
  );
}

export default Main;
