import React from "react";

import { Typography } from "antd";

import { Show, TextField, FieldList } from "@fakel-dev-team/rest-admin-core";

const { Title } = Typography;

export const OrdersShow = () => {
  console.log("sgow");
  return (
    <Show
      title={(record) => {
        console.log(record);
        return <Title>Заказ №{record._id}</Title>;
      }}>
      <FieldList>
        <TextField source='id' label='ID' />
        <TextField source='title' label='Title' />
        <TextField source='body' label='Body' />
      </FieldList>
    </Show>
  );
};
