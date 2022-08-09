import { useSelector } from "react-redux";
import PostCard from "./postCard.component";

function PostCardRender() {

  let cards = useSelector(state => state.cards.cards.posts)

  return (
    <>
      {cards?.map((post) => (
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

export default PostCardRender;
