import React from "react";
import Cards from "../../component/Cards";

const Subjects = () => {
  const subjects = [
    "General Intelligence & Reasoning",
    "General Awareness",
    "Quantitative Aptitude",
    "English Comprehension",
  ];
  return (
    <div className="grid grid-cols-4 gap-4  mr-4 ml-4 mb-4 flex-wrap justify-center">
      {subjects.map((subject, index) => (
        <Cards key={index} title={subject} />
      ))}
    </div>
  );
};

export default Subjects;
