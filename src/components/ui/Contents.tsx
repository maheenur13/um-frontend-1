"use client";

import { Layout } from "antd";
import React, { FC, ReactNode } from "react";
import BreadCrumbWrapper from "./BreadCrumb";

type PropsType = {
  children: ReactNode;
};

const { Content } = Layout;

const ContentWrapper: FC<PropsType> = ({ children }) => {
  const base = "admin";

  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "darkgray",
      }}
    >
      <BreadCrumbWrapper
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: `${"student"}`,
            link: `/${"student"}`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default ContentWrapper;
