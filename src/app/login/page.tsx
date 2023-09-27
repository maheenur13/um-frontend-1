"use client";

import { Button, Col, Row } from "antd";
import LoginImage from "../../assets/login-img.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";

type IFormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    try {
      console.log(data);
    } catch (error) {}
  };
  return (
    <Row
      justify={"center"}
      align="middle"
      style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}
    >
      <Col sm={12} md={12} lg={8}>
        <Image src={LoginImage} width={500} alt={"login-image"} />
      </Col>
      <Col sm={12} md={12} lg={6}>
        <h1 style={{ margin: "15px 0px" }}>Login To Your Account</h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div style={{ margin: "15px 0px" }}>
              <FormInput type="text" name="id" label="User Id" />
            </div>
            <div style={{ margin: "15px 0px" }}>
              <FormInput type="password" name="password" label="Password" />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
