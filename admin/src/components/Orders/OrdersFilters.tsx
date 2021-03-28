import React from "react";

import { Filters, TextInput } from "@fakel-dev-team/rest-admin-core";

export const OrdersFilters = () => {
  return (
    <Filters>
      <TextInput name='firstName' label='Фамилия' placeholder='Фамилия' />
      <TextInput name='lastName' label='Имя' placeholder='Имя' />
      <TextInput name='phone' label='Телефон' placeholder='Телефон' />
      <TextInput name='phone' label='Город' placeholder='Город' />
    </Filters>
  );
};
