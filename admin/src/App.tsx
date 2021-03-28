import React from "react";

import { Admin, Resource } from "@fakel-dev-team/rest-admin-core";

import { createSimpleRest } from "@fakel-dev-team/rest-admin-simple-rest";
import { authProvider } from "./providers/authProvider";
import { createI18NProvider } from "./providers/i18Provider";

import { ru } from "./locales/ru";

import { ResourceList } from "./components/Recources/RecourceList";
import { RecourceCreate } from "./components/Recources/RecourceCreate";
import { RecourceEdit } from "./components/Recources/RecourceEdit";

import { OrdersList } from "./components/Orders/OrdersList";
import { OrdersShow } from "./components/Orders/OrdersShow";

import "antd/dist/antd.css";

const dataProvider = createSimpleRest({ apiBaseUrl: "http://localhost:3001" });

const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    i18nProvider={createI18NProvider({ locale: "ru", messages: { ru } })}>
    <Resource
      name='resources'
      list={ResourceList}
      edit={RecourceEdit}
      create={RecourceCreate}
      options={{ label: "Продукция" }}
    />
    <Resource
      name='orders'
      list={OrdersList}
      show={OrdersShow}
      options={{ label: "Заказы" }}
    />
  </Admin>
);

export default App;
