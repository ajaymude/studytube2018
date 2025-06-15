import React from "react";
import Cards from "../../component/Cards";
import { Outlet } from "react-router-dom";

const Exams = () => {
  const exams = [
    "UPSC Civil Services (IAS)",
    "State PSC (like MPSC, MPPSC, UPPCS)",
    "SSC CGL",
    "SSC CHSL",
    "Bank PO (IBPS, SBI, RBI)",
    "NEET (Medical)",
    "JEE Main",
    "JEE Advanced",
    "GATE",
    "CAT",
    "XAT",
    "MAT",
    "CLAT",
    "AILET",
    "CUET",
    "NDA",
    "CDS",
    "AFCAT",
    "SBI Clerk",
    "IBPS Clerk",
    "RRB NTPC",
    "RRB JE",
    "LIC AAO",
    "RBI Grade B",
    "UPTET",
    "CTET",
    "NET (UGC-NET)",
    "GPAT",
    "AIIMS (Nursing/Medical)",
    "BITSAT",
    "VITEEE",
    "COMEDK",
    "SRMJEEE",
    "IIT JAM",
    "NIFT Entrance",
    "NID DAT",
    "NMAT",
    "SNAP",
    "CMAT",
    "IPMAT",
    "DU LLB Entrance",
    "AMU Entrance",
    "Olympiads (NTSE, IMO, NSO, etc.)",
  ];

  return (
    <div className="grid grid-cols-4 gap-4  mr-4 ml-4 mb-4 flex-wrap justify-center">
      {exams.map((subject, index) => (
        <Cards key={index} title={subject} />
      ))}
    </div>
  );
};

export default Exams;
