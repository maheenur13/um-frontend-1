import React, { FC } from "react";
import FormInput from "../Forms/FormInput";
import { Col, Row } from "antd";
import FormTextArea from "../Forms/FormTextArea";

export const LocalGuardianInfo: FC = () => {
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
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
          <FormInput
            type="text"
            name="student.localGuardianInfo.fatherName"
            size="large"
            label="Local Guardian Name"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
          <FormInput
            type="text"
            name="student.localGuardianInfo.fatherOccupation"
            size="large"
            label="Local Guardian Occupation"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
          <FormInput
            type="text"
            name="student.localGuardianInfo.fatherContactNo"
            size="large"
            label="Local Guardian Contact No"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
          <FormTextArea
            name="student.localGuardianInfo.address"
            label="Local Guardian Address"
            rows={2}
          />
        </Col>
      </Row>
    </div>
  );
};
