import React from "react";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 30px;
  padding: 20px 40px;
  background-color: #e8e8e8;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.label`
  border: 0.5px solid black;
  border-radius: 20px;
  margin-left: 25px;
  padding: 5px;
  align-items: center;
  display: flex;
`;
const Input = styled.input`
  border: none;
  background-color: #e8e8e8;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const MenuItems = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/">
            <Logo>Thinh-E</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItems>Register</MenuItems>
          <MenuItems>Sign in</MenuItems>
          <MenuItems>
            <Link to='/cart'>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
