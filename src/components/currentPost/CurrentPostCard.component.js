import { useParams } from "react-router-dom";
import GetDate from "../../utils/getDate";
import {
  Category,
  Container,
  CurrentItem,
  CurrentList,
  Data,
  Delete,
  Desc,
  Img,
  MoreTitle,
  Title,
} from "./currentPostCard.style";

function CurrentPostCard(props) {
  const param = useParams();

  async function DeletePost() {
    let res = await fetch(
      `https://n36-blog.herokuapp.com/posts/${param.post}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1MzY3MGU4LTY3YzAtNGZiZi1hYmVjLTk2ZDUxMTQwMjM5YSIsInVzZXJfbmFtZSI6Ik51cnVsbG9oIiwidXNlcl9wYXNzd29yZCI6Im51cjIwMDR1YjE0IiwiaWF0IjoxNjU5NjQyNjUxfQ._dePGcyEQtGW5f9WgrYPM-Djpu4JnaXRYKx0fAwFbxo",
        },
      }
    );
    res = await res.json();
    console.log(res);
  }

  return (
    <>
      <Container>
        <CurrentList>
          <CurrentItem>
            <Delete onClick={DeletePost}>Delete Post</Delete>
            <Category>{props.category}</Category>
            <Title>{props.title}</Title>
            <Data>{GetDate(props.data)} | 3 minutes read</Data>
            <Img src={props.img} alt="Card Img" width={736} height={350} />
            <Desc>{props.body}</Desc>
          </CurrentItem>
        </CurrentList>
        <MoreTitle>More like this</MoreTitle>
      </Container>
    </>
  );
}

export default CurrentPostCard;
