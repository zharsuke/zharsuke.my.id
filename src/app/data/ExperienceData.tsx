import tagData from "./TagData";
import techData from "./TechData";

const tag = tagData;
const tech = techData;

const experienceData = [
    {
        id: 1,
        title: "PT RetGoo Sentris Informa",
        position: "Quality Assurance",
        start: "March 2021",
        end: "December 2021",
        tag: [
            tag[0].name
        ],
        description: "Earlier, I learn how business process works. After that, I learn how to test the application based on business process flow, how to documenting it, make the report, and work as team as well."
    },
    {
        id: 2,
        title: "2nd Place Internal Competition 2023",
        position: "Capture The Flag",
        start: "May 2023",
        end: null,
        tag: [
            tag[3].name
        ],
        description: "This competition is held by my campus. Help my team to make writeups. Also learn a lot from this competition. how to work as team as well, how to manage the time, and experience."
    },
    {
        id: 3,
        title: "Finalist KMIPN V",
        position: "Capture The Flag",
        start: "July 2023",
        end: "August 2023",
        tag: [
            tag[3].name
        ],
        description: "This competition is held by State Polytechnic of Electronics Surabaya. Work as team to solve the challenges, and make writeups. Also learn how to solve the challenges, work as team as well, how to manage the time, and memorable experience."
    },
    {
        id: 4,
        title: "Finalist Hology 6.0 Competition",
        position: "Capture The Flag",
        start: "September 2023",
        end: "October 2023",
        tag: [
            tag[3].name
        ],
        description: "This competition is held by Brawijaya University. Work as team to solve the challenges, and make writeups. Also learn how to solve the challenges, work as team as well, how to manage the time, and experience."
    },
    {
        id: 5,
        title: "Amelyn Collection",
        position: "Frontend Web Developer",
        start: "March 2024",
        end: "April 2024",
        tag: [
            tag[1].name
        ],
        tech: [
            tech[17].name,
            tech[18].name,
            tech[14].name,
        ],
        description: "I work as team, build e-commerce website user-admin interface based on figma that my friend designed. Also develop responsive design for mobile."
    },
    {
        id: 6,
        title: "Brain Boost Capture The Flag",
        position: "Speaker",
        start: "April 2024",
        end: null,
        tag: [
            tag[2].name
        ],
        description: "Share my knowledge about cyber security to the audience. Such as what is cyber security, capture the flag, and how to start learning cyber security, tips and tricks to solve the problems, and review challenge. Also learn how to speak in front of the audience."
    }
]

export default experienceData;