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
  width: 40%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap:wrap;
`;
const Input = styled.input`
  flex:1;
  min-width: 40% ;
  margin: 20px 10px 0 0;
  padding: 10px;
  font-size: 15px;
`;
const Agreement = styled.span`
  font-size: 14px;
  padding: 20px 0;
`;
const ButtonRegister = styled.button`
  width: 45%;
  font-size: 20px;
  padding: 15px;
  background-color: teal;
  color: white;
  border-color: teal;
  cursor: pointer;
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE ACCOUNT</Title>
        <Form>
          <Input placeholder="First name" />
          <Input placeholder="Last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <ButtonRegister>CREATE</ButtonRegister>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
