import React from "react";
import Header from "./header";
import Home from "./home";
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom"
import Services from "./service";
import ProjectPage from "./ProjectPage";
import Contact from "./contact";
function Page()
{
    const [darkMode, setDarkMode] = React.useState(false);

    const answer = darkMode ? "dark" : ""
    return(
        <main className={`${answer}`}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<div><Header darkModeNew={darkMode} setDarkModeNew={setDarkMode}/> <Outlet/></div>}>
                        <Route index element={<div className="dark:bg-slate-500"><Home/> <Services/></div>}/>
                        <Route path="/projects" element={<ProjectPage/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            
        </main>
    )
}
export default Page;