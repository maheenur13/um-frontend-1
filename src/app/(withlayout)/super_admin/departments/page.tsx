"use client";

import BreadCrumbWrapper from "@/components/ui/BreadCrumb";
import GlobalTable from "@/components/ui/GlobalTable";
import { getUserInfo } from "@/services/auth.service";
import {
  useDeleteDepartmentMutation,
  useGetDepartmentsQuery,
} from "@/store/api/department-api";
import { Button, Col, Input, Row, Space, Tag, message } from "antd";
import { ColumnsType, TableProps } from "antd/es/table";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";

import ActionBar from "@/components/ui/ActionBar";
import { useDebounce } from "@/hooks";

interface DataType {
  key: string;
  title: string;
  createdAt: number;
  id: string;
}

const ManageDepartment = () => {
  const query: Record<string, any> = {};

  const [size, setSize] = useState<number>(6);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const debouncedValue = useDebounce<string>(searchTerm, 700);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = debouncedValue;

  const { data, isLoading: getLoading } = useGetDepartmentsQuery({ ...query });
  const [updateDepartment, { isLoading: isDeleteLoading }] =
    useDeleteDepartmentMutation();

  const isLoading = getLoading || isDeleteLoading;
  // const { departments, meta } = data;
  // console.log(data);

  const { role } = getUserInfo();

  const columns: ColumnsType<DataType> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Created At",
      key: "createdAt",
      dataIndex: "createdAt",
      sorter: true,
      render: (date) => {
        return date && dayjs(date).format("MMM D, YYYY hh:mm A");
      },
    },
    {
      title: "Action",
      key: "action",
      width: 200,
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => handleDelete(record)}
            type="primary"
            icon={<EyeOutlined />}
            size={"middle"}
          />

          <Link href={`/super_admin/departments/edit/${record.id}`}>
            <Button type="primary" icon={<EditOutlined />} size={"middle"} />
          </Link>
          <Button
            onClick={() => handleDelete(record)}
            type="primary"
            icon={<DeleteOutlined />}
            size={"middle"}
            danger
          />
        </Space>
      ),
    },
  ];

  const handleDelete = async (values: any) => {
    // message.loading("Updating.....");
    try {
      const result: any = await updateDepartment({
        id: values.id,
      });
      if (result?.data) {
        message.success("Department deleted successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

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

    setSortOrder(order === "ascend" ? "asc" : "desc");
    // console.log(field);
  };

  const handleReset = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
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
        <Col span={24} style={{ margin: "10px 0" }}>
          <ActionBar title="Manage Department">
            <Input
              placeholder="Search"
              size="large"
              onChange={handleChange}
              style={{ width: "20%" }}
            />
            <div>
              {(!!sortBy || !!sortOrder || !!searchTerm) && (
                <Button
                  onClick={handleReset}
                  size="large"
                  style={{ marginRight: "10px" }}
                  type="primary"
                  icon={<ReloadOutlined />}
                />
              )}
              <Link href="/super_admin/departments/create">
                <Button size="large" type="primary">
                  Create Department
                </Button>
              </Link>
            </div>
          </ActionBar>
        </Col>
        <Col
          span={24}
          style={{
            margin: "10px 0",
          }}
        >
          <GlobalTable
            total={data?.meta?.total as number}
            pageSize={size}
            dataSource={data?.departments || ([] as any)}
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
