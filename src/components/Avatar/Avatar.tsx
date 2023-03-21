import React from "react";
import "./Avatar.css";
interface Iprops {
  name: string;
}
export const Avatar = ({ name }: Iprops) => {
  return (
    <div
      className="circle"
      style={{
        backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
          16
        )}`,
      }}
    >
      <div className="letter">{name[0]}</div>
    </div>
  );
};
