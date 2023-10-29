import React from "react";
import "./featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

const Featured = () =>{
    return(
        <div className="featured">
            <div className="top">
                <h1 className="title"><b>Total Visitors</b></h1>
                <MoreVertOutlinedIcon fontSize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
                </div>
                <p className="title">Total visitors today</p>
                <p className="amount">270</p>
                <p className="desc">Updating Regularly</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult">
                            <div className="resultAmount">500</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Featured