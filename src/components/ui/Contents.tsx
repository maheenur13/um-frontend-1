"use client";

import { Layout } from "antd";
import React, { FC, ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const { Content } = Layout;

const ContentWrapper: FC<PropsType> = ({ children }) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "darkgray",
      }}
    >
      {children}
    </Content>
  );
};

export default ContentWrapper;
