import styled from "styled-components";

export const Container = styled.div`
    width: calc(100vw - 280px);
    height: 100vh;
    padding: 2rem;
    background: #fbf9fc;
    margin-bottom: 20px;
    position: relative;

    .table_container {
        position: sticky;
        top: 0;

        .table {
            /* height: 300px; */
            &-body {
                height: 460px;
            }
        }
    }

    @media screen and (max-width: 880px) {
        width: 100%;
    }
`;
