"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import GlidingButton from "@/components/CustomUi/GlidingButton";
import { Input } from "@/components/ui/input";
import Link from "next/link";

// 🔧 Define Form Schema
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

// 📦 Dynamic Form Fields Configuration
const formFields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your registered email",
    inputProps: {
      autoComplete: "email",
    },
  },
];

export default function ForgotPasswordForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 🚀 Submit Handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Reset request submitted:", values);
    // Replace with actual API call
    setIsSubmitted(true);
  }

  return (
    <div className="w-full mx-auto space-y-8 flex flex-col items-center">
      {!isSubmitted ? (
        <>
          <h2 className="text-xs font-bold text-center bg-secondary py-2 px-10 text-white w-fit rounded-full">
            Reset Password
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
              {/* 🔄 Dynamic Field Mapping */}
              {formFields.map((field) => (
                <FormField
                  key={field.name}
                  control={form.control}
                  name={field.name as keyof z.infer<typeof formSchema>}
                  render={({ field: formField }) => (
                    <FormItem>
                      <FormLabel>{field.label}</FormLabel>
                      <FormControl>
                        <Input
                          type={field.type}
                          placeholder={field.placeholder}
                          {...formField}
                          {...field.inputProps}
                          className="w-full py-6 text-sm bg-white/60"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}

              <GlidingButton className="w-full">
                Send Reset Link
              </GlidingButton>
            </form>
          </Form>
        </>
      ) : (
        <div className="text-center space-y-6">
          <h3 className="text-xl font-semibold text-primary">Check Your Inbox</h3>
          <p className="text-gray-600">
            We've sent a password reset link to your email address. Please check your spam/junk folder.
          </p>
        </div>
      )}

      {/* 🛠 Back to Login */}
      <div className="flex justify-center text-sm pt-4">
        <Link href="/admission/portal/login" className="text-primary hover:underline">
          ← Back to Login
        </Link>
      </div>
    </div>
  );
}