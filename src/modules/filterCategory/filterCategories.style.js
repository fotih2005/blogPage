import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
        max-width: 1460px;
        width: 100%;
        margin: 0 auto;
        margin-top: 50px;
        padding-left: 20px;
        padding-right: 20px;
`
export const LinkHome = styled(Link)`
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    display: inline-block;
    padding: 20px 12px;
    margin-bottom: 30px;
    text-decoration: none;
    border-radius: 10px;
    font-weight: bold;
    color: #fff;
    background-color: #000;
    transition: all 0.3s ease;
`