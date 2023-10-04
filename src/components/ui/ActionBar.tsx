import { FC, ReactElement, ReactNode } from "react";

type PropsType = {
  title: string;
  children?: ReactNode | ReactElement;
};

const ActionBar: FC<PropsType> = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div
        style={{
          display: "flex",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ActionBar;
