import { useState } from "react";

function Bmi({ setBmi, setCategory }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    let categoryValue = "";
    if (bmiValue < 18.5) {
      categoryValue = "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      categoryValue = "Normal weight";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      categoryValue = "Overweight";
    }
    setBmi(bmiValue);
    setCategory(categoryValue);
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm text-gray-700">Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="Enter weight"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm text-gray-700">Height (cm)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="Enter height"
        />
      </div>
      <button
        onClick={calculateBMI}
        className="bg-amber-400 text-white py-2 px-4 rounded w-full hover:bg-amber-500"
      >
        Calculate BMI
      </button>
    </div>
  );
}

export default Bmi;
