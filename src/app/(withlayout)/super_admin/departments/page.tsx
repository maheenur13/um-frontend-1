"use client";

import BreadCrumbWrapper from "@/components/ui/BreadCrumb";
import GlobalTable from "@/components/ui/GlobalTable";
import { getUserInfo } from "@/services/auth.service";
import { useGetDepartmentsQuery } from "@/store/api/department-api";
import { Button, Col, PaginationProps, Row, Space, Tag } from "antd";
import { ColumnsType, TablePaginationConfig, TableProps } from "antd/es/table";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import Link from "next/link";
import React, { useState } from "react";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const ManageDepartment = () => {
  const query: Record<string, any> = {};

  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  query["size"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const { data, isLoading } = useGetDepartmentsQuery({ ...query });
  // const { departments, meta } = data;
  // console.log(data);

  const { role } = getUserInfo();

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Age",
      key: "age",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const handlePaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const handleTableChange: TableProps<Record<string, any>>["onChange"] = (
    pagination,
    filters,
    sorter
  ) => {
    // const { order, field } = sorter;
    const { order, field } = sorter as any;
    setSortBy(field as string);
    console.log(order);
    setSortOrder(order === "ascend" ? "asc" : "desc");
    // console.log(field);
  };

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
          <h2>Manage Department</h2>
        </Col>
        <Col>
          <Link href="/super_admin/departments/create">
            <Button type="primary">Create Department</Button>
          </Link>
        </Col>
        <Col span={24}>
          <GlobalTable
            dataSource={[
              {
                key: "1",
                name: "John Brown",
                age: 32,
              },
              {
                key: "2",
                name: "Jim Green",
                age: 42,
              },
              {
                key: "3",
                name: "Joe Black",
                age: 32,
              },
              {
                key: "4",
                name: "Jim Red",
                age: 32,
              },
            ]}
            columns={columns}
            loading={isLoading}
            onTableChange={handleTableChange}
            onPaginationChange={handlePaginationChange}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ManageDepartment;
