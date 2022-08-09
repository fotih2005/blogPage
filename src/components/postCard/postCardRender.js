import { useSelector } from "react-redux";
import PostCard from "./postCard.component";

function PostCardRender() {
  let cards = useSelector((state) => state.cards.cards.posts);

  let items = useSelector((state) => state.items.items);

  if (items.length > 0) {
    return (
      <>
        {
          items.map(item => <PostCard   key={item.id}  id={item.id}  title={item.title}  category={item.category_name}  time={item.created_at}
          />)
        }
      </>
    );
  }

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
