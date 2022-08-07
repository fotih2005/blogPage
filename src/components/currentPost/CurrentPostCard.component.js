import GetDate from "../../utils/getDate";
import { Category, Container, CurrentItem, CurrentList, Data, Desc, Img, MoreTitle, Title } from "./currentPostCard.style";

function CurrentPostCard(props) {
  return (
    <>
      <Container>
        <CurrentList>
          <CurrentItem>
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
