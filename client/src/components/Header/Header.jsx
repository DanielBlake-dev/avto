import React from "react";

import { Row } from "react-atomize";

import { Logo } from "./Logo";
import { Menu } from "./Menu";

export const Header = () => {
  return (
    <Row align='center' justify='space-between' p={{ t: "2rem", b: "2rem" }}>
      <Logo />
      <Menu />
    </Row>
  );
};
