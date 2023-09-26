import type { MenuProps } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export const SidebarItem = (role: string) => {
  const defaultItems: MenuProps["items"] = [
    {
      key: "Profile",
      icon: <UserOutlined />,

      label: "Profile",
      children: [
        {
          label: "Account",
          key: "account",
        },
        {
          label: "Change Password",
          key: "change-password",
        },
      ],
    },
  ];
  const commonAdminItems: MenuProps["items"] = [
    {
      key: "manage-students",
      icon: <UserOutlined />,

      label: <Link href={`/${role}/manage-student`}>Manage Students</Link>,
    },
  ];

  const content =
    role === "student"
      ? defaultItems
      : role === "admin"
      ? commonAdminItems
      : [];
  return [...content];
};
