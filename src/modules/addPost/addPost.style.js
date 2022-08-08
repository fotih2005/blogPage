import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormWrapper = styled.div`
    width: 400px;
    margin: 0 auto;
    margin-top: 200px;
    padding: 40px;
    border-radius: 10px;
    background-color: #f2f2f2;
`
export const AddForm = styled.form`
    display: block;
`
export const AddInput = styled.input`
    display: block;
    width: 350px;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 10px;
    border: 2px solid #000;
    border-radius: 10px;
`
export const AddPostBtn = styled.button`
    padding: 12px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    font-weight: bold;
    color: #fff;
    background-color: #000;
`
export const Cancel = styled(Link)`
    padding: 12px;
    border: none;
    margin-left: 200px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    background-color: #000;
`
export const AddPostTitle = styled.h3`
    margin: 0;
    margin-bottom: 30px;
    font-size: 30px;
`
export const ErrorMessage = styled.b`
    font-size: 30px;
    color: red;
`