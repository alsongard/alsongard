import { FaMoon } from "react-icons/fa6";
import React from "react";
function Header({darkMode, setDarkMode}){
    React.useEffect(()=>{
        const header = document.querySelector("header");
        window.addEventListener ("scroll", function() {
            header.classList.toggle ("sticky", window.scrollY > 0);
        });
        
    },[])

    function handleDarkMode()
    {
        return (
            setDarkMode((darkMode)=>{
                console.log(`Value of darkMode is : ${darkMode}`);
                const result = !darkMode
                console.log(`Value of darkMode after is : ${result}`);

                return result;
            })

        )
    }
    return (
        <header>

            <div class="header-container">
                <div class="logo">
                    <p>Alsongard</p>
                </div>
                {/* <div id="menu">
                    <i class='bx bx-menu'></i>
                </div> */}
                <ul class="nav-bar">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#aboutme">ABOUT</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                </ul>
                <div class="dropHolder">
                    <ul class="dropDownMenu">
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#aboutme">ABOUT</a></li>
                        <li><a href="#services">SERVICES</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        <li><a href="#projects">PROJECTS</a></li>
                    </ul>
                </div>
                <div onClick={handleDarkMode}>
                    <FaMoon />
                </div>

            </div>
    </header>
    )
}

export default Header;