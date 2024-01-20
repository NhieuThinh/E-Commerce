import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { publicRequest } from "../requestMethods";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px 100px;
  display: flex;
`;
const ImageContainer = styled.div``;
const Image = styled.img`
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  margin: 50px;
  padding-right: 60px;
`;
const Title = styled.p`
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 300;
`;
const Desc = styled.p`
  font-size: 20px;
  margin-bottom: 40px;
`;
const Price = styled.span`
  font-size: 50px;
  font-weight: 100;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin-top: 50px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  margin: 0 70px 50px 0;
`;
const FilterTitle = styled.span`
  font-size: 30px;
  margin-right: 5px;
`;
const FilterColor = styled.div`
  background-color: ${(props) => props.color};
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  height: 30px;
  width: 60px;
  font-size: 20px;
`;
const FilterSizeOption = styled.option`
  font-size: 20px;
`;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-right:70px; */
`;
const PlusAmount = styled.span`
  font-size: 40px;
`;
const Amount = styled.div`
  font-size: 40px;
  height: 50px;
  width: 50px;
  border-radius: 15%;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  margin: 0 10px;
`;

const MinusAmount = styled.span`
  font-size: 40px;
`;
const Button = styled.button`
  height: 50px;
  width: 120px;
  font-size: 20px;
  background-color: white;
  color: teal;
  border: 3px solid teal;
  &:hover {
    background-color: teal;
    color: white;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  console.log(color, size);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        // console.log(res.data);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "add") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) setQuantity(quantity - 1);
    }

    // e.target.name==='minus' && quantity>1? setQuantity(quantity-1):setQuantity(quantity + 1);
  };
  const dispatch = useDispatch();
  const handleAddtoCart = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color </FilterTitle>
              {product.color?.map((color) => (
                <FilterColor
                  color={color}
                  key={color}
                  onClick={() => setColor(color)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size </FilterTitle>
              <FilterSize onClick={(e) => setSize(e.target.value)}>
                {product.size?.map((size) => (
                  <FilterSizeOption value={size} key={size}>
                    {size}
                  </FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <PlusAmount name="add" onClick={() => handleQuantity("add")}>
                +
              </PlusAmount>
              <Amount>{quantity}</Amount>
              <MinusAmount name="minus" onClick={() => handleQuantity("minus")}>
                -
              </MinusAmount>
            </AmountContainer>
            <Button onClick={handleAddtoCart}>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
