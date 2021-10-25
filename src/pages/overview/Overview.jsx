import React from "react";
import { Container } from "./style";
import Chart from "./Chart";
import Dough from "./Pie";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { BiBarChartAlt2 } from "react-icons/bi";
import { ImStatsBars2 } from "react-icons/im";
import {GiChart} from 'react-icons/gi'
import srcData from "../.././data";
import MyResponsiveBar from "./NivoBar";
// import MyResponsiveBar from

// import RealTime from "./realTime";
const Overview = ({ companyData }) => {
    console.log(companyData);
    return (
        <Container>
            <div className='card_container'>
                <div className='card shadow-lg'>
                    <div className='card_title'>
                        <span className='centralize icon_cont'>
                            <span class='iconify' data-icon='mdi:cart-outline' data-inline='false'></span>
                        </span>
                        <p className='text'>total data</p>
                    </div>
                </div>

                <div className='card shadow-lg'>
                    <div className='card_title'>
                        <div className='centralize icon_cont'>
                            <span class='iconify' data-icon='mdi:currency-usd' data-inline='false'></span>
                        </div>
                        <p className='text'>total Profit</p>
                    </div>
                </div>

                <div className='card shadow-lg'>
                    <span className='card_title'>
                        <div className='centralize icon_cont'>
                            <span class='iconify' data-icon='mdi:storefront-outline' data-inline='false'></span>
                        </div>
                        <p className='text'>total sales</p>
                    </span>
                </div>
            </div>

            <Tabs marginTop={10}>
                <TabList>
                    <Tab>
                        <BiBarChartAlt2 />
                    </Tab>
                    <Tab>
                        <ImStatsBars2 />
                    </Tab>
                    <Tab><GiChart/></Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <div className='section w-full flex justify-between '>
                            <Chart />
                            <Dough />
                        </div>
                    </TabPanel>
                    <TabPanel borderColor='#000' border={1}>
                        <div className='nivo w-full h-96 '>
                            <MyResponsiveBar srcData={srcData} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='section w-full h-96 flex justify-center items-center '>
                            <h1 className='font-joe text-4xl font-semiold text-cener w-3/5'>
                                oops🥺!! I got the task late on my mail couldn't implement much
                            </h1>
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
};

export default Overview;
