"use client";

import BreadCrumbWrapper from "@/components/ui/BreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";
import Link from "next/link";

const ManageStudents = () => {
  const { role } = getUserInfo();
  return (
    <div>
      <BreadCrumbWrapper
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
     <Row justify={'space-between'} align={'middle'}>
        <Col>
        <h2>Manage student</h2>
        </Col>
        <Col>
       
      <Link href="/super_admin/manage-students/create">
        {" "}
        <Button type="primary">Create Student</Button>
      </Link>
        </Col>
     </Row>
    </div>
  );
};

export default ManageStudents;
