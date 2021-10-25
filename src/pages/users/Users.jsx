import React, { useState } from "react";
import { Container } from "./style";
import dummyData from '../../comapay'

import Modal from "./Modal";
import { FaFilter } from "react-icons/fa";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react";

const Users = ({ companyData, setCompapnyData }) => {
    const initialState = {
        modalData: null,
        showModal: false,
    };
    const [states, setStates] = useState(initialState);

    function moreItem(item) {
        // set modal data and display the modal
        setStates({ ...states, modalData: item, showModal: true });
    }

    function closeModal() {
        // set modal data and display the modal
        setStates({ ...states, modalData: null, showModal: false });
    }

    function filterBy(value) {
     const result = dummyData.filter((roles) => roles.Region === value);
     setCompapnyData(result)
    }

    return (
        <>
            {states.showModal && <Modal showModal={closeModal} states={states} />}

            <Container>
                {/* table info */}
                <div className='table_info text-left  w-full flex justify-between '>
                    <h1 className='text-2xl font-lato font-semibold'>Analysis of your data</h1>
                    <h1 className='text-2xl font-joe'>Sales from 2015</h1>
                </div>
                <main className='table_container'>
                    <div className='table_action w-full h-14  flex items-center justify-between py-1 mt-6 '>
                        {/* <ToastExample /> */}

                        <Menu>
                            <MenuButton as={Button} leftIcon={<FaFilter />} variant='outline' colorScheme='green'>
                                Region
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={() => filterBy("West")}>West</MenuItem>

                                <MenuItem onClick={() => filterBy("East")}>East</MenuItem>
                                <MenuItem onClick={() => filterBy("South")}>South</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>

                    <div className='table w-full relative'>
                        <div className='table-body border w-full h-96 overflow-y-scroll '>
                            <Table variant='striped' marginTop={17} colorScheme='gray'>
                                <TableCaption>Imperial to metric conversion factors</TableCaption>
                                <Thead height={70} width='100%' backgroundColor='#9bfa58' position='sticky' top='0'>
                                    <Tr>
                                        <Th fontSize={17} fontWeight={700} color='#1d1d1def'>
                                            Product
                                        </Th>
                                        <Th fontSize={17} fontWeight={700} color='#1d1d1def'>
                                            Region
                                        </Th>
                                        <Th fontSize={17} fontWeight={700} color='#1d1d1def'>
                                            Customer
                                        </Th>
                                        <Th fontSize={17} fontWeight={700} color='#1d1d1def'>
                                            Location
                                        </Th>
                                        <Th fontSize={17} fontWeight={700} color='#1d1d1def'>
                                            Sales
                                        </Th>

                                        <Th fontSize={17} fontWeight={700} color='#1d1d1def'>
                                            Profit
                                        </Th>
                                        <Th fontSize={17} fontWeight={700} color='#1d1d1def'>
                                            Q
                                        </Th>
                                    </Tr>
                                </Thead>

                                <Tbody>
                                    {companyData?.map((item, index) => (
                                        <Tr
                                            _hover={{
                                                boxShadow: "xl",
                                                color: "teal.500",
                                                cursor: "pointer",
                                            }}
                                            key={index}
                                            onClick={() => moreItem(item)}>
                                            <Td fontSize={13}>{item["Product Name"]}</Td>
                                            <Td>{item.Region}</Td>
                                            <Td>{`${item.Country},${item.state}`}</Td>
                                            <Td>{item["Customer Name"]}</Td>
                                            <Td>{item.City}</Td>
                                            <Td>{item.Profit}</Td>
                                            <Td>{item.Quantity}</Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </div>
                    </div>
                </main>
            </Container>
        </>
    );
};


export default Users;
