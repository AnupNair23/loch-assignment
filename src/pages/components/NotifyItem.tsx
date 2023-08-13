import * as React from "react";
import Select from "./Select";
// import Tick from "pages/styles/images/icon.png"
// import * as Tick from "./../styles/images/icon.png"
// import Chart from "./../styles/images/chart.png"

const optionData = [{ key: '1000', value: '$1,000' }, { key: '2000', value: '$2,000' },
{ key: '3000', value: '$3,000' }, { key: '4000', value: '$4,000' },
{ key: '5000', value: '$5,000' }]

const NotifyItem: React.FC = () => {
    return (
        <div className="notification-item-div">
            <img alt="chart" className="chart-img" src={`https://ik.imagekit.io/mj6xhze3k/Loch/chart.png?updatedAt=1691936705082`} />
            <p className="notify-txt">Notify me when any wallets
                move more than</p>
            <Select size={"small"} options={optionData} />
            <img alt="tick-btn" className="tick-btn-img" src={`https://ik.imagekit.io/mj6xhze3k/Loch/Checkmark.png?updatedAt=1691952923783`} />
        </div>
    );
};

export default NotifyItem;
