import React from "react";
import Hero from "../component/Hero";
import SignupPage from "./auth/Signup";
import Signin from "./auth/Signin";
import Cards from "../component/Cards";

const Home = () => {
  const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "History",
    "Geography",
    "English",
    "Hindi",
    "Political Science",
    "Economics",
    "Business Studies",
    "Accountancy",
    "Computer Science",
    "Information Technology",
    "Psychology",
    "Philosophy",
    "Sociology",
    "Physical Education",
    "Environmental Science",
    "Statistics",
    "Commerce",
    "Marketing",
    "French",
    "Spanish",
    "German",
    "Arts",
    "Music",
    "Dance",
    "Theatre",
    "Fine Arts",
    "Civics",
    "Ethics",
    "Law",
    "Media Studies",
    "Engineering Graphics",
    "Home Science",
    "Astronomy",
    "Zoology",
    "Botany",
    "Anthropology",
    "Literature",
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mt-20 mr-4 ml-4 mb-4 flex-wrap justify-center">
      {subjects.map((subject, index) => (
        <Cards key={index} title={subject} />
      ))}
    </div>
  );
};

export default Home;
