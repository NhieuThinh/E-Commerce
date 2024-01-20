import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex:1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  font-size: 17px;
  padding: 15px;
`;
const Link = styled.a`
  margin: 0 0 10px 0;
  text-decoration: underline;
  font-size: 12px;
`
const ButtonLogin = styled.button`
  width: 45%;
  font-size: 20px;
  padding: 15px;
  background-color: teal;
  color: white;
  border-color: teal;
  cursor: pointer;
  margin: 15px 0px;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <ButtonLogin>lOG IN</ButtonLogin>
          <Link>
            DO NOT REMEMBER THE PASSWORD?
          </Link>
          <Link>
            CREATE A NEW ACCOUNT
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
