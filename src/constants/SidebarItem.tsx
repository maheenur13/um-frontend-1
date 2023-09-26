import type { MenuProps } from "antd";
import {
  AppstoreOutlined,
  TableOutlined,
  KeyOutlined,
  ProfileOutlined,
  UserOutlined,
  CreditCardOutlined,
  FileTextOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export const SidebarItem = (role: string) => {
  const defaultItems: MenuProps["items"] = [
    {
      key: "Profile",
      icon: <ProfileOutlined />,

      label: "Profile",
      children: [
        {
          label: <Link href={`/${role}/profile`}>Account Profile</Link>,
          key: `${role}/profile`,
          icon: <UserOutlined />,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `${role}/change-password`,
          icon: <KeyOutlined />,
        },
      ],
    },
  ];
  const commonAdminItems: MenuProps["items"] = [
    {
      key: `${role}/manage-students`,
      icon: <TableOutlined />,
      label: <Link href={`/${role}/manage-student`}>Manage Students</Link>,
    },
    {
      key: `${role}/manage-faculty`,
      icon: <TableOutlined />,
      label: <Link href={`/${role}/manage-faculty`}>Manage Faculties</Link>,
    },
  ];

  const adminItems: MenuProps["items"] = [
    ...defaultItems,
    ...commonAdminItems,
    {
      label: "Manage academic",
      key: "manage-academic",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/${role}/academic/faculty`}>Faculties</Link>,
          key: `/${role}/academic/faculty`,
        },
        {
          label: <Link href={`/${role}/academic/department`}>Departments</Link>,
          key: `/${role}/academic/department`,
        },
        {
          label: <Link href={`/${role}/academic/semester`}>Semesters</Link>,
          key: `/${role}/academic/semester`,
        },
      ],
    },
    {
      label: "Management",
      key: "management",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
        {
          label: <Link href={`/${role}/building`}>Building</Link>,
          key: `/${role}/building`,
        },
        {
          label: <Link href={`/${role}/room`}>Rooms</Link>,
          key: `/${role}/room`,
        },
        {
          label: <Link href={`/${role}/course`}>Course</Link>,
          key: `/${role}/course`,
        },
        {
          label: (
            <Link href={`/${role}/semester-registration`}>
              Semester registration
            </Link>
          ),
          key: `/${role}/semester-registration`,
        },
        {
          label: <Link href={`/${role}/offered-course`}>Offered courses</Link>,
          key: `/${role}/offered-course`,
        },
        {
          label: (
            <Link href={`/${role}/offered-course-section`}>
              Course sections
            </Link>
          ),
          key: `/${role}/offered-course-section`,
        },
        {
          label: (
            <Link href={`/${role}/offered-course-schedule`}>
              Course schedules
            </Link>
          ),
          key: `/${role}/offered-course-schedule`,
        },
      ],
    },
  ];

  const superAdminItems: MenuProps["items"] = [
    ...defaultItems,
    ...commonAdminItems,
    {
      label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `/${role}/admin`,
    },
    {
      label: <Link href={`/${role}/user`}>Manage User</Link>,
      icon: <TableOutlined />,
      key: `/${role}/user`,
    },
    {
      label: "Manage permission",
      key: "manage-permission",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/permission`}>View permissions</Link>,
          key: `/${role}/permission`,
        },
      ],
    },
    {
      label: "Management",
      key: "management",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
      ],
    },
  ];

  const facultyItems: MenuProps["items"] = [
    ...defaultItems,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      icon: <TableOutlined />,
      key: `/${role}/courses`,
    },
  ];

  const studentItems: MenuProps["items"] = [
    ...defaultItems,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      icon: <TableOutlined />,
      key: `/${role}/courses`,
    },
    {
      label: <Link href={`/${role}/courses/schedule`}>Course schedules</Link>,
      icon: <ScheduleOutlined />,
      key: `/${role}/courses/schedule`,
    },
    {
      label: <Link href={`/${role}/registration`}>Registration</Link>,
      icon: <ThunderboltOutlined />,
      key: `/${role}/registration`,
    },
    {
      label: <Link href={`/${role}/payment`}>Payment</Link>,
      icon: <CreditCardOutlined />,
      key: `/${role}/payment`,
    },
    {
      label: <Link href={`/${role}/academic-report`}>Academic report</Link>,
      icon: <FileTextOutlined />,
      key: `/${role}/academic-report`,
    },
  ];

  const content =
    role === "student"
      ? studentItems
      : role === "admin"
      ? commonAdminItems
      : role === "super_admin"
      ? superAdminItems
      : role === "faculty"
      ? facultyItems
      : defaultItems;
  return [...content];
};
