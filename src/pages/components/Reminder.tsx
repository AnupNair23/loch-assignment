import * as React from "react";
import Select from "./Select";

const optionData = [{ key: '> 30 days', value: '> 30 days' }, { key: '> 45 days', value: '> 45 days' },
{ key: '> 60 days', value: '> 60 days' }]

const Reminder: React.FC = () => {
    return (
        <div className="notification-item-div">
            <img alt="chart" className="chart-img clock-img" src={`https://ik.imagekit.io/mj6xhze3k/Loch/clock.png?updatedAt=1691952035084`} />
            <p className="notify-txt dormant-text">Notify me when any
             wallet dormant for</p>
            <Select size={"small"} options={optionData} />
            <p className="active-text">becomes active</p>
            <img alt="tick-btn" className="tick-btn-img" src={`https://ik.imagekit.io/mj6xhze3k/Loch/Checkmark.png?updatedAt=1691952923783`} />
        </div>
    );
};

export default Reminder;
