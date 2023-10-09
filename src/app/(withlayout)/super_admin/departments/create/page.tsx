"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import BreadCrumbWrapper from "@/components/ui/BreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { useCreateDepartmentMutation } from "@/store/api/department-api";
import { Button, Col, Row, message } from "antd";
import React from "react";

const CreateDepartment = () => {
  const { role } = getUserInfo();
  const [createDepartment, { isLoading }] = useCreateDepartmentMutation();
  const onSubmit = async (data: any) => {
    message.loading("Creating.....");
    try {
      console.log(data);
      await createDepartment(data);
      message.success("Department added successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  return (
    <div>
      <BreadCrumbWrapper
        items={[
          { label: `${role}`, link: `/${role}` },
          { label: "department", link: `/${role}/department` },
        ]}
      />
      <h1>Create Department</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" type="text" />
          </Col>
        </Row>
        <Button loading={isLoading} type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateDepartment;
