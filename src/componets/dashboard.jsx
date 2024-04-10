import React from "react";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import Chart from "./Chart";
import PieChart from "./pieChart";
function Dashboard() {
  const data1 = [
    20000, 19000, 30000, 10000, 20000, 9999, 3330, 4000, 9090, 1000, 1000,
    20000,
  ];
  const data2 = [220, 3000, 200, 700, 250, 130, 90, 100, 299, 200, 300, 3000];
  return (
    <div className="container-32">
      <section className="container-32-1">
        <WidgetItem
          heading={"Revenue"}
          value={30000}
          percent={90}
          color={"blue"}
          amount={true}
        />
        <WidgetItem
          heading={"User"}
          value={3000}
          percent={-10}
          color={"red"}
          amount={false}
        />
        <WidgetItem
          heading={"Transaction"}
          value={30000}
          percent={80}
          color={"purple"}
          amount={false}
        />
        <WidgetItem
          heading={"Products"}
          value={10000}
          percent={60}
          color={"orange"}
          amount={true}
        />
      </section>
      <section className="container-32-2">
        <div className="revenue-chart">
          <h3>REVENUE & TRANSACTION</h3>
          <Chart
            title1={"Revenue"}
            title2={"Transaction"}
            data1={data1}
            data2={data2}
          />
        </div>
      </section>
      <section className="container-32-3">
        <div className="products-stock">
          <h3>INVENTORY</h3>
          <div>
            <span>MEN</span>
            <progress id="file" value="50" max="100">
              {" "}
              32%{" "}
            </progress>
            <span>50%</span>
          </div>

          <div>
            <span>WOMAN</span>
            <progress id="file" value="70" max="100">
              {" "}
              32%{" "}
            </progress>
            <span>70%</span>
          </div>
          <div>
            <span>KID</span>
            <progress id="file" value="32" max="100">
              {" "}
              32%{" "}
            </progress>
            <span>32%</span>
          </div>
        </div>
        <div className="gender-ration">
          <h3>Gender Ration</h3>
          <span>
            <PieChart></PieChart>
          </span>
        </div>
      </section>
    </div>
  );
}
const WidgetItem = ({ heading, value, percent, color, amount }) => {
  return (
    <div className="widget">
      <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {percent > 0 ? (
          <span className="green">
            <HiTrendingUp />+{percent}%{" "}
          </span>
        ) : (
          <span className="red">
            <HiTrendingDown /> {percent}%{" "}
          </span>
        )}
      </div>
      <div
        className="widgetCircle"
        style={{
          background: `conic-gradient( 
            ${color} ${(Math.abs(percent) / 100) * 360}deg, #131217 0deg) `,
        }}
      >
        <span className="color">{percent}%</span>
      </div>
    </div>
  );
};
export default Dashboard;
