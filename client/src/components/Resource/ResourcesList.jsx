import React, { useEffect, useState } from "react";

import { Resource } from "./Resource";

import { observer } from "mobx-react";

import { API } from "../../api/API.js";

export const ResourcesList = observer(({ checkoutStore }) => {
  const [resources, setResources] = useState([]);

  const fetch = async () => {
    const data = await API.getResources();
    setResources(data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      {resources.map((recource, index) => (
        <Resource
          key={index}
          checkoutStore={checkoutStore}
          recource={recource}
        />
      ))}
    </>
  );
});
