import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

let chartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
        {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],

            backgroundColor: [
                "#78cc3f",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
            cutout: 95,
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

const Dough = () => {
    return (
        <Wrapper className=''>
            <div className='cont'>
                <Doughnut data={chartData} />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 30%;

    .cont {
        width: 100%;
    }
`;
export default Dough;
