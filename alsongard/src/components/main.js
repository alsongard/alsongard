import React from "react"
import Header from "./header";
import HomePage from "./homePage";
import About from "./about";
import Projects from "./projects";
import Certification from "./certifications";
import Footer from "./footer";

function Page(){
    const [darkMode, setDarkMode] = React.useState(false);

    const answer = darkMode ? "dark" : ""
    console.log(answer);
    return (
        <div className={`{answer}`}>
        {/* <div className={`{answer}`}> */}
            <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <HomePage/>
            <About/>
            <Projects/>
            <Certification/>
            <Footer/>
        </div>
    )
}

export default Page;