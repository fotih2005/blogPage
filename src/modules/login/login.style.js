import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1360px;
    width: 100%;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
`
export const LogoWrapper = styled.div`
    padding-top: 26px;   
`
export const FormWrapper = styled.div`
    display: block;
    margin-top: 250px;
    justify-content: center;
`
export const LoginTitle = styled.h2`
    font-size: 40px;
`
export const LoginForm = styled.form`
    position: relative;
    display: block;
    max-width: 350px;
`
export const InputLogin = styled.input`
    display: block;
    width: 300px;
    margin-bottom: 24px;
    padding: 12px 15px;
    border: none;
    border-radius: 5px;
    background-color: #f4f4f4;
`
export const FormBtn = styled.button`
    display: block;
    width: 330px;
    padding: 12px 15px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background-color: #000;
`
export const Loading = styled.b`
    position: absolute;
    right: 45%;
    left: 40%;
    top: 27%;
    font-size: 100px;
    color: #000;
`
export const Error = styled.b`
    width: 100%;
    position: absolute;
    right: 45%;
    left: 33%;
    top: 30%;
    font-size: 50px;
    color: #EE4B2B;
`