import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 20px;
  position: relative;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 40px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  font-size: 40px;
`;
const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: white;
  font-size: 20px;
  font-weight: 600;
  color: gray;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`products/${item.category}`} >
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button> Shop now</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
