import сube from "../../assets/icons/flying-cube.svg";
import { useEffect, useState } from "react";

export const FlyingCube = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const maxX = window.innerWidth - 100;
  const maxY = window.innerHeight - 100;

  useEffect(() => {
    const animateCube = () => {
      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      setPosition({ x, y });
    };

    const animationInterval = setInterval(animateCube, 3000);

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
        left: `0`,
        top: `0`,
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 7s linear, transform 7s linear",
      }}
    >
      <img src={сube} alt="" />
    </div>
  );
};
