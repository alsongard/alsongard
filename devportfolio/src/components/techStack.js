import { Link } from "react-router-dom";
function TechStack()
{
    return (
        <section className="bg-[#232323]">
            <h1 className="text-white text-center text-[40px] font-semibold">Techstack</h1>

            {/* techstack container */}
            <div className=" mx-auto w-[100%] grid grid-cols-3 gap-x-4 px-[20px]  ">
                <div className="techstack-container  text-center mt-[30px] bg-white py-[10px] px-[10px] rounded-md ">
                    <h1 className="text-[23px]">Front-End Developer</h1>
                    <p className="">Crafting visually appealing and responsive landing pages and user interfaces to enhance user experience.</p>
                    
                    <h2 className="mt-[10px]">Core Technologies</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript (ES6+)</li>
                    </ul>

                    <h2 className="mt-[10px]">Frameworks & Libraries</h2>
                    <ul>
                        <li>React</li>
                        <li>Tailwindcss</li>
                    </ul>

                </div>

                <div className="techstack-container  text-center mt-[30px] bg-white py-[10px] px-[10px] rounded-md ">
                    <h1 className="text-[23px]" >Back-End Developer</h1>
                    <p>Building and maintaining robust server-side applications and databases to ensure smooth data flow and secure storage.</p>

                    <h2 className="mt-[10px]">Core Technologies</h2>
                    <ul>
                        <li>PHP</li>
                        <li>SQL (MySQL)</li>
                    </ul>
                    
                    <h2 className="mt-[10px]" >Frameworks & Tools</h2>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                    </ul>
                </div>  

                <div className="techstack-container  text-center mt-[30px] bg-white py-[10px] px-[10px] rounded-md ">
                    <h1 className="text-[23px]">Data Analyst</h1>
                    <p>Transforming raw data into actionable insights to drive better decision-making through analysis and visualization.</p>
                    
                    <h2 className="mt-[10px]">Core Technologies</h2>
                    <ul>
                        <li>Python</li>
                    </ul>

                    <h2 className="mt-[10px]">Libraries</h2>
                    <ul>
                        <li>Pandas</li>
                        <li>Matplotlib</li>
                        <li>Scikit learn</li>
                        <li>Numpy</li>
                        <li>Streamlit</li>
                    </ul>
                </div>
                <div className="techstack-container  text-center mt-[30px] bg-white py-[10px] rounded-md ">
                    <h1 className="text-[23px]">Software Development</h1>
                    <p>Designing and developing high-performance applications using C++ for both desktop and embedded systems</p>

                    <h2>TechStack</h2>
                    <ul>
                        <li>C++</li>
                    </ul>
                </div>
            </div>
            <Link to="/projects"><button className="mt-[50px] px-[10px] py-[2px] rounded-md  block  mx-auto bg-white">View Projects</button></Link>
        </section>
    )
}

export default TechStack;