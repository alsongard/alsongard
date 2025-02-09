import freetogame from "../images/freetogame.png";
import aron_architect from "../images/aron_architect.png";
import michelle from "../images/michelle.png"
import crime_report_website from "../images/crime_report_website.png"
import movie_scrapper from "../images/movie_scrapper.png";
import air_decision_tree from "../images/air_pollution_decision_tree1.png";

const data = {
    "web development projects": [
        {
            id: 1,
            name : "freetogame webapp", 
            short_description:"Lorem Ispum",
            description: "Lorem Ispum",
            img: freetogame,
            url: "https://github.com/alsongard/movie_series_scrapper"

        },
        {
            id: 2,
            name : "architecture webapp",
            short_description:"Lorem Ispum",
            description: "Lorem Ispum",
            img: aron_architect,
            url: "https://aronarchitect.netlify.app/"
        },
        {
            id: 3,
            name : "michelles restaurant",
            short_description:"Lorem Ispum",
            description: "Lorem Ispum",
            img: michelle,
            url: "https://michellekitchens.netlify.app/"
        },
        {
            id: 4,
            name : "crime report website",
            short_description:"This website will be used by users to report crimes and security officers can look at these data from the database",
            description: "Lorem Ispum",
            img: crime_report_website,
            url: "https://github.com/alsongard/Crime-Reporting-Website"

        }
    ],
    "data science projects":
    [
        {
            id: 1,
            name: "air pollution prediction model",
            short_description:"Lorem Ispum",
            description: "Lorem Ispum",
            img: air_decision_tree,
            url: "https://github.com/alsongard/airpollution-data-analysis-"

        },
        {
            id: 2,
            name: "yts.mx web scrapper", 
            short_description:"Lorem Ispum",
            description: "Lorem Ispum",
            img: movie_scrapper,
            url: "https://github.com/alsongard/movie_series_scrapper"
        }
    ]

}

export default data;