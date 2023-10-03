"use client";

import { Button, Result, Row } from "antd";

const Error = () => {
  return (
    <Row
      justify={"center"}
      align={"middle"}
      style={{
        height: "100vh",
      }}
    >
      <Result
        status="warning"
        title="There are some problems with your operation."
        extra={
          <Button type="primary" key="console">
            Go Console
          </Button>
        }
      />
    </Row>
  );
};

export default Error;
