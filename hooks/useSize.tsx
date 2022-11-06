/* eslint-disable @typescript-eslint/no-explicit-any */
import useResizeObserver from "@react-hook/resize-observer";
import React from "react";

const useSize = (target: any): { width: number; height: number } => {
  const [size, setSize] = React.useState();

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize((entry as any).contentRect));

  return {
    width: (size as any)?.width,
    height: (size as any)?.height,
  };
};

export default useSize;
