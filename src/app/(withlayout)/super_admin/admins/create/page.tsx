"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectDropdown from "@/components/Forms/FormSelect";
import FormTextArea from "@/components/Forms/FormTextArea";
import BreadCrumbWrapper from "@/components/ui/BreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import {
  bloodGroupOptions,
  departmentOptions,
  genderOptions,
} from "@/constants/global";
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
                name="admin.passowrd"
                size="large"
                label="Password"
              />
            </Col>
            <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
              <FormSelectDropdown
                name="admin.name.gender"
                size="middle"
                label="Gender"
                placeholder="Select Gender"
                options={genderOptions}
              />
            </Col>
            <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
              <FormSelectDropdown
                name="admin.name.managementDepartment"
                size="middle"
                label="Department"
                placeholder="Select Department"
                options={departmentOptions}
              />
            </Col>
            <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
              <UploadImage />
            </Col>
          </Row>
          <Button
            style={{
              marginTop: 10,
            }}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </div>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: 10,
            padding: 24,
            margin: "10px 0",
            backgroundColor: "#ffffff",
          }}
        >
          <h3 style={{ marginBottom: 12 }}>Basic Details</h3>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
              <FormInput
                type="email"
                name="admin.email"
                size="large"
                label="email"
              />
            </Col>
            <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
              <FormInput
                type="text"
                name="admin.contactNo"
                size="large"
                label="Conatct No"
              />
            </Col>
            <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
              <FormInput
                type="text"
                name="admin.emergencyContactNo"
                size="large"
                label="Emergency Contact No"
              />
            </Col>

            <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
              <FormSelectDropdown
                name="admin.bloodGroup"
                size="middle"
                label="Blood Group"
                placeholder="Select Group"
                options={bloodGroupOptions}
              />
            </Col>
            <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
              <FormInput
                type="text"
                name="admin.designation"
                size="large"
                label="Designation"
              />
            </Col>
            <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
              <FormDatePicker
                name="admin.dateOfBirth"
                size="middle"
                label="Date of birth"
              />
            </Col>
            <Col className="gutter-row" span={12} style={{ marginBottom: 8 }}>
              <FormTextArea
                rows={4}
                name="admin.presentAddress"
                size="large"
                label="Present address"
              />
            </Col>
            <Col className="gutter-row" span={12} style={{ marginBottom: 8 }}>
              <FormTextArea
                rows={4}
                name="admin.permanentAddress"
                size="large"
                label="Permanent address"
              />
            </Col>
          </Row>
          <Button
            style={{
              marginTop: 10,
            }}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateAdmin;
