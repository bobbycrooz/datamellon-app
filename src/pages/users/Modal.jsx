/* eslint-disable no-restricted-globals */
import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const Modal = ({ showModal, states }) => {
    const modalRef = React.useRef();
    let data = states.modalData;
    function handleClose(evnt) {
        if (modalRef && modalRef.current !== event.target) {
            showModal();
        }
        // toggleIsUpdating((prev) => !prev);
        showModal();
        console.log(modalRef.current);
    }

    function backDrop() {
        if (modalRef && modalRef.current === event.target) {
            showModal();
        }
    }

    return (
        <ModalLayer className='centralize' ref={modalRef} onClick={backDrop}>
            <div className='card p-2 '>
                <div className='action my-1 flex justify-between'>
                    <div className='w-4'></div>
                    <button onClick={handleClose} className='times  p-2 bg-red-500 hover:shadow-2xl cursor-pointer'>
                        <FaTimes className='text-white' />
                    </button>
                </div>
                <h1 className='font-bold font-src text-2xl text-gray-800 capitalize my-3 ml-4'>shipping details</h1>

                {/* ~~~~~~~~~~~ */}

                <div className='box  p-2 flex my-6 font-src'>
                    <div className='date w-full pl-1'>
                        <h1 className='text-lg text-gray-700 font-bold capitalize'>ship date</h1>
                        <p className=' ml-2 text-gray-500 font-normal'>{data["Ship Date"]}</p>
                    </div>
                    <div className='date w-full pl-1 border-l'>
                        <h1 className='text-lg text-gray-700 font-bold capitalize'>ship mode</h1>
                        <p className=' ml-2 text-gray-500 font-normal'>{data["Ship Mode"]}</p>
                    </div>
                </div>
                {/* ~~~~~~~~~~~ */}

                <div className='box  p-2 flex my-6 font-src'>
                    <div className='date w-full pl-1'>
                        <h1 className='text-xl text-gray-700 font-bold capitalize'>order date</h1>
                        <p className='ml-2 text-gray-500 font-normal'>{data["Order Date"]}</p>
                    </div>
                    <div className='date w-full pl-1 border-l'>
                        <h1 className='text-lg text-gray-700 font-bold capitalize'>region</h1>
                        <p className='ml-2 text-gray-500 font-normal'>{data.Region}</p>
                    </div>
                </div>

                {/* ~~~~~~~~~~~ */}

                <div className='box  p-2 flex my-6 font-src'>
                    <div className='date w-full pl-1'>
                        <h1 className='text-lg text-gray-700 font-bold capitalize'>category</h1>
                        <p className='ml-2 text-gray-500 font-normal'>{data.Category}</p>
                    </div>
                    <div className='date w-full pl-1 border-l'>
                        <h1 className='text-lg text-gray-700 font-bold capitalize'>sub-category</h1>
                        <p className='ml-2 text-gray-500 font-normal'>{data["Sub-Category"]}</p>
                    </div>
                </div>
            </div>
        </ModalLayer>
    );
};

const ModalLayer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    height: 100%;
    background: #031021a9;

    .card {
        width: 400px;
        /* height: 553px; */
        background: #fff;
        /* z-index: 5; */
    }
`;

// const Card = styled.div``;

export default Modal;
