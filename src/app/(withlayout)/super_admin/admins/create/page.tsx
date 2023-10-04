"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import BreadCrumbWrapper from "@/components/ui/BreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";
import { SubmitHandler } from "react-hook-form";

const CreateAdmin = () => {
  const { role } = getUserInfo();

  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      console.log({ data });
    } catch (error) {
      console.error(error);
    }
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
            label: "admin",
            link: "/super_admin/admin",
          },
        ]}
      />
      <Form submitHandler={onSubmit}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: 10,
            padding: 24,
            margin: "10px 0",
            backgroundColor: "#ffffff",
          }}
        >
          <h3 style={{ marginBottom: 12 }}>Admin Details</h3>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
              <FormInput
                type="text"
                name="admin.name.firstName"
                size="large"
                label="First Name"
              />
            </Col>
            <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
              <FormInput
                type="text"
                name="admin.name.middleName"
                size="large"
                label="Middle Name"
              />
            </Col>
            <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
              <FormInput
                type="text"
                name="admin.name.lastName"
                size="large"
                label="Last Name"
              />
            </Col>
            <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
              <FormInput
                type="password"
                name="admin.name.passowrd"
                size="large"
                label="Password"
              />
            </Col>
          </Row>
          <Button style={{
            marginTop:10
          }} type="primary" htmlType="submit" >Submit</Button>
        </div>
      
      </Form>
    </div>
  );
};

export default CreateAdmin;
