"use client";

import { Button, Col, Row } from "antd";
import Image from "next/image";
import React, { FC } from "react";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import LoginImage from "../../assets/login-img.png";
import { useRouter } from "next/navigation";
import { useUserLoginMutation } from "@/store/api/auth-api";
import { SubmitHandler } from "react-hook-form";
import { storeUserInfo } from "@/services/auth.service";

type IFormValues = {
  id: string;
  password: string;
};

const LoginComp: FC = () => {
  const router = useRouter();
  const [userLogin] = useUserLoginMutation();
  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    try {
      const result = await userLogin({ ...data }).unwrap();
      console.log({ result });

      if (result?.accessToken) {
        router.push("/profile");
      }

      storeUserInfo({ accessToken: result.accessToken });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Row justify={"center"} align="middle" style={{ minHeight: "100vh" }}>
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

export default LoginComp;
