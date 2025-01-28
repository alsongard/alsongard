import React from "react";
import Header from "./header";
import Home from "./home";
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom"
function Page()
{
    const [darkMode, setDarkMode] = React.useState(false);

    const answer = darkMode ? "dark" : ""
    return(
        <main className={`${answer}`}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<div><Header darkModeNew={darkMode} setDarkModeNew={setDarkMode}/> <Outlet/></div>}>
                        <Route index element={<Home/>}/>

                    </Route>
                </Routes>
            </BrowserRouter>
            
        </main>
    )
}
export default Page;