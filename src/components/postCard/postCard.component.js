import GetDate from "../../utils/getDate";
import {
  EditPost,
  PostCategory,
  PostData,
  PostItem,
  PostItemDesc,
  PostItemHeader,
  PostItemLink,
  PostTime,
  TimeWrapper,
} from "./postCard.style";

function PostCard(props) {
  return (
    <>
      <PostItem data-id={props.id}>
        <PostItemHeader>
          <PostTime dateTime={GetDate(props.time)}>
            {GetDate(props.time)}
          </PostTime>
          <PostCategory>{props.category}</PostCategory>
        </PostItemHeader>
        <PostItemDesc>
          <PostItemLink to={`post/${props.id}`}>{props.title}</PostItemLink>
        </PostItemDesc>
        <TimeWrapper>
          <PostData>3 minutes read</PostData>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.16751 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.16751 1.25 10C1.25 14.8325 5.16751 18.75 10 18.75Z"
              stroke="#777777"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 5V10L12.5 12.5"
              stroke="#777777"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </TimeWrapper>
        <EditPost to={`edit/${props.id}`}>edit post</EditPost>
      </PostItem>
    </>
  );
}

export default PostCard;
