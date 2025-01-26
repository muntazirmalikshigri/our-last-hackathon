"use client";

import React, { useState } from "react";

export const LoanCalculator = () => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [calculatedLoan, setCalculatedLoan] = useState(null);

  const categories = {
    "Wedding Loans": ["Valima", "Furniture", "Valima Food", "Jahez"],
    "Home Construction Loans": ["Structure", "Finishing"],
    "Business Startup Loans": [
      "Buy Stall",
      "Advance Rent for Shop",
      "Shop Assets",
      "Shop Machinery",
    ],
    "Education Loans": ["University Fees", "Child Fees Loan"],
  };

  const handleCalculate = () => {
    if (!category || !subcategory || !initialDeposit || !loanPeriod) {
      alert("Please fill all fields before calculating.");
      return;
    }

    const maxLoan = {
      "Wedding Loans": 500000,
      "Home Construction Loans": 1000000,
      "Business Startup Loans": 1000000,
      "Education Loans": 800000,
    };

    const maxAllowed = maxLoan[category] || 0;
    const loanAmount = Math.min(maxAllowed - initialDeposit, maxAllowed);
    setCalculatedLoan({
      category,
      subcategory,
      initialDeposit,
      loanPeriod,
      loanAmount,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Loan Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select a Category</option>
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {category && (
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Subcategory
            </label>
            <select
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select a Subcategory</option>
              {categories[category].map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Initial Deposit (PKR)
          </label>
          <input
            type="number"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Loan Period (Years)
          </label>
          <input
            type="number"
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button
          type="button"
          onClick={handleCalculate}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Calculate Loan
        </button>
      </form>

      {calculatedLoan && (
        <div className="mt-6 bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            Loan Calculation Result
          </h3>
          <p>Category: {calculatedLoan.category}</p>
          <p>Subcategory: {calculatedLoan.subcategory}</p>
          <p>Initial Deposit: PKR {calculatedLoan.initialDeposit}</p>
          <p>Loan Period: {calculatedLoan.loanPeriod} years</p>
          <p className="font-bold">
            Estimated Loan Amount: PKR {calculatedLoan.loanAmount}
          </p>
        </div>
      )}
    </div>
  );
};
