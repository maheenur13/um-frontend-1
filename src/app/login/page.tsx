import LoginComp from "@/components/Login";
import { Metadata } from "next";


export const metadata:Metadata = {
  title: "University Management - Login",
  description: "manage university with best way",
};

const LoginPage = () => {
  return (
    <>
      <LoginComp />
    </>
  );
};

export default LoginPage;
