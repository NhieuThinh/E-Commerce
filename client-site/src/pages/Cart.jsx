import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 0 20px 20px 20px;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 300;
  font-size: 40px;
  margin: 10px;
`;
const Top = styled.div`
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TopButton = styled.button`
  padding: 15px;
  font-size: 20px;
`;
const TopTexts = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
`;
const TopText = styled.span`
  text-decoration: underline;
`;
const Bottom = styled.div`
  display: flex;
`;
const Info = styled.div`
  flex: 5;
  margin-right: 20px;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff7f5;
  border-radius: 25px;
  margin-bottom: 3px;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 250px;
  margin-right: 20px;
`;
const Details = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const NameProc = styled.span``;
const IdProc = styled.span``;
const ColorProc = styled.div`
  height: 22px;
  width: 22px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const SizeProc = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const PlusAmount = styled.span`
  font-size: 40px;
`;
const Amount = styled.div`
  font-size: 30px;
  height: 40px;
  width: 40px;
  border-radius: 15%;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  margin: 0 10px;
`;

const MinusAmount = styled.span`
  font-size: 40px;
`;
const Price = styled.div`
  font-size: 35px;
  margin: 10px;
`;
const Summary = styled.div`
  flex: 2;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 55vh;
  display: flex;
  flex-direction: column;
`;
const SumTitle = styled.span`
  display: flex;
  justify-content: center;
  font-size: 35px;
  margin-bottom: 30px;
`;
const SumInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const SumItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => (props.type === "total" ? "40px" : "25px")};
`;
const SumText = styled.span``;
const SumPrice = styled.span``;
const ButtonSum = styled.button`
  font-size: 20px;
  width: 100%;
  padding: 12px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const quantity = useSelector((state) => state.cart.quantity);
  const total = useSelector((state) => state.cart.total);


  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({quantity})</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <NameProc>
                      <b>Product: </b>{product.title}
                    </NameProc>
                    <IdProc>
                      <b>ID:</b> {product._id}
                    </IdProc>
                    <ColorProc color={product.color} />
                    <SizeProc>
                      <b>Size: </b>{product.size}
                    </SizeProc>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <AmountContainer>
                    <PlusAmount>+</PlusAmount>
                    <Amount>{product.quantity}</Amount>
                    <MinusAmount>-</MinusAmount>
                  </AmountContainer>
                  <Price>$ {product.price*product.quantity}</Price>
                </PriceDetail>
              </Product>
            ))}
          </Info>
          <Summary>
            <SumTitle>ORDER SUMMARY</SumTitle>
            <SumInfo>
              <SumItem>
                <SumText>Subtotal</SumText>
                <SumPrice>$ {total}</SumPrice>
              </SumItem>
              <SumItem>
                <SumText>Shipping price</SumText>
                <SumPrice>$ 5.90</SumPrice>
              </SumItem>
              <SumItem>
                <SumText>Shop's Discount</SumText>
                <SumPrice>$ 5.90</SumPrice>
              </SumItem>
              <SumItem type="total">
                <SumText>Total</SumText>
                <SumPrice>$ {total}</SumPrice>
              </SumItem>
            </SumInfo>
            <ButtonSum> CHECK OUT NOW</ButtonSum>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
