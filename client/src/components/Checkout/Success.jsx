import React from "react";

import { Link } from "react-router-dom";
import { Div, Row, Text, Icon, Button } from "react-atomize";

export const Success = () => {
  return (
    <Div w='100vw'>
      <Row
        flexDir='column'
        align='center'
        textAlign='center'
        m={{ t: "10rem" }}>
        <Icon name='Success' size='100px' color='success700' />
        <Text tag='h1' textSize='display1' m={{ t: "1rem" }}>
          Заказ успешно оформлен
        </Text>
        <Text tag='p' textSize='subtitle'>
          В течении 5 минут наши менеджеры с вами свяжутся
        </Text>
        <Button m={{ t: "2rem" }}>
          <Link to='/' style={{ color: "#fff" }}>
            На главную
          </Link>
        </Button>
      </Row>
    </Div>
  );
};
