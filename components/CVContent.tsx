import React from "react";
import Button from "./Button";

const CVContent = () => {
  return (
    <div>
      <p>Download here my CV</p>
      <Button
        text={"Download it"}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></Button>
    </div>
  );
};

export default CVContent;
