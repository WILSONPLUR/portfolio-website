import { Html, useProgress } from "@react-three/drei";
import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="30"
          visible={true}
        />
      </span>
    </Html>
  );
};

export default Loader;
