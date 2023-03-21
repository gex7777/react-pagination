import React from "react";
import { User } from "../../types";
import "./ListItem.css";
import { Avatar } from "../Avatar/Avatar";

interface Iprops {
  user: User;
}
export const ListItem = ({ user }: Iprops) => {
  return (
    <div className="list-container">
      <Avatar name={user.FirstNameLastName}></Avatar>
      <div className="details">
        <div className="name">{user.FirstNameLastName} </div>

        <div className="beside">
          <div className="job-title">{user.JobTitle} </div>
          <div className="company">@{user.Company}</div>
        </div>
        <div className="phone">{user.Phone}</div>
      </div>
    </div>
  );
};
