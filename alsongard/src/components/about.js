function About(){
    return (
        <section id="aboutme" class="about">
            <h2 class="title-sections">About Me</h2>
            <hr/>
            <p id="about-text">I am a passionate in web development, programming, and network administration. My journey in the tech world began with a fascination for creating seamless digital experiences, evolving into a multi-faceted skill set that spans both front-end and back-end development, proficiency in C++ and Python, and a solid foundation in networking. My ultimate goal is to delve deeper into cybersecurity, aspiring to become a trusted penetration tester.</p>
            <h1 class="title-sections">Skills</h1>
            <hr/>
            <div class="levels">
                <div class="field webskills">
                    <h3>Web Development</h3>
                    <hr class="inspace"/>
                    <h4>Front-End</h4>
                    <ul>
                        <li>HTML5, CSS3, JavaScript (ES6+)</li>
                        <li>Responsive Design</li>
                    </ul>
                    <h4>Back-end</h4>
                    <ul>
                        <li>PHP</li>
                        <li>MySQL DataBase</li>
                    </ul>
                </div>
                <div class="field progamming">
                    <h3>Programming Languages</h3>
                    <hr class="inspace"/>
                    <h4>C++ </h4>
                    <ul>
                        <li>Object-Oriented Programming</li>
                        <li>Data Structures and Algorithms</li>
                        {/* <!-- <li>Multi-threading and Parallel Programming</li> --> */}
                        <li>Model Design using Unified Modelling Language</li>
                    </ul>
                    <h4>Python</h4>
                    <ul>
                        <li>Computer Vision Applications</li>
                    </ul>
                </div>
                <div class="field networking ">
                    <h3>Network administration</h3>
                    <hr class="inspace"/>
                    <h4>Networking Protocols</h4>
                    <ul>
                        <li>TCP/IP, DNS, DHCP</li>
                        <li>VPNs, VLANs, Subnetting</li>
                    </ul>
                </div>
                <div class="field security ">
                    <h3>Security and Penetration Tester</h3>
                    <hr class="inspace"/>
                    <ul>
                        <li>Reconnaissance/Informatin Gathering</li>
                        <li>vulnerability assessment and exploitation</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}