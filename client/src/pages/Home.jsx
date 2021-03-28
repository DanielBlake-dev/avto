import React from "react";
import { ResourcesList } from "../components/Resource/ResourcesList";
import { Layout } from "../components/Layout/Layout";
import { CheckoutStore } from "../store/Checkout";
import { observer } from "mobx-react";

export const HomePage = observer(({ checkoutStore }) => {
  return (
    <Layout>
      <ResourcesList checkoutStore={checkoutStore} />
    </Layout>
  );
});
