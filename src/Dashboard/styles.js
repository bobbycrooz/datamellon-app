import styled from "styled-components";

// export const Container = styled.div`
//   position: fixed;
//   width: 100%;
//   height: 100vh;
//   border: 1px solid red;
// `;

export const Pages = styled.div`
    position: relative;
    margin-left: 260px;
    width: calc(100% - 240px);
    height: 100vh;
    transition: all 0.2s linear;
    overflow-y: hidden;

    header {
        position: fixed;
        z-index: 3;
        top: 0;
        background-color: #fbf9fc;
        min-width: calc(100% - 240px);
        height: 75px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #edf2f6;

        .search_container {
            position: relative;
            width: 300px;
            height: 36px;
            background: #fff;
            margin-left: 30px;
            border-radius: 8px;
            border: 1px solid #f4f7f9;

            .icon {
                position: absolute;
                left: 0;
                width: 40px;
                height: 100%;
                .iconify {
                }
            }

            input {
                position: absolute;

                width: calc(100% - 40px);
                padding-left: 5px;
                position: absolute;
                left: 40px;
                height: 100%;
                background: transparent;
                border: none;

                &:focus {
                    outline: none;
                }
            }
        }

        .profile_container {
            z-index: 33;
            width: 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-right: 40px;

            .thumbnail {
                box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    section {
        position: ;
        width: 100%;
        height: 100%;
        margin-top: 75px;
        padding-right: 10px;
    }

    @media screen and (max-width: 880px) {
        margin-left: 0px;
        section {
            width: 100%;
        }
    }
`;
