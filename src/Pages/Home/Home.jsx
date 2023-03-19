import React from "react";
import Api from "../../Components/UserApi/Api";
import "./Home.css";
import { users } from "../../Assets/userData";
import { dashboard } from "../../Assets/dashboardData";

const Home = () => {
  return (
    <div className="Home">
      <div className="heading">
        <div className="line"></div>
        <h1>FORI ANALYTICS</h1>
        <div className="line"></div>
        <h2 style={{ textAlign: "center" }}>Complete Api Documentation</h2>
      </div>
      <div className="empty"></div>

      <div className="Containerdiv">
        <h3 className="api_heading">LOGIN & REGISTRAION API'S</h3>
        <Api data={users} />
      </div>

      <div className="Containerdiv">
        <h3 className="api_heading">DASHBOARD & USER'S FORM API'S</h3>
        <Api data={dashboard} />
      </div>
    </div>
  );
};

export default Home;
