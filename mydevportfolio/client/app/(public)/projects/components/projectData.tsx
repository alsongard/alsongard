import type {Data} from "@/type"
const data:Data = {
    "web development projects": [
        {
            id: 1,
            projectname: "MindBridge Mental Web Platform",
            shortdescription: "A mental health platform for University Students",
            startdate: "",
            enddate: "",
            projectdescription: "A full-stack web application designed to bridge the gap between university students and mental health counseling services. The platform facilitates secure booking, communication, and support within an educational environment",
            projectimage: "/images/mindbridge.png",
            githuburl: "",
            projecttype:"web development projects",
            projecturl: "https://universitystudentmentalhealth.vercel.app/",
            techstack: ["react", "redux", "nodejs", "express","mongodb", "tailwindcss", "socket.io"]
        },
        {
            id: 2,
            projectname : "SkyLux Airport Booking System",
            shortdescription:"Lorem Ispum",
            startdate: "",
            enddate: "",
            projecttype:"web development projects",
            projectdescription: "A full-stack airport booking platform where users can search, compare, and book flights with a modern interface and secure authentication system.",
            projectimage: "/images/airport_webapp.png",
            projecturl: "https://air-port-web-application.vercel.app/",
            githuburl: "",
            techstack: ["react", "redux", "nodejs", "express","mongodb", "tailwindcss"]
        },
        {
            id: 4,
            projectname : "Bugger Track App",
            shortdescription:"Lorem Ispum",
            startdate: "",
            enddate: "",
            projecttype: "web development projects",
            projectdescription: "Welcome to BugTrack — your centralized hub for identifying, managing, and resolving software bugs efficiently. Stay organized, stay productive",
            projectimage: "/images/bugger_track.png",
            githuburl:"https://bugtrackerwebapp.vercel.app/",
            projecturl:"https://bugtrackerwebapp.vercel.app/",
            techstack: ["react", "redux", "nodejs", "express","mongodb", "tailwindcss"]
        },
        // {
        //     id: 5,
        //     projectname : "crime report website",
        //     shortdescription:"This website will be used by users to report crimes and security officers can look at these data from the database",
        //     date: "",
        //     projectdescription: "Lorem Ispum",
        //     projectimage: "/images/crime_report_website.png",
        //     url: "https://github.com/alsongard/Crime-Reporting-Website",
        //     techstack: ["python", "PySide6", "MongoDB"]

        // },
    ],
    "data science projects":
    [
        {
            id: 1,
            projectname: "air pollution prediction model",
            shortdescription:"Lorem Ispum",
            startdate: "",
            enddate: "",
            projecttype: "",
            githuburl: "",
            projectdescription: "This machine learning project focuses on predicting the Air Quality Index (AQI) based on concentrations of various air pollutants. The model analyzes how different pollutants affect overall air quality and provides accurate AQI predictions using a Decision Tree learning algorithm.",
            projectimage: "/images/air_pollution_decision_tree1.png",
            projecturl: "https://github.com/alsongard/airpollution-data-analysis-",
            techstack: ["python", "scikit-learn", "streamlit", 'seaborn','matplotlib']
        },
        {
            id: 2,
            projectname: "yts.mx web scrapper", 
            shortdescription:"Lorem Ispum",
            startdate: "",
            enddate: "",
            projecttype: "",
            githuburl: "",
            projectdescription: "A comprehensive web scraping and data analysis application that extracts movie data from YTS.MX and provides an interactive dashboard for insightful visualizations. This project combines web scraping capabilities with an intuitive Streamlit interface to help users discover trending movies, analyze ratings, and explore genres.",
            projectimage: "/images/movie_scrapper.png",
            projecturl: "https://github.com/alsongard/movie_series_scrapper",
            techstack: ["scrapy", "python", "streamlit"]
        }
    ], 
    "game development projects":
    [
        {
            id:1,
            projectname: "Monster chasing game",
            shortdescription: "lorem ispum",
            startdate: "",
            enddate: "",
            projecttype: "",
            githuburl: "",
            projectdescription: "A 2D platformer game where players evade respawning monsters. Developed in Unity as part of game development learning journey.",
            projectimage:"/images/game_development.png",
            projecturl:"https://github.com/alsongard/monster_chasing_game",
            techstack: ["csharp", "Unity2D"]
        }
    ],
    "desktop applications":
    [
        {
            id: 1,
            projectname: "KaliDev-Track",
            shortdescription: "",
            startdate: "",
            enddate: "",
            projecttype: "",
            githuburl: "",
            projectdescription: "This is a desktop application for tracking the progress of your software projects and tasks. Built with PySide6, it provides a user-friendly interface to manage, view, and organize your projects efficiently.",
            projectimage: "/images/kalidev_track.png",
            projecturl:"https://github.com/alsongard/KALIDEV-TRACK",
            techstack: ["python", "PySide6", "MongoDB"]
        }
    ]

}

export default data;