import { React, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { useLocation } from "react-router-dom/cjs/react-router-dom";

const Container = styled.div``;
const Title = styled.h1`
  font-size: 50px;
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FilterText = styled.span`
  font-size: 30px;
  font-weight: 700;
  margin-right: 15px;
`;
const Select = styled.select`
  height: 40px;
  width: 100px;
  margin-right: 15px;
  font-size: 15px;
`;
const Option = styled.option`
  font-size: 15px;
`;

const ProductsList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilter = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };
  const handleSort = (e) => {
    setSort(e.target.value)
  };

  return (
    <Container>
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText> Filter Products </FilterText>
          <Select name="color" onChange={handleFilter}>
            <Option>All Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option>All Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText > Sort Products </FilterText>
          <Select onChange={handleSort}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={category} filters={filters} sort={sort} />
    </Container>
  );
};

export default ProductsList;
