import { observer } from "mobx-react";
import React from "react";
import { Checkout } from "../components/Checkout/Checkout";
import { Layout } from "../components/Layout/Layout";
import { CheckoutStore } from "../store/Checkout";

export const CheckoutPage = observer(({ checkoutStore }) => {
  return (
    <Layout>
      <Checkout checkoutStore={checkoutStore} />
    </Layout>
  );
});
