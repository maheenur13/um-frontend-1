"use client";

import React, { FC, ReactNode, ReactElement } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";

type FormConfig = {
  defaultValues?: Record<string, any>;
};

type PropsType = {
  children?: ReactNode | ReactElement;
  submitHandler: SubmitHandler<any>;
} & FormConfig;

const Form: FC<PropsType> = ({ children, submitHandler, defaultValues }) => {
  const formConfig: FormConfig = {};

  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;

  const methods = useForm<PropsType>(formConfig);
  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
