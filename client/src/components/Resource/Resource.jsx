import React, { useState } from "react";

import { observer } from "mobx-react";

import { Div, Text, Row, Tag, Button } from "react-atomize";
import { ResourceModal } from "./ResourceModal";

export const Resource = observer(({ checkoutStore, recource }) => {
  const [isOpen, setOpen] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Div
        maxW='23%'
        rounded='sm'
        flexDir='column'
        border='1px solid'
        borderColor='gray500'
        hoverBorderColor='gray800'
        hoverShadow='4'
        transition
        p='1rem'
        m={{ r: "1rem", b: "1rem" }}
        onClick={handleOpen}>
        <Row justify='flex-end' m={{ b: "1rem" }}>
          <Tag
            bg='success100'
            border='1px solid'
            borderColor='success500'
            textColor={"success800"}>
            {recource.is_available}
          </Tag>
        </Row>
        <Text textWeight='600' textSize='paragraph' m={{ b: "0.5rem" }}>
          {recource.name}
        </Text>
        <Text textSize='caption'>{recource._id}</Text>
        <Text
          textSize='title'
          textWeight='bold'
          textColor='info900'
          m={{ t: "1.5rem", b: "1rem" }}>
          {recource.price}
        </Text>
        <Button bg='black700' onClick={handleOpen}>
          Добавить в корзину
        </Button>
      </Div>
      <ResourceModal
        isOpen={isOpen}
        onClose={handleClose}
        recource={recource}
        checkoutStore={checkoutStore}
      />
    </>
  );
});
