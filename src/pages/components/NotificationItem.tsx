import * as React from "react";
import Input from "./Input";
import { NotificationItemProps } from "config/types";
// import Bell from "../styles/images/bell.png"

const NotificationItem: React.FC<NotificationItemProps> = (props: NotificationItemProps) => {
  return (
    <div className="notification-item-div">
        <img alt="bell-icon" src={`https://ik.imagekit.io/mj6xhze3k/Loch/bell2.png?updatedAt=1691937019153`}  />
        <p className="text">We’ll be sending<br/>
            notifications to you<br/> here {props.text}
        </p>
        <Input type="text" placeholder={"hello@loch.one"} size={"small"} />
        <p className="save-btn">Save</p>
    </div>
  );
};

export default NotificationItem;
