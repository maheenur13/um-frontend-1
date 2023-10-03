"use client"
import ContentWrapper from "@/components/ui/Contents";
import SideBar from "@/components/ui/SideBar";
import { isLoggedInUser } from "@/services/auth.service";
import { Layout } from "antd";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

type PropsType = {
  children: ReactNode;
};

// export const metadata: Metadata = {
//   title: "University Management - login",
//   description: "manage university with best way",
// };


const DashBoardLayout: React.FC<PropsType> = ({ children }) => {
const router = useRouter()
  const isUserLoggedIn = isLoggedInUser();
  const [loading,setIsLoading] = useState<boolean>(false)

  useEffect(()=>{
    if(!isUserLoggedIn) {
      router.push('/login')
    }
    setIsLoading(true)
  },[router,loading])

  if(!loading) {
    return <p>loading continued...</p>
  }

  return (
    <Layout hasSider>
      <SideBar />
      <ContentWrapper>{children}</ContentWrapper>
    </Layout>
  );
};
export default DashBoardLayout;
