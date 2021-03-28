import React from "react";

import { Div } from "react-atomize";

export const Content = ({ children }) => {
  return (
    <Div d='flex' flexWrap='wrap'>
      {children}
    </Div>
  );
};
