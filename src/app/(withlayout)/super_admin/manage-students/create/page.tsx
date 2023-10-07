"use client";

import StepperForm from "@/components/StepperForm";
import {
  GuardianInfo,
  LocalGuardianInfo,
  StudentBasicInfo,
  StudentInfo,
} from "@/components/StudentForms";

const CreateStudent = () => {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Student Basic Information",
      content: <StudentBasicInfo />,
    },
    {
      title: "Guardian Info",
      content: <GuardianInfo />,
    },
    {
      title: "Local Guardian Info",
      content: <LocalGuardianInfo />,
    },
  ];

  const handleSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error: any) {
      console.error(error?.message);
    }
  };

  return (
    <div>
      <h2>Create Student</h2>
      <StepperForm
        submitHandler={(values: any) => handleSubmit(values)}
        steps={steps}
      />
    </div>
  );
};

export default CreateStudent;
