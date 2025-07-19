"use client";

import React from "react";
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
import { useMutation } from "@tanstack/react-query";
import { RegisterPayload } from "@/types";
import { register } from "@/api/apiEndpoints";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import errorMessage from "@/lib/utils/errorMessage";

// 🔧 Define Form Schema
const formSchema = z
  .object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Passwords must match"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// 📦 Dynamic Form Fields Configuration
const formFields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    inputProps: {
      autoComplete: "email",
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    inputProps: {
      autoComplete: "new-password",
    },
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Re-enter your password",
    inputProps: {
      autoComplete: "new-password",
    },
  },
];

export default function RegisterForm() {
  // 🧠 Setup Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const router = useRouter();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (data: RegisterPayload) => register(data),
    onSuccess: () => {
      router.push("/admission/portal/login");
      toast.success("Registration successful! Redirecting to login...");
    },
    onError: (error: Error) => {
      // Handle error, show message to user
    },
  });

  // 🚀 Submit Handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
    mutate({
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    });
  }

  return (
    <div className="w-full mx-auto space-y-8 flex flex-col items-center">
      <h2 className="text-xs font-bold text-center bg-secondary py-2 px-10 text-white w-fit rounded-full">
        Register
      </h2>

      {error && (
        <div className="border border-destructive text-destructive bg-red-100  text-sm   rounded-md p-3 w-full">
          {errorMessage(error)}
        </div>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full"
        >
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

          {/* 🛠 Already have an account? */}
          <div className="flex justify-center text-sm">
            <Link
              href="/admission/portal/login"
              className="text-primary hover:underline"
            >
              Already have an account? Login
            </Link>
          </div>

          <GlidingButton isLoading={isPending} className="w-full">
            Create Account
          </GlidingButton>
        </form>
      </Form>
    </div>
  );
}
