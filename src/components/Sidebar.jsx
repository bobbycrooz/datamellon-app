import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BiBarChartAlt2 } from "react-icons/bi";

const Sidebar = ({ toggleUser }) => {
    // const location = useLocation()
    return (
        <Container>
            <ul className='navbar'>
                <li className='nav_item overview mb-4'>
                    <NavLink to='/overview' className='' activeClassName='active'>
                        <div className='icon_container'>
                            <span className='iconify' data-icon='jam:document-f' data-inline='false'></span>
                        </div>
                        <p>Overview</p>
                        <span className='topbox hidden absolute'></span>
                        <span className='bottombox hidden absolute'></span>
                    </NavLink>
                </li>

                <hr />

                <div className='app_mag  mt-3 mb-4'>
                    {/* <span>APP MANAGEMENT</span> */}

                    <li className=''>
                        <NavLink to='/users' className=''>
                            <div className='icon_container'>
                                <BiBarChartAlt2 />
                            </div>
                            <p>Chart</p>

                            <span className='topbox hidden absolute'></span>
                            <span className='bottombox hidden absolute'></span>
                        </NavLink>
                    </li>
                </div>

                <li>
                    <NavLink to='/logout' className=' mt-14'>
                        <div className='icon_container'>
                            <span
                                className='iconify'
                                data-icon='majesticons:logout'
                                data-inline='false'
                                data-flip='horizontal'></span>
                        </div>
                        <p onClick={toggleUser}>log Out</p>
                        <span className='topbox hidden absolute'></span>
                        <span className='bottombox hidden absolute'></span>
                    </NavLink>
                </li>
            </ul>
        </Container>
    );
};
const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 260px;
    padding-left: 1rem;
    background: #41a300;
    height: 100vh;
    transition: all 0.2s linear;

    ul {
        list-style: none;
        width: 100%;
        margin-top: 4rem;
        padding-inline-start: 0;

        li a {
            width: 100%;
            height: 50px;
            /* padding: 10px; */
            display: flex;
            justify-content: flex-start;
            align-items: center;
            color: #fff;
            text-decoration: none;

            .icon_container {
                height: 100%;
                width: 19%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 5px;
                transition: all 0.25s ease;

                /* padding:10px; */
                .iconify {
                    font-size: 24px;
                }
            }
            p {
                margin-left: 5px;
                width: 90%;
                height: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-weight: 600;
                font-size: 16px;
            }

            &:hover {
                color: #dae2d5;
            }

            &.active {
                background: #fff;
                color: #398f00;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                font-weight: 500;
                position: relative;

                .topbox {
                    display: block;
                    width: 30px;
                    height: 30px;
                    right: 0;
                    top: -60%;
                    background: #41a300;
                    border-radius: 100%;
                    z-index: 10;
                    box-shadow: 11px 11px 0 1px #fff;
                }

                .bottombox {
                    display: block;
                    width: 30px;
                    height: 30px;
                    right: 0;
                    bottom: -60%;
                    background: #41a300;
                    border-radius: 100%;
                    z-index: 10;
                    box-shadow: 11px -11px 0 1px #fff;
                }
            }
        }

        hr {
            border-color: #e1e7ed9b;
            width: 90%;
        }
    }

    .app_mag {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;

        span {
            color: #fff;
            margin: 0;
            font-size: 14px;
            line-height: 8px;
            font-weight: 700;
        }
        li {
            width: 100%;
            margin: -1px 0;
        }
    }

    @media screen and (max-width: 880px) {
        padding-left: 0;

        width: 0px;
        ul {
            visibility: hidden;
        }
    }
`;
export default Sidebar;
