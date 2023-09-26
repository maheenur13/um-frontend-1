import ContentWrapper from "@/components/ui/Contents";
import SideBar from "@/components/ui/SideBar";
import { Layout } from "antd";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};
const DashBoardLayout: React.FC<PropsType> = ({ children }) => {
  return (
    <Layout hasSider>
      <SideBar />
      <ContentWrapper>{children}</ContentWrapper>
    </Layout>
  );
};
export default DashBoardLayout;
