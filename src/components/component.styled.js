import styled from "styled-components";

const Container = styled.div`
  text-align: left;
  max-width: 1170px;
  padding: 20px;
  font-size:22px;
`;
const Button = styled.button`
  margin-right: 30px;
  background-color: white;
  padding: 5px;
  width:120px;
  color: blueviolet;
  font-size:22px;
  border: 1px solid rgb(197, 150, 241);
  border-radius: 10px;
  outline: none;
  &:hover,
  &:active{
    box-shadow: 2px 2px 1px 0px rgba(197, 150, 241, 0.8);
  }
`;

export { Container, Button };
