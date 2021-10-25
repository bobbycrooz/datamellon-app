import React from "react";
import Logo from "../../assets/datalogo.png";
import { AuthPage } from "./style";
import { Button } from "@chakra-ui/react";
import BeatLoader from "react-spinners/BeatLoader";
// import axios from "axios";
import dummyData from "../../comapay";
// _______________________________________________________________________
const Auth = ({ toggleUser, companyData, setCompapnyData }) => {
    // async function getData() {
    //     try {
    //         const { data } = await axios.post("https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub", {
    //             angular_test: "angular-developer",
    //         });

    //         setCompapnyData(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    React.useEffect(() => {
        // getData();
        setTimeout(() => {
            setCompapnyData(dummyData);
        }, 2000);
    }, [setCompapnyData]);
    return (
        <AuthPage>
            <div className='auth_content'>
                <div className='logo_container'>
                    <img src={Logo} alt='ajoo logo' />
                </div>
                <div className='heroText w-full text-left'>
                    <h1 className='insight font-joe'>Detailed and analytic insight to your data </h1>
                </div>
                <Button
                    onClick={toggleUser}
                    color='#575757'
                    backgroundColor='#41a30066'
                    loadingText='fetching..'
                    variant='outline'
                    isLoading={companyData ? false : true}
                    spinner={<BeatLoader />}>
                    Proceed
                </Button>
            </div>
        </AuthPage>
    );
};

export default Auth;

// spinner={<BeatLoader size={10} color='#41a300' />}
// isLoading
