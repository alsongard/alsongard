import type {Data} from "@/type"
const data:Data = {
    "web development projects": [
        {
            id: 1,
            name: "MindBridge Mental Web Platform",
            short_description: "A mental health platform for University Students",
            date: "",
            description: "A full-stack web application designed to bridge the gap between university students and mental health counseling services. The platform facilitates secure booking, communication, and support within an educational environment",
            img: "/images/mindbridge.png",
            url: "https://universitystudentmentalhealth.vercel.app/",
            techStack: ["react", "redux", "nodejs", "express","mongodb", "tailwindcss", "socket.io"]
        },
        {
            id: 2,
            name : "SkyLux Airport Booking System",
            short_description:"Lorem Ispum",
            date: "",
            description: "A full-stack airport booking platform where users can search, compare, and book flights with a modern interface and secure authentication system.",
            img: "/images/airport_webapp.png",
            url: "https://air-port-web-application.vercel.app/",
            techStack: ["react", "redux", "nodejs", "express","mongodb", "tailwindcss"]
        },
        {
            id: 4,
            name : "Bugger Track App",
            short_description:"Lorem Ispum",
            date: "",
            description: "Welcome to BugTrack — your centralized hub for identifying, managing, and resolving software bugs efficiently. Stay organized, stay productive",
            img: "/images/bugger_track.png",
            url:"https://bugtrackerwebapp.vercel.app/",
            techStack: ["react", "redux", "nodejs", "express","mongodb", "tailwindcss"]
        },
        // {
        //     id: 5,
        //     name : "crime report website",
        //     short_description:"This website will be used by users to report crimes and security officers can look at these data from the database",
        //     date: "",
        //     description: "Lorem Ispum",
        //     img: "/images/crime_report_website.png",
        //     url: "https://github.com/alsongard/Crime-Reporting-Website",
        //     techStack: ["python", "PySide6", "MongoDB"]

        // },
    ],
    "data science projects":
    [
        {
            id: 1,
            name: "air pollution prediction model",
            short_description:"Lorem Ispum",
            date: "",
            description: "This machine learning project focuses on predicting the Air Quality Index (AQI) based on concentrations of various air pollutants. The model analyzes how different pollutants affect overall air quality and provides accurate AQI predictions using a Decision Tree learning algorithm.",
            img: "/images/air_pollution_decision_tree1.png",
            url: "https://github.com/alsongard/airpollution-data-analysis-",
            techStack: ["python", "scikit-learn", "streamlit", 'seaborn','matplotlib']
        },
        {
            id: 2,
            name: "yts.mx web scrapper", 
            short_description:"Lorem Ispum",
            date: "",
            description: "A comprehensive web scraping and data analysis application that extracts movie data from YTS.MX and provides an interactive dashboard for insightful visualizations. This project combines web scraping capabilities with an intuitive Streamlit interface to help users discover trending movies, analyze ratings, and explore genres.",
            img: "/images/movie_scrapper.png",
            url: "https://github.com/alsongard/movie_series_scrapper",
            techStack: ["scrapy", "python", "streamlit"]
        }
    ], 
    "game development projects":
    [
        {
            id:1,
            name: "Monster chasing game",
            short_description: "lorem ispum",
            date: "",
            description: "A 2D platformer game where players evade respawning monsters. Developed in Unity as part of game development learning journey.",
            img:"/images/game_development.png",
            url:"https://github.com/alsongard/monster_chasing_game",
            techStack: ["csharp", "Unity2D"]
        }
    ],
    "desktop applications":
    [
        {
            id: 1,
            name: "KaliDev-Track",
            short_description: "",
            date: "",
            description: "is a desktop application for tracking the progress of your software projects and tasks. Built with PySide6, it provides a user-friendly interface to manage, view, and organize your projects efficiently.",
            img: "/images/kalidev_track.png",
            url:"https://github.com/alsongard/KALIDEV-TRACK",
            techStack: ["python", "PySide6", "MongoDB"]
        }
    ]

}

export default data;