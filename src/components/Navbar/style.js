import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Container = styled.div``;
const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 0;
  position: absolute;
  position: fixed;
  width: 100%;
  background-color: yellow;
  padding: 7px 0;
  border-radius: 25px 25px 0 0;
`;
const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .active{
    color: white;
    fill: white;
  }
`;
const Text = styled.h1`
  color: black;
  padding: 0;
  margin: 0;
`;
const Img = styled.img`
  width: 22px;
  height: 22px;
`;
const Link = styled(NavLink)`
  font-size: 24px;
  font-weight: 700;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export { Header, IconsWrapper, Text, Img, Container, Link };
