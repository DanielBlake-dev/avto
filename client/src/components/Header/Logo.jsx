import React from "react";

import { Col, Text } from "react-atomize";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Col size='3'>
      <Text tag='h3' textSize='display1'>
        <Link to='/'>MOTO-SHOP</Link>
      </Text>
    </Col>
  );
};
