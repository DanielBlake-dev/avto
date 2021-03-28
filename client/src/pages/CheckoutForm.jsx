import React from "react";

import { Layout } from "../components/Layout/Layout";
import { ContactForm } from "../components/Forms/ContactForm";

import { Div, Text, Col } from "react-atomize";
import { observer } from "mobx-react";

export const CheckoutForm = observer(({ checkoutStore }) => {
  return (
    <Layout>
      <Div w='100%' m={{ t: "3rem" }}>
        <Text tag='h1' m={{ b: "2rem" }}>
          Оформление заказа
        </Text>
        <ContactForm checkoutStore={checkoutStore} />
      </Div>
    </Layout>
  );
});
