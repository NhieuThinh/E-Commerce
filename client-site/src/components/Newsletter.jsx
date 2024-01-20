import React from 'react'
import styled from 'styled-components'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Container = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fcf5f5;
`
const Title = styled.h1`
    font-size: 70px;
    font-weight: 400;
`
const Desc = styled.p`
    font-size: 25px;
    margin: 20px;
    letter-spacing: 1px;
`
const InputContainer = styled.div`
    height: 50px;
    width: 50%;
    background-color: white;
    display: flex;
`
const Input = styled.input`
    flex:8;
    border: none;
    padding: 0 10px;
    font-size: 15px;
`
const Button = styled.button`
    flex: 1;
    background-color: teal;
    color: white;
    border: none;
    cursor: pointer;
`
const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder='Your email' />
            <Button>
                <SendOutlinedIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter