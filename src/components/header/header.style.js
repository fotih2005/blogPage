import { Link } from "react-router-dom";
import styled from "styled-components";

export const SiteHeader = styled.header`
  margin-bottom: 80px;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;
export const HeaderLogoWrapper =styled.div`
    padding: 0;
`
export const SiteNav = styled.nav``

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;   

`
export const SiteNavCards = styled.li`
    &:not(:last-child){
        margin-right: 30px;
    }   
`
export const SiteNavLink = styled(Link)`
    text-decoration: none;
    color: #9a9a9a;
`
export const SearchInput = styled.input`
    padding: 11px 14px;
    width: 210px;
    height: 100%;
    border: none;
    border-radius: 5px;
    background-color: #f4f4f4;
`
export const SearchIcon = styled.button`
    padding: 10.5px 12px;
    height: 100%;
    margin-left: -7px;
    border-radius: 5px;
    background-color: #ffba9d;
`