import { Button, Col, Row } from "antd";
import React, { FC } from "react";
import FormInput from "../Forms/FormInput";
import FormSelectDropdown from "../Forms/FormSelect";
import {
  acDepartmentOptions,
  acSemesterOptions,
  facultyOptions,
  genderOptions,
} from "@/constants/global";
import UploadImage from "../ui/UploadImage";

export const StudentInfo: FC = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: 10,
        padding: 24,
        margin: "10px 0",
        backgroundColor: "#ffffff",
      }}
    >
      <h3 style={{ marginBottom: 12 }}>Student Details</h3>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6} style={{ marginBottom: 8 }}>
          <FormInput
            type="text"
            name="student.name.firstName"
            size="large"
            label="First Name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: 8 }}>
          <FormInput
            type="text"
            name="student.name.middleName"
            size="large"
            label="Middle Name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: 8 }}>
          <FormInput
            type="text"
            name="student.name.lastName"
            size="large"
            label="Last Name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: 8 }}>
          <FormInput
            type="password"
            name="password"
            size="large"
            label="Password"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: 8 }}>
          <FormSelectDropdown
            name="student.academicDepartment"
            size="middle"
            label="Academic Department"
            placeholder="Select"
            options={acDepartmentOptions}
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: 8 }}>
          <FormSelectDropdown
            name="student.academicFaculty"
            size="middle"
            label="Academic Faculty"
            placeholder="Select"
            options={facultyOptions}
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: 8 }}>
          <FormSelectDropdown
            name="student.academicSemester"
            size="middle"
            label="Academic Semester"
            placeholder="Select"
            options={acSemesterOptions}
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: 8 }}>
          <FormSelectDropdown
            name="student.gender"
            size="middle"
            label="Gender"
            placeholder="Select"
            options={genderOptions}
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: 8 }}>
          <UploadImage />
        </Col>
      </Row>
    </div>
  );
};
