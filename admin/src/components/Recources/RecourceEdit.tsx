import React from "react";

import { SimpleForm, TextInput, Edit } from "@fakel-dev-team/rest-admin-core";

import { Space } from "antd";

export const RecourceEdit: React.FC = (props) => {
  return (
    <Edit {...props} redirect='list'>
      {(editProps) => (
        <SimpleForm {...editProps}>
          <Space direction='horizontal' align='start'>
            <Space direction='vertical'>
              <TextInput
                label='Title'
                name='name'
                placeholder='Введите название'
              />
              <TextInput
                label='Title'
                name='description'
                placeholder='Введите описание'
              />
              <TextInput
                label='Title'
                name='price'
                placeholder='Введите цену'
              />
              <TextInput
                label='Title'
                name='size'
                placeholder='Введите размер'
              />
              <TextInput
                label='Title'
                name='color'
                placeholder='Введите цвет'
              />
            </Space>
          </Space>
        </SimpleForm>
      )}
    </Edit>
  );
};
