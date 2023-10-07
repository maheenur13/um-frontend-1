import { Col, Row } from "antd";
import { FC } from "react";
import FormInput from "../Forms/FormInput";
import FormSelectDropdown from "../Forms/FormSelect";
import { bloodGroupOptions } from "@/constants/global";
import FormDatePicker from "../Forms/FormDatePicker";
import FormTextArea from "../Forms/FormTextArea";

export const StudentBasicInfo: FC = () => {
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
            type="email"
            name="student.email"
            size="large"
            label="email"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
          <FormInput
            type="text"
            name="student.contactNo"
            size="large"
            label="Conatct No"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
          <FormInput
            type="text"
            name="student.emergencyContactNo"
            size="large"
            label="Emergency Contact No"
          />
        </Col>

        <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
          <FormSelectDropdown
            name="student.bloodGroup"
            size="middle"
            label="Blood Group"
            placeholder="Select Group"
            options={bloodGroupOptions}
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
          <FormInput
            type="text"
            name="student.designation"
            size="large"
            label="Designation"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: 8 }}>
          <FormDatePicker
            name="student.dateOfBirth"
            size="middle"
            label="Date of birth"
          />
        </Col>
        <Col className="gutter-row" span={12} style={{ marginBottom: 8 }}>
          <FormTextArea
            rows={4}
            name="student.presentAddress"
            size="large"
            label="Present address"
          />
        </Col>
        <Col className="gutter-row" span={12} style={{ marginBottom: 8 }}>
          <FormTextArea
            rows={4}
            name="student.permanentAddress"
            size="large"
            label="Permanent address"
          />
        </Col>
      </Row>
    </div>
  );
};
