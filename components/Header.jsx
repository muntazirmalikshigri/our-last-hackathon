"use client";

import React, { useState } from "react";
import Link from "next/link";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { LoanCalculator } from "./LoanCalculator"; // Import LoanCalculator

export const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLoanCalculator, setShowLoanCalculator] = useState(false);

  // Close all modals
  const closeAllModals = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowLoanCalculator(false);
  };

  const handleLoginClick = () => {
    closeAllModals();
    setShowLogin(true);
  };

  const handleRegisterClick = () => {
    closeAllModals();
    setShowRegister(true);
  };

  const handleLoanCalculatorClick = () => {
    closeAllModals();
    setShowLoanCalculator(true);
  };

  return (
    <div>
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Saylani Microfinance</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLoanCalculatorClick}
                  className="hover:underline focus:outline-none"
                >
                  LoanCalculator
                </button>
              </li>
              <li>
                <button
                  onClick={handleLoginClick}
                  className="hover:underline focus:outline-none"
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  onClick={handleRegisterClick}
                  className="hover:underline focus:outline-none"
                >
                  Register
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Conditionally render LoginForm */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative">
            <button
              onClick={closeAllModals}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              X
            </button>
            <LoginForm />
          </div>
        </div>
      )}

      {/* Conditionally render RegisterForm */}
      {showRegister && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative">
            <button
              onClick={closeAllModals}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              X
            </button>
            <RegisterForm />
          </div>
        </div>
      )}

      {/* Conditionally render LoanCalculator */}
      {showLoanCalculator && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg relative">
            <button
              onClick={closeAllModals}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              X
            </button>
            <LoanCalculator />
          </div>
        </div>
      )}
    </div>
  );
};

