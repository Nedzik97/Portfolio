import { Cube } from "./cube";
import { useEffect, useState } from "react";
// import styles from "./cube.module.scss";

export const FlyingCube = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const animateCube = () => {
      const maxX = window.innerWidth - 100;
      const maxY = window.innerHeight - 100;

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      setPosition({ x, y });
    };

    const animationInterval = setInterval(animateCube, 3000); // Интервал 3 секунды

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div
      className="flying-cube"
      style={{
        position: "absolute",
        width: "100px",
        height: "100px",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: "left 7s linear, top 7s linear",
      }}
    >
      <Cube />
    </div>
  );
};
