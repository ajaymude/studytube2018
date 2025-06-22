import React, { useState } from "react";

/**
 * A form component with four select dropdowns, a text input, and a submit button.
 * Background is black and text is white.
 */
const MyForm = () => {
  // Dummy options
  const dummyOptions = [
    "Option A",
    "Option B",
    "Option C",
    "Option D",
    "Option E",
  ];

  const [selectedOption1, setSelectedOption1] = useState(dummyOptions[0]);
  const [selectedOption2, setSelectedOption2] = useState(dummyOptions[0]);
  const [selectedOption3, setSelectedOption3] = useState(dummyOptions[0]);
  const [selectedOption4, setSelectedOption4] = useState(dummyOptions[0]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", {
      selectedOption1,
      selectedOption2,
      selectedOption3,
      selectedOption4,
      inputValue,
    });
    ``;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-black text-white rounded shadow"
    >
      <div className="space-y-4">
        {[1, 2, 3, 4].map((num) => (
          <label key={num} className="block font-semibold">
            Select Option {num}:
            <select
              value={
                num === 1
                  ? selectedOption1
                  : num === 2
                  ? selectedOption2
                  : num === 3
                  ? selectedOption3
                  : selectedOption4
              }
              onChange={(e) => {
                const val = e.target.value;
                if (num === 1) setSelectedOption1(val);
                else if (num === 2) setSelectedOption2(val);
                else if (num === 3) setSelectedOption3(val);
                else setSelectedOption4(val);
              }}
              className="mt-1 block w-full border-gray-600 bg-gray-800 text-white rounded"
              required
            >
              {dummyOptions.map((opt) => (
                <option
                  key={`${num}-${opt}`}
                  value={opt}
                  className="bg-black text-white"
                >
                  {opt}
                </option>
              ))}
            </select>
          </label>
        ))}

        <label className="block font-semibold">
          Enter text:
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type here..."
            className="mt-1 block w-full border-gray-600 bg-gray-800 text-white rounded"
            required
            autoComplete="text"
          />
        </label>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default MyForm;
