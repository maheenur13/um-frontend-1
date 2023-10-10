"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumbWrapper from "@/components/ui/BreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import {
  useGetDepartmentByIdQuery,
  useUpdateDepartmentMutation,
} from "@/store/api/department-api";
import { Button, Col, Row, message } from "antd";
import { FC } from "react";

type PropsType = {
  params: { id: string };
  searchParams: any;
};

const EditDepartment: FC<PropsType> = (props) => {
  const { role } = getUserInfo();
  const { data: departmentData, isLoading } = useGetDepartmentByIdQuery(
    props.params.id
  );
  const [updateDepartment] = useUpdateDepartmentMutation();

  const onSubmit = async (values: any) => {
    // message.loading("Updating.....");
    try {
      const result: any = await updateDepartment({
        id: props.params.id,
        body: values,
      });
      if (result?.data) {
        message.success("Department updated successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const defaultValues = {
    title: departmentData?.departments?.title || "",
  };

  return (
    <div>
      <BreadCrumbWrapper
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `department`,
            link: `/${role}/departments`,
          },
        ]}
      />
      <ActionBar title="Edit Department"></ActionBar>
      <h2>Edit</h2>
      <Form defaultValues={defaultValues} submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" type="text" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditDepartment;
