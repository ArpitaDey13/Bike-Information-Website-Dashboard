import React from "react";
import "./widget.scss"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BikeScooterOutlinedIcon from '@mui/icons-material/BikeScooterOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import HighlightOutlinedIcon from '@mui/icons-material/HighlightOutlined';import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const Widget = ({ type }) =>{

    let data;

    switch(type){
        case "user":
            data={
                title:"USERS",
                link:"See all users",
                icon: <PersonOutlineOutlinedIcon 
                        className="icon" 
                        style={{
                            color:"crimson", 
                            backgroundColor:"rgba(255,0,0,0.2)",
                        }}
                      />,
            };
            break;
        case "products":
            data={
                title:"PRODUCTS",
                link:"See all products",
                icon: <BikeScooterOutlinedIcon 
                        className="icon"
                        style={{
                            color:"goldenrod", 
                            backgroundColor:"rgba(218,165,32,0.2)",
                        }}
                        />,
            };
            break;
        case "spot":
            data={
                title:"SPOTLIGHTED PRODUCTS",
                link:"See all spotlighted products",
                icon: <HighlightOutlinedIcon
                        className="icon"
                        style={{
                            color:"green", 
                            backgroundColor:"rgba(0,128,0,0.2)",
                        }}
                        />,
            };
            break;
        case "query":
            data={
                title:"QUERY",
                link:"See all queries",
                icon: <QueryStatsOutlinedIcon 
                        className="icon"
                        style={{
                            color:"purple", 
                            backgroundColor:"rgba(128,0,128,0.2)",
                        }}
                        />,
            };
            break;
        
        default:
            break;
    }
    return(
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">100</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">{data.icon}</div>
        </div>
    )
}

export default Widget