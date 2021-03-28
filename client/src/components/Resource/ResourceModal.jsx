import { observer } from "mobx-react";
import React, { useState } from "react";

import { Modal, Div, Icon, Text, Button, Tag, Row, Col } from "react-atomize";

export const ResourceModal = observer(
  ({ checkoutStore, recource, isOpen, onClose }) => {
    const [count, setCount] = useState(1);

    const handleClose = () => {
      checkoutStore.select({
        count,
        total: count * recource.price,
        ...recource,
      });

      onClose();
    };

    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        align='center'
        rounded='md'
        w='50vw'
        maxW='100vw'>
        <Icon
          name='Cross'
          pos='absolute'
          top='1rem'
          right='1rem'
          size='16px'
          onClick={onClose}
          cursor='pointer'
        />
        <Div m={{ b: "4rem" }}>
          <Text textSize='heading' tag='h1' m={{ b: "1rem" }}>
            {recource.name}
          </Text>
          <Text
            textSize='subheading'
            textWeight='bold'
            textColor='gray700'
            m={{ b: "2rem" }}>
            {recource._id}
          </Text>
          <Text textSize='paragraph'>{recource.description}</Text>
          <Row>
            <Col size='2'>
              <Text m={{ t: "2rem" }} textSize='title'>
                Размер
              </Text>
              <Tag p='0.5rem' m={{ t: "1rem" }}>
                {recource.size}
              </Tag>
            </Col>
            <Col size='2'>
              <Text m={{ t: "2rem" }} textSize='title'>
                Цвет
              </Text>
              <Tag p='0.5rem' m={{ t: "1rem" }}>
                {recource.color}
              </Tag>
            </Col>
          </Row>
        </Div>
        <Div d='flex' justify='flex-end'>
          <Tag
            m={{ r: "1rem" }}
            bg='success100'
            border='1px solid'
            borderColor='success500'
            textColor={"success800"}>
            В наличии
          </Tag>
          <Button onClick={handleClose} bg='info700'>
            Добавить в корзину
          </Button>
        </Div>
      </Modal>
    );
  }
);
