import user_1 from "../public/images/user_1.jpg"
import Link from "next/link";

export const metadata = {
  title: "AlsonGard",
  description: "home page"
}


export default function Home() {
  return (
    <div>
      <section className="dark:bg-gradient-to-tl from-[rgb(93,109,126)] to-[rgb(33,47,60)] h-[95vh] ">
        <div className="pt-[30px]">
          <h1 className="text-center text-[33px] font-bold">Gard Alson</h1>
          <p className="text-center font-semibold">Full Stack Developer & PenTester</p>

          {/* short text for introduction */}
          <p className="text-center w-[70%] mx-auto">I am a versatile Full Stack Developer and PenTester with a passion for building robust web applications and ensuring their security. With expertise in both front-end and back-end technologies, I strive to deliver seamless user experiences while safeguarding systems against vulnerabilities.</p>
          
          {/* icons for getting in touch */}
          {/* <div className="flex  flex-row justify-between w-[250px] h-[45px] my-[20px] mx-auto">
              <div className="bg-slate-500 p-[10px] rounded-md hover:bg-white hover:border-2 hover:border-slate-950 "><FaGithub className="text-[23px]"/></div>
              <div className="bg-slate-500 p-[10px] rounded-md hover:bg-white hover:border-2 hover:border-slate-950"><FaLinkedin className="text-[23px]"/></div>
              <div className="bg-slate-500 p-[10px] rounded-md hover:bg-white hover:border-2 hover:border-slate-950"><FaTwitter className="text-[23px]"/></div>
          </div> */}

          <div className="w-[330px] myImage mx-auto mt-[20px] h-[330px]">
              <img  className=" w-[100%] h-[100%] rounded-full " src="images/user_1.jpg" alt="fullstack/hacker"/>
          </div>
        </div>
      </section>
      <section className="dark:bg-slate-600 pt-[10px] ">

        {/* <div className=" w-[80%] text-white p-[50px] mx-auto dark:bg-slate-500" > */}
        <div className=" w-[80%] dark:text-white p-[50px] mx-auto " >
          <h1>Serivces I Offer</h1>
          <ul className="list-disc text-left pl-[20px]">
            <li>Web Develoliment and design both front-end and back-end</li>
            <li>Data analyst</li>
            <li>Web Scraping</li>
            <li>Software Development using C++ and Python</li>
            <li>Building Prediction Models</li>
          </ul>
        </div>
      </section>
      <section className="dark:bg-slate-600 pt-[20px] pb-[50px]">
        <h1 className="text-white text-center text-[40px] font-semibold">Techstack</h1>

        {/* techstack container */}
        <div className=" mx-auto w-[100%] grid grid-cols-3 gap-x-4 px-[20px]">
          <div className="techstack-container  dark:border-none border-2 border-black text-center mt-[30px] bg-white py-[10px] px-[10px] rounded-md ">
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

          <div className="techstack-container border-2 border-black text-center mt-[30px] bg-white py-[10px] px-[10px] rounded-md ">
          
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

          <div className="techstack-container border-2 border-black text-center mt-[30px] bg-white py-[10px] px-[10px] rounded-md ">
          
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

          <div className="techstack-container border-2 border-black text-center mt-[30px] bg-white py-[10px] rounded-md ">
          
            <h1 className="text-[23px]">Software Development</h1>
            <p>Designing and developing high-performance applications using C++ for both desktop and embedded systems</p>

            <h2>TechStack</h2>
            <ul>
                <li>C++</li>
            </ul>
          </div>
        </div>

        <Link href="/projects"><button className="mt-[50px] px-[10px] py-[2px] border-2 border-black rounded-md  block  mx-auto bg-white">View Projects</button></Link>
        </section>
    </div>

    );
}
