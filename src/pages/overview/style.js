import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    background: #fbf9fc;
    width: 100%;

    .card_container {
        width: 780px;
        height: 90px;
        display: flex;
        justify-content: space-between;

        .card {
            width: 253px;
            border: 1px solid #daffc2;
            border-radius: 10px;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 5px;
            // box-shadow: #dccde5 0px 0px 5px 0px, #dccde5 0px 0px 1px 0px;

            .card_title {
                width: 90%;
                margin: 0 auto;
                display: flex;
                align-items: center;
                margin-top: 1rem;

                .icon_cont {
                    border: 1px solid #f6f8fa;
                    border-radius: 50%;

                    width: 40px;
                    height: 40px;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
                    .iconify {
                        font-size: 24px;
                        color: #215200;
                    }
                }

                p {
                    text-transform: uppercase;
                    font-size: 14px;
                    color: #555555;
                    margin-left: 1rem;
                }
            }
        }
    }

    .section {
        display: flex;
        /* justify-content: space-between; */
        height: 380px;
        min-width: 90%;
    }

    @media screen and (max-width: 880px) {
        border: 1px solid green;
    }
`;
