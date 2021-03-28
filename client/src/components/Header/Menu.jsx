import React from "react";

import { Div, Col, Input, Button, Icon } from "react-atomize";

import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <Col size='5'>
        <Input
          placeholder='Поиск по сайту'
          suffix={
            <Button
              pos='absolute'
              bg='transparent'
              w='3rem'
              top='0'
              right='0'
              rounded={{ r: "md" }}>
              <Icon name='Search' color='black' size='16px' />
            </Button>
          }
        />
      </Col>
      <Col size='3'>
        <Button
          suffix={
            <Icon name='Bag' size='16px' color='white' m={{ l: "1rem" }} />
          }
          shadow='3'
          hoverShadow='4'
          m={{ r: "1rem" }}>
          <Link to='/checkout' style={{ color: "#fff" }}>
            Корзина
          </Link>
        </Button>
      </Col>
    </>
  );
};
