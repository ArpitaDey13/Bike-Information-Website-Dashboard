import React from "react";
import "./Home.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
const Home = () =>{
    return(
        <div className="Home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="products"/>
                    <Widget type="spot"/>
                    <Widget type="query"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart title="Last 6 Months (Visitors)" aspect={2/1}/>
                </div>
            </div>
        </div>
    )
}
export default Home; 