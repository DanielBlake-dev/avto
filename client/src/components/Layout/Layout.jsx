import React from "react";

import { Container } from "react-atomize";

import { Header } from "../Header/Header";
import { Content } from "../Content/Content";

export const Layout = ({ children }) => {
  return (
    <Container maxW='1600px'>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
};
