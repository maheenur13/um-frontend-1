"use client";
import BreadCrumbWrapper from "@/components/ui/BreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";
import Link from "next/link";

const ManageFaculties = () => {
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
          <h2>Manage Faculties</h2>
          </Col>
          <Col>
         
        <Link href="/super_admin/manage-faculties/create">
          {" "}
          <Button type="primary">Create Faculty</Button>
        </Link>
          </Col>
       </Row>
      </div>
    );
}

export default ManageFaculties
