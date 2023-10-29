import React from "react";
import "./sidebar.scss"
import LoginForm from "../../Pages/Login/Login";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import TwoWheelerOutlinedIcon from '@mui/icons-material/TwoWheelerOutlined';
import MopedIcon from '@mui/icons-material/Moped';
import CompareOutlinedIcon from '@mui/icons-material/CompareOutlined';
import ElectricMopedIcon from '@mui/icons-material/ElectricMoped';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () =>{

  const{dispatch} = useContext(DarkModeContext);

    return(
        <div className="sidebar">
            <div className="container" style={{height:'69px'}} align="center">
                <div className="row" style={{backgroundColor:'#fff',paddingTop:'8px'}}>
                    <div className="col-lg-12 col-md-12 col-sm-12 p-0 m-0" >
                            <div className="Topleft-logo" style={{paddingTop:'8px'}}>
                                 <h1 style={{fontSize:'23px' , border:'2px solid black',width:'180px',borderRadius:'10px 20px',marginTop:'-3px'}}><i style={{fontSize:'40px',marginLeft:'6px',color:'red'}} class="fas fa-motorcycle fa"></i><span style={{color:'black',fontSize:'23px',float:'right',marginTop:'7px',fontFamily: 'poppins',marginRight:'5px',fontWeight:'bold'}}>BikersHUB</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            
            <hr/>
            <div className="center">
                <ul>
                <p className="t1">MAIN</p>
                <Link to="/" style={{textDecoration: "none"}}>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                </Link>  
                <p className="t1">PRODUCTS</p>
                <Link to="/product" style={{textDecoration: "none"}}>
                    <li>
                        <TwoWheelerOutlinedIcon className="icon"/>
                        <span>Bikes</span>
                    </li>
                </Link>
                <Link to="/product" style={{textDecoration: "none"}}>
                    <li>
                        <MopedIcon className="icon"/>
                        <span>Scooters</span>
                    </li>
                </Link>
                <Link to="/product" style={{textDecoration: "none"}}>
                    <li>
                        <ElectricMopedIcon className="icon"/>
                        <span>Electric Zone</span>
                    </li>
                </Link>
                <p className="t1">SERVICES</p>
                    <li>
                        <AddShoppingCartIcon className="icon"/>
                        <span>Wishlist</span>
                    </li>
                    <li>
                        <CompareOutlinedIcon className="icon"/>
                        <span>Comparison</span>
                    </li>
                    <li>
                        <QueryStatsIcon className="icon"/>
                        <span>Query</span>
                    </li>
                <p className="t1">SETTINGS</p>
                <Link to="/users" style={{textDecoration: "none"}}>
                    <li>
                        <Person3OutlinedIcon className="icon"/>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/users/1" style={{textDecoration: "none"}}>
                    <li>
                        <AccountCircleIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                </Link>
                <Link to="/login" style={{textDecoration: "none"}}>
                    <li>
                        <LogoutIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </Link>
                </ul>
            </div>
        <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
        </div>
        </div>
    )
}
export default Sidebar