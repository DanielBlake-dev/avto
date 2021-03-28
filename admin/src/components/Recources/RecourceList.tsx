import React from "react";

import {
  List,
  ColumnT,
  TextField,
  BooleanField,
} from "@fakel-dev-team/rest-admin-core";

export const ResourceList: React.FC = (props) => {
  const columns: ColumnT[] = [
    { id: "_id", source: "_id", title: "Артикул", Field: TextField },
    { id: "name", source: "name", title: "Название", Field: TextField },
    {
      id: "description",
      source: "description",
      title: "Описание",
      Field: TextField,
    },
    { id: "price", source: "price", title: "Цена", Field: TextField },
    {
      id: "is_available",
      source: "is_available",
      title: "В наличии",
      Field: BooleanField,
    },
    { id: "color", source: "color", title: "Цвет", Field: TextField },
    { id: "size", source: "size", title: "Размер", Field: TextField },
  ];

  return <List {...props} columns={columns} />;
};
