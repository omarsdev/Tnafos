import { Alert } from "components";
import React from "react";
import { v4 } from "uuid";

export const AlertProvider = (props) => {
  const notifications = [
    {
      id: v4(),
      type: "add",
      message: "Successfully created! ",
    },
    {
      id: v4(),
      type: "update",
      message: "Updated successfully!",
    },
    {
      id: v4(),
      type: "remove",
      message: "Successfully deleted!",
    },
  ];
  return (
    <div>
      <div className="alert-wrapper">
        {notifications.map((note) => {
          return <Alert key={note.id} {...note} />;
        })}
      </div>

      {props.children}
    </div>
  );
};
