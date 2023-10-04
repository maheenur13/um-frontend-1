"use client";

import BreadCrumbWrapper from "@/components/ui/BreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";
import Link from "next/link";
import React from "react";

const ManageUsers = () => {
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
      <Row justify={"space-between"} align={"middle"}>
        <Col>
          <h2>Manage User</h2>
        </Col>
        <Col>
          <Link href="/super_admin/users/create">
            <Button type="primary">Create User</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default ManageUsers;
