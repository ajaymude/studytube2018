import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Card = ({ title = "test" }) => {
  const { exam } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

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
    "Applied Mathematics",
  ];

  return (
    <div>
      <button
        onClick={handleGoBack}
        className="flex items-center gap-2 px-3 py-2 text-white bg-gray-800 rounded hover:bg-gray-700 transition"
      >
        <ArrowLeft className="w-5 h-5" />
        Go Back
      </button>
      <Link
        to={title.replace(/\s+/g, "-")}
        className="w-full flex items-center justify-center min-h-[100px] rounded-lg bg-black overflow-hidden p-4 mt-6"
      >
        <h2 className="text-white font-semibold text-2xl md:text-3xl text-center ">
          {exam}
        </h2>
      </Link>

      {/* List of Chapters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {chapters.map((chapter, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center min-h-[60px] rounded-lg bg-gray-900 text-white p-3 text-lg font-medium shadow"
          >
            {chapter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
