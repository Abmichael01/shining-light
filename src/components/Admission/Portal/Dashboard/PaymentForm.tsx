"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaRegCreditCard, FaRegFileAlt, FaSchool } from "react-icons/fa";

interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // 💰 Admission Fee
  const admissionFee = {
    amount: 20000,
    currency: "NGN",
    breakdown: {
      schoolFee: 15000,
      processingFee: 5000
    }
  };

  // 🧾 Payment Methods
  const paymentMethods: PaymentMethod[] = [
    {
      id: "flutterwave",
      name: "Online Payment",
      description: "Pay securely via Flutterwave",
      icon: <FaRegCreditCard className="w-6 h-6" />
    },
    {
      id: "bank-transfer",
      name: "Bank Transfer",
      description: "Transfer to our bank account",
      icon: <FaRegFileAlt className="w-6 h-6" />
    },
    {
      id: "school-office",
      name: "Visit School Office",
      description: "Pay directly at school finance office",
      icon: <FaSchool className="w-6 h-6" />
    }
  ];

  const handleSubmit = () => {
    // Simulate successful submission
    setSubmitted(true);
  };

  return (
    <div className="w-full mx-auto space-y-8 flex flex-col items-center bg-white border rounded-xl p-6 md:p-10">
      {/* Payment Header */}
      <div className="text-xs font-bold text-center bg-secondary py-2 px-10 text-white w-fit rounded-full">
        Payment
      </div>

      {/* Payment Summary */}
      {!submitted ? (
        <div className="space-y-8 w-full">
          <div className="bg-white/40 rounded-lg">
            <h3 className="text-sm font-semibold text-primary border-b pb-2">
              Admission Fee Breakdown
            </h3>
            
            <div className="mt-4 space-y-4">
              <div className="flex justify-between">
                <span>School Fee</span>
                <span>₦{admissionFee.breakdown.schoolFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Processing Fee</span>
                <span>₦{admissionFee.breakdown.processingFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-100">
                <span className="font-medium">Total Due</span>
                <span className="font-medium">
                  ₦{admissionFee.amount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white/40 rounded-lg">
            <h3 className="text-sm font-semibold text-primary border-b pb-2">
              Select Payment Method
            </h3>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {paymentMethods.map((method) => (
                <div 
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`p-4 border rounded-md cursor-pointer transition-colors ${
                    paymentMethod === method.id 
                      ? "bg-primary/5 border-primary" 
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`mb-3 p-3 rounded-full ${
                      paymentMethod === method.id 
                        ? "bg-primary/10 text-primary" 
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      {method.icon}
                    </div>
                    <h4 className="font-medium">{method.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center text-sm pt-4">
            {paymentMethod === "flutterwave" && (
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Proceed to Payment
              </button>
            )}

            {paymentMethod === "bank-transfer" && (
              <div className="text-sm text-gray-700">
                <p className="font-medium">Bank Name: Zenith Bank</p>
                <p>Account Name: Shining Light School</p>
                <p>Account Number: 1234567890</p>
                <p className="mt-2 text-primary underline cursor-pointer" onClick={handleSubmit}>
                  I've completed transfer
                </p>
              </div>
            )}

            {paymentMethod === "school-office" && (
              <p className="text-sm text-gray-700">
                Please visit our finance office at 123 School Rd, Lagos
              </p>
            )}
          </div>
        </div>
      ) : (
        // ✅ Payment Success
        <div className="text-center space-y-6">
          <h3 className="text-xl font-bold text-green-600">Payment Initiated!</h3>
          <p className="text-gray-600">
            Your payment of ₦{admissionFee.amount.toLocaleString()} has been initiated.
            You'll receive a confirmation email once processed.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
            <p className="text-blue-700">
              ⚠️ If payment fails, please contact the school office for manual processing.
            </p>
          </div>
        </div>
      )}

      {/* ❌ Payment Failed Notice */}
      <div className="bg-red-50 border-l-4 border-red-500 p-4">
        <p className="text-red-700">
          ⚠️ If payment fails, please contact the school office for manual payment.
        </p>
      </div>
    </div>
  );
}