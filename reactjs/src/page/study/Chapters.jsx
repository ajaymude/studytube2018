import React from "react";
import Cards from "../../component/Cards";

const Chapters = () => {
    

  const chapters = [
    "Algebra",
    "Geometry",
    "Trigonometry",
    "Calculus",
    "Statistics",
    "Probability",
    "Number Theory",
    "Linear Algebra",
    "Differential Equations",
    "Discrete Mathematics",
    "Set Theory",
    "Mathematical Logic",
    "Combinatorics",
    "Vector Algebra",
    "Real Analysis",
    "Complex Analysis",
    "Topology",
    "Mathematical Induction",
    "Matrices and Determinants",
    "Coordinate Geometry",
    "Graph Theory",
    "Mathematical Modelling",
    "Numerical Methods",
    "Integral Calculus",
    "Differential Calculus",
    "Sequence and Series",
    "Group Theory",
    "Ring Theory",
    "Field Theory",
    "Transformation Geometry",
    "Applied Mathematics"
  ];
  return (
    <div className="grid grid-cols-4 gap-4  mr-4 ml-4 mb-4 flex-wrap justify-center">
      {chapters.map((subject, index) => (
        <Cards key={index} title={subject} />
      ))}
    </div>
  );
};

export default Chapters;