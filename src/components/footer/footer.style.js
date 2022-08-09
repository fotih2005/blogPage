import styled from "styled-components"

import fogterBG from "../../assets/imges/Subtract.svg"

export const SiteFooter = styled.footer`
    background-image: ${fogterBG};
    background-repeat: no-repeat;
    background-position: 200px;
    background-color: #000;
`
export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 40px 0;
`
export const FooterLogo = styled.div``
export const FooterListWrapper = styled.div``
export const FooterList = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    color: #fff;   
`
export const ListItem = styled.li`
    :not(:last-child){
        margin-right: 100px;
    }
`
export const FooterItemList = styled.ul`
     margin: 0;
    padding: 0;
    list-style: none;
`
export const FooterItemCard = styled.li`
    margin-bottom: 15px;
`
export const FooterItemLink = styled.a`
    text-decoration: none;
    color: #fff;
`