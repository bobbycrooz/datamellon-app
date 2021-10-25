import React from "react";
import { Pages } from "./styles";
import Sidebar from "../components/Sidebar";
import { Switch, Route } from "react-router-dom";
import Overview from "../pages/overview/Overview";
import Users from "../pages/users/Users";
import Logo from "../assets/datalogo.png";
import { useHistory } from "react-router-dom";

const Dashboard = ({ toggleUser, companyData, setCompapnyData }) => {
    const history = useHistory();

    React.useEffect(() => {
        // if (location.pathname === "/") {
        history.push("/overview");
        // }
    }, [history]);

    return (
        <>
            <Sidebar toggleUser={toggleUser} />
            <Pages>
                <header>
                    <img src={Logo} alt='' className='ml-8' />
                </header>

                <section>
                    <Switch>
                        <Route exact path='/users'>
                            <Overview companyData={companyData} />
                        </Route>

                        <Route exact path='/overview'>
                            <Users companyData={companyData} setCompapnyData={setCompapnyData}/>
                        </Route>
                    </Switch>
                </section>
            </Pages>
        </>
    );
};

export default Dashboard;
