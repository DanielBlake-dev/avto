import React, { useState } from "react";

import {
  Div,
  Input,
  Button,
  Row,
  Col,
  Text,
  Notification,
} from "react-atomize";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import { observer } from "mobx-react";
import { API } from "../../api/API";

export const ContactForm = observer(({ checkoutStore }) => {
  const [showNotification, setShowNotification] = useState(false);

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      city: "",
      street: "",
      house: "",
      total: checkoutStore.total ? checkoutStore.total : 0,
      resourceId: !checkoutStore.recources
        ? []
        : checkoutStore.recources.map((r) => r._id),
    },
    onSubmit: async (values) => {
      try {
        await API.createOrder({
          ...values,
          resourceId: checkoutStore.recources.map((r) => r._id),
        });
        history.push("/success");
      } catch (error) {
        setShowNotification(true);
      }
    },
  });

  return (
    <Div flexDir='column'>
      <form onSubmit={formik.handleSubmit}>
        <Row>
          <Col size='5'>
            <Text textSize='title' m={{ b: "1rem" }}>
              Контактная информация
            </Text>
            <Input
              value={formik.values.firstName}
              onChange={formik.handleChange}
              name='firstName'
              placeholder='Фамилия'
              m={{ b: "1rem" }}
            />
            <Input
              value={formik.values.lastName}
              onChange={formik.handleChange}
              name='lastName'
              placeholder='Имя'
              m={{ b: "1rem" }}
            />
            <Input
              value={formik.values.phone}
              onChange={formik.handleChange}
              name='phone'
              placeholder='Телефон'
              m={{ b: "1rem" }}
            />
          </Col>
          <Col size='5'>
            <Text textSize='title' m={{ b: "1rem" }}>
              Доставка
            </Text>
            <Input
              value={formik.values.city}
              onChange={formik.handleChange}
              name='city'
              placeholder='Город'
              m={{ b: "1rem" }}
            />
            <Input
              value={formik.values.street}
              onChange={formik.handleChange}
              name='street'
              placeholder='Улица'
              m={{ b: "1rem" }}
            />
            <Input
              value={formik.values.house}
              onChange={formik.handleChange}
              name='house'
              placeholder='Дом'
              m={{ b: "1rem" }}
            />
          </Col>
        </Row>
        <Button type='submit'>Отправить</Button>
      </form>
      <Notification
        isOpen={showNotification}
        onClose={() => setShowNotification(false)}>
        Упс. Что-то пошло не так. Не удалось создать заказ!
      </Notification>
    </Div>
  );
});
