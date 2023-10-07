import { Col, Row } from "antd";
import { FC } from "react";
import FormInput from "../Forms/FormInput";
import FormTextArea from "../Forms/FormTextArea";

export const GuardianInfo: FC = () => {
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
            name="student.guardianInfo.fatherName"
            size="large"
            label="Father's Name"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
          <FormInput
            type="text"
            name="student.guardianInfo.fatherOccupation"
            size="large"
            label="Father Occupation"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
          <FormInput
            type="text"
            name="student.guardianInfo.fatherContactNo"
            size="large"
            label="Father Contact No"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
          <FormInput
            type="text"
            name="student.guardianInfo.motherName"
            size="large"
            label="Mother's Name"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
          <FormInput
            type="text"
            name="student.guardianInfo.motherOccupation"
            size="large"
            label="Mother's Occupation"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
          <FormInput
            type="text"
            name="student.guardianInfo.motherContactNo"
            size="large"
            label="Mother Contact No"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
          <FormTextArea
            name="student.guardianInfo.address"
            label="Address"
            rows={2}
          />
        </Col>
      </Row>
    </div>
  );
};
