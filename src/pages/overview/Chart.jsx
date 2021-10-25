import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

let chartData = {
    labels: ["Monday", "Tues", "Wed", "Thus", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "Numbers of Contribution",
            data: [1200, 1100, 1300, 500, 900, 1500, 2000],
            backgroundColor: "#78cc3f",
            barThickness: 30,
        },
    ],
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
};

const Chart = () => {
    return (
        <Wrapper className=''>
            <Bar data={chartData} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 60%;
`;
export default Chart;
