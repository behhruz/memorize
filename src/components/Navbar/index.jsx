import React from "react";
import { Container, Header, IconsWrapper, Img, Link, Text } from "./style";
import { Outlet } from "react-router-dom";
import data from "../../utils/navbar";
export const Navbar = () => {
  return (
    <>
      <Header>
        {data.map(({ path, title, id, img, hidden }) => {
          return (
            !hidden && (
              <Container key={id}>
                {" "}
                <Outlet />{" "}
                <IconsWrapper>
                  
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    to={path}
                    style={{ textDecoration: "none" }}
                  >
                    <Img src={img} alt="No photo" />
                    {title}
                  </Link>
                </IconsWrapper>
              </Container>
            )
          );
        })}
      </Header>
    </>
  );
};
export default Navbar;
