import React from "react"
function Header(){
    const [darkMode, setDarkMode] = React.useState(false);
    const headerElement = (
        <header className="flex flex-row ">
                <div class="logo">
                    <p>Alsongard</p>
                </div>
            <div id="menu">
                <i class='bx bx-menu'></i>
            </div>
            <ul class="nav-bar">
                <li><a href="#home">HOME</a></li>
                <li><a href="#aboutme">ABOUT</a></li>
                <li><a href="#services">SERVICES</a></li>
                <li><a href="#contact">CONTACT</a></li>
                <li><a href="#projects">PROJECTS</a></li>
            </ul>
            <div class="dropHolder">
                <ul className=" hidden">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#aboutme">ABOUT</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                </ul>
            </div>
        </header>
    )
    return [darkMode, headerElement];
}

function HomePage(){
    const [darkMode, headerElement] = Header();
    return (
        <div>
            {headerElement}
            <section  class="home">
                <h1>Gard Alson</h1>
                <h2>Web Developer, C++ & Python Programmer, Networking Administrator and Aspiring Penetration Tester</h2>
                <p>I am a web developer both back-end and front-end, a programmer and well advanced in C++, Python, network security administrator and an upcoming cyber security analyst</p>
                <p>I love coding and designing new websites, indulging in ctfs and designing networks</p>
            </section>
        </div>
    )
}

export default HomePage;