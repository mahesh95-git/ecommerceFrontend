import React, { useEffect, useState } from "react";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import Chart from "./Chart";
import PieChart from "./pieChart";
import { useGetDashboardInfoQuery } from "../redux/api/admin";
import toast from "react-hot-toast";
import Loader from "./Loader";
function Dashboard() {
  const [dashboardInfo, setDashboardInfo] = useState({
    revenuePer: "",
    userPer: "",
    transactionsPer: "",
    productPer: "",
    twelveMonthRevenue: "",
    twelveMonthTransaction: "",
  });
  const { data, isLoading, error, isError } = useGetDashboardInfoQuery();

  useEffect(() => {
    if (data) {
      const {
        revenuePer,
        userPer,
        transactionPer,
        productPer,
        twelveMonthRevenue,
        twelveMonthTransaction,
        currentRevenue,
        currentProducts,
        currentUser,
        currentTransaction,
      } = data.stat;
      setDashboardInfo({
        revenuePer: revenuePer,
        userPer: userPer,
        transactionPer: transactionPer,
        productPer: productPer,
        twelveMonthRevenue: twelveMonthRevenue,
        twelveMonthTransaction: twelveMonthTransaction,
        currentRevenue: currentRevenue,
        currentProducts: currentProducts,
        currentUser: currentUser,
        currentTransaction: currentTransaction,
      });
    }
    if (isError) {
      toast.error(error.data.message);
    }
  }, [data, isError, error]);
  const today = new Date();

  return isLoading ? (
    <Loader />
  ) : (
    <div className="container-32">
      <section className="container-32-1">
        <WidgetItem
          heading={"Revenue"}
          value={dashboardInfo.currentRevenue}
          percent={dashboardInfo.revenuePer}
          color={"blue"}
          amount={true}
        />
        <WidgetItem
          heading={"User"}
          value={dashboardInfo.currentUser}
          percent={dashboardInfo.userPer}
          color={"red"}
          amount={false}
        />
        <WidgetItem
          heading={"Transaction"}
          value={dashboardInfo.currentTransaction}
          percent={dashboardInfo.transactionPer}
          color={"purple"}
          amount={false}
        />
        <WidgetItem
          heading={"Products"}
          value={dashboardInfo.currentProducts}
          percent={dashboardInfo.productPer}
          color={"orange"}
          amount={false}
        />
      </section>
      <section className="container-32-2">
        <div className="revenue-chart">
          <h3>REVENUE & TRANSACTION {today.getFullYear()}</h3>
          <Chart
            title1={"Revenue"}
            title2={"Transaction"}
            data1={dashboardInfo.twelveMonthRevenue}
            data2={dashboardInfo.twelveMonthTransaction}
          />
        </div>
      </section>
      {/* <section className="container-32-3">
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
      </section> */}
    </div>
  );
}
const WidgetItem = ({ heading, value, percent, color, amount }) => {
  return (
    <div className="widget">
      <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{amount ? `₹${value}` : value}</h4>
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
