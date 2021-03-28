import { observer } from "mobx-react";
import React from "react";

import { Div, Text, Row, Col, Tag, Button, Icon } from "react-atomize";
import { Link } from "react-router-dom";

export const Checkout = observer(({ checkoutStore }) => {
  const handleAddCount = (recource = {}) => {
    checkoutStore.changeCount(recource, recource.count + 1);
  };

  const handleSubCount = (recource = {}) => {
    checkoutStore.changeCount(recource, recource.count - 1);
  };

  const handleDelete = (recource) => {
    checkoutStore.remove(recource);
  };

  console.log(checkoutStore.recources);

  return (
    <Div w='100%' p={{ t: "3rem" }}>
      <Text tag='h1'>Корзина</Text>
      <Row m={{ t: "1.5rem" }} justify='space-between'>
        <Div w='70%'>
          {checkoutStore.recources &&
            checkoutStore.recources.map((item) => {
              return (
                <Row
                  border='1px solid'
                  borderColor='gray400'
                  align='flex-start'
                  justify='space-between'
                  p='2rem'
                  m={{ b: "1rem" }}
                  shadow='2'>
                  <Col size='6' flexDir='column'>
                    <Text textSize='subheader' textWeight='600'>
                      {item.name}
                    </Text>
                    <Tag
                      bg={`success100`}
                      border='1px solid'
                      borderColor={`success500`}
                      textColor={`success800`}
                      m={{ t: "1rem" }}>
                      {item.is_available}
                    </Tag>
                  </Col>
                  <Col size='3' flexDir='column'>
                    <Text textSize='title'>{item.price}</Text>
                    <Row align='center' m={{ t: "1rem" }}>
                      <Button
                        key='add'
                        bg='gray800'
                        p={{ x: "0.4rem" }}
                        onClick={() => handleAddCount(item)}>
                        <Icon color='white' name='Plus' size='20px' />
                      </Button>
                      <Text textSize='subheader' m={{ l: "1rem", r: "1rem" }}>
                        {item.count || 1}
                      </Text>
                      <Button
                        key='sub'
                        bg='gray800'
                        p={{ x: "0.4rem" }}
                        onClick={() => handleSubCount(item)}>
                        <Icon color='white' name='Minus' size='20px' />
                      </Button>
                    </Row>
                  </Col>
                  <Col size='2'>
                    <Button
                      w='10rem'
                      suffix={
                        <Icon
                          name='Delete'
                          size='16px'
                          color='white'
                          m={{ l: "1rem" }}
                        />
                      }
                      bg='brand900'
                      shadow='3'
                      hoverShadow='4'
                      onClick={() => handleDelete(item)}>
                      Удалить
                    </Button>
                  </Col>
                </Row>
              );
            })}
        </Div>
        <Div
          pos='fixed'
          right='5rem'
          w='25%'
          h='15rem'
          shadow='4'
          rounded='md'
          bg='black'
          p='2rem'>
          <Text textSize='title' textColor='white'>
            Заказ на сумму
          </Text>
          <Text textSize='title' textWeight='bold' textColor='white'>
            {checkoutStore.total}
          </Text>
          <Button bg='success700' m={{ t: "2rem" }}>
            <Link to='/order' style={{ color: "#fff" }}>
              Оформить заказ
            </Link>
          </Button>
        </Div>
      </Row>
    </Div>
  );
});
