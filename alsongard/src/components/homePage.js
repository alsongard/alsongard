import backGround from "../images/landscape_257156.jpg";
import React from "react";
function HomePage()
{
    return(
        <section   className="h-[100vh] relative">
        {/* <section  className=""> */}
        <div style={{backgroundImage: `url(${backGround})`}} className="bg-cover h-[100%] bg-center">
            <div className=" absolute top-[40%] left-[20%] w-[55%] mx-auto ">
                <h1 className="text-white text-[23px]">Gard Alson</h1>
                <h2 className="text-white text-[20px]">Web Developer, C++ & Python Programmer and Aspiring Penetration Tester</h2>
                <p className="text-white text-[19px]">I am Full Stack developer, a programmer and well advanced in C++, Python, an upcoming cyber security analyst</p>
                <p className="text-white text-[19px]">I love coding and designing new websites, indulging in ctfs and designing networks</p>
            </div>
        </div>

        </section>
    )
}
export default HomePage;