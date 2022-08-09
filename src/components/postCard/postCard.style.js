import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostItem = styled.li`
  list-style: none;
  padding-bottom: 17px;
  margin-bottom: 50px;
  border-bottom: 1px solid #dfdfdf;
`;
export const PostItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PostTime = styled.time`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #777777;
`;
export const PostCategory = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  color: #777777;
`;
export const PostItemDesc = styled.p`
  width: 544px;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  color: #474747;
`;
export const TimeWrapper = styled.span`
  display: flex;
  align-items: center;
`;
export const PostData = styled.p`
  margin: 0;
  margin-right: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #777777;
`;
export const PostItemLink = styled(Link)`
  text-decoration: none;
  color: #777777;
`
export const EditPost = styled(Link)`
  display: block;
  margin: 10px 0;
  width: 70px;
  padding: 12px;
  text-decoration: none;
  text-transform: capitalize;
  border: 2px solid #000;
  border-radius: 10px;
  font-weight: bold;
  color: #000;
`