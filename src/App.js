import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { lightTheme } from "./styles/theme";
import Dashboard from "./Dashboard/Dashboard";
// import { useThemeContext } from './context/themeContext'
import Auth from "./pages/Auth/Auth";

function App() {
    const [proceed, setProceed] = useState(false);
    const [companyData, setCompapnyData] = React.useState(null);

    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            {proceed ? (
                <Dashboard
                    companyData={companyData}
                    setCompapnyData={setCompapnyData}
                    toggleUser={() => setProceed((p) => !p)}
                />
            ) : (
                <Auth
                    toggleUser={() => setProceed((p) => !p)}
                    companyData={companyData}
                    setCompapnyData={setCompapnyData}
                />
            )}
        </ThemeProvider>
    );
}

export default App;
