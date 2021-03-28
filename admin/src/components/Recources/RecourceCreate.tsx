import {
  Create,
  SimpleForm,
  CodeInput,
  ColorInput,
  TextInput,
  ReferenceInput,
  ReferenceManyInput,
  SelectInput,
  DateInput,
} from "@fakel-dev-team/rest-admin-core";

import { Space } from "antd";

import React from "react";

export const RecourceCreate = () => {
  return (
    <Create redirect='list'>
      {(createProps) => (
        <SimpleForm
          {...createProps}
          initialValue={{
            name: "",
            description: "",
            price: "",
            is_available: true,
            color: "",
            size: "",
          }}>
          <Space direction='vertical'>
            <TextInput
              label='Название'
              name='name'
              placeholder='Введите название'
            />
            <TextInput
              label='Описание'
              name='description'
              placeholder='Введите описание'
            />
            <TextInput label='Цена' name='price' placeholder='Введите цену' />
            <TextInput label='Цвет' name='color' placeholder='Введите цвет' />
            <TextInput
              label='Размер'
              name='size'
              placeholder='Введите размер'
            />
          </Space>
        </SimpleForm>
      )}
    </Create>
  );
};
