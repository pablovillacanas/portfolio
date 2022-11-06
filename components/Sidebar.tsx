import React from "react";

type Props = {
  value?: string;
};

const Sidebar = (_props: Props) => {
  return (
    <div
      style={{
        width: "4%",
        minWidth: "60px",
        backgroundColor: "yellow",
      }}
    >
      Sidebar
    </div>
  );
};

export default Sidebar;
