'use client'; // Required for client-side interactivity

import React, { forwardRef, InputHTMLAttributes } from 'react';

// Define props interface extending native input attributes
interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  className?: string;
}

// Use forwardRef to allow ref forwarding (important for form libraries)
const Input = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          {...props}
          ref={ref}
          className={`w-full px-3 py-2 border rounded-md shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-transparent
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${className}`}
        />
        
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

// Add display name for debugging
Input.displayName = 'CustomInput';

export default Input;