import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../icons/logo.svg'
import Dash from '../icons/dash.svg'
import Config from "../icons/config.svg";
import Employees from "../icons/employees.svg";
import Diary from "../icons/diary.svg";
import Financing from "../icons/financing.svg";

export const Menu = () => {
    return (
        <div id='container' className="container-fluid">
            <div className="row">
                <div className="col-sm-auto bg-light sticky-top">
                    <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top mt-4">
                        <Link to='/'><img src={Logo}></img></Link>
                        <div className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center mt-5">
                            <div className="nav-item">
                                <div id="line"></div>
                            </div>
                            <div className="mt-4">
                                <Link to='/dashboard'><img src={Dash}></img></Link>
                            </div>
                            <div className="mt-4">
                                <Link to='/employees'><img src={Employees}></img></Link>
                            </div>
                            <div className="mt-4">
                                <Link to='/diary'><img src={Diary}></img></Link>
                            </div>
                            <div className="mt-4">
                                <Link to='/financing'><img src={Financing}></img></Link>
                            </div>
                            <div className="mt-5 pt-5">
                                <Link to='/config'><img src={Config}></img></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm p-3 min-vh-100">
                </div>
            </div>
        </div>
    )
}