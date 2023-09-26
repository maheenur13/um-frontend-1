"use client";

import { store } from "@/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import AntdRegistry from "./AntdRegistry";

type PropsType = {
  children: ReactNode;
};

const RootProvider: FC<PropsType> = ({ children }) => {
  return (
    <Provider store={store}>
      <AntdRegistry>{children}</AntdRegistry>
    </Provider>
  );
};

export default RootProvider;
