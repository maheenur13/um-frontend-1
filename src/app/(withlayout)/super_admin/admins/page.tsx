"use client";

import ActionBar from "@/components/ui/ActionBar";
import BreadCrumbWrapper from "@/components/ui/BreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";
import Link from "next/link";

const ManageAdmins = () => {
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
      <ActionBar title="Manage Admin">
        <Link href="/super_admin/admins/create">
          <Button type="primary">Create Admin</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageAdmins;
