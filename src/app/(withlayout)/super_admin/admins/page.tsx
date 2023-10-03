"use client";

import BreadCrumbWrapper from "@/components/ui/BreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";
import Link from "next/link";


const ManageAdmins = () => {
  const {role}= getUserInfo();
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
        <h2>Manage Admin</h2>
        </Col>
        <Col>
       
      <Link href="/super_admin/admins/create">
        {" "}
        <Button type="primary">Create Admin</Button>
      </Link>
        </Col>
     </Row>
    </div>
  );
}

export default ManageAdmins