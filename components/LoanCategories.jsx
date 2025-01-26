import React from "react";

export const LoanCategories = () => {
  const categories = [
    { name: "Wedding Loans", maxLoan: "PKR 5 Lakh", duration: "3 years" },
    { name: "Home Construction Loans", maxLoan: "PKR 10 Lakh", duration: "5 years" },
    { name: "Business Startup Loans", maxLoan: "PKR 10 Lakh", duration: "5 years" },
    { name: "Education Loans", maxLoan: "Based on Requirement", duration: "4 years" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition"
        >
          <h3 className="text-xl font-bold text-blue-600">{category.name}</h3>
          <p className="text-gray-700">Maximum Loan: {category.maxLoan}</p>
          <p className="text-gray-700">Loan Period: {category.duration}</p>
        </div>
      ))}
    </div>
  );
};
