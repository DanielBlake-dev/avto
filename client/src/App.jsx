import React from "react";

import { Route, Switch } from "react-router-dom";

import { CheckoutPage } from "./pages/Checkout";
import { CheckoutForm } from "./pages/CheckoutForm";
import { HomePage } from "./pages/Home";
import { SuccessPage } from "./pages/Success";

import { CheckoutStore } from "./store/Checkout";

const checkoutStore = new CheckoutStore();

function App() {
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={() => <HomePage checkoutStore={checkoutStore} />}
      />
      <Route
        exact
        path='/checkout'
        render={() => <CheckoutPage checkoutStore={checkoutStore} />}
      />
      <Route
        exact
        path='/order'
        render={() => <CheckoutForm checkoutStore={checkoutStore} />}
      />
      <Route exact path='/success' render={() => <SuccessPage />} />
    </Switch>
  );
}

export default App;
