import React from "react";

import { List, ColumnT, TextField } from "@fakel-dev-team/rest-admin-core";
import { OrdersFilters } from "./OrdersFilters";

export const OrdersList: React.FC = (props) => {
  const columns: ColumnT[] = [
    { id: "_id", source: "_id", title: "Номер заказа", Field: TextField },

    {
      id: "firstName",
      source: "firstName",
      title: "Фамилия",
      Field: TextField,
    },
    {
      id: "lastName",
      source: "lastName",
      title: "Имя",
      Field: TextField,
    },
    { id: "phone", source: "phone", title: "Телефон", Field: TextField },
    {
      id: "city",
      source: "city",
      title: "Город",
      Field: TextField,
    },
    { id: "street", source: "street", title: "Улица", Field: TextField },
    { id: "house", source: "house", title: "Дом", Field: TextField },
  ];

  return <List view='show' {...props} columns={columns} actions={<></>} />;
};
