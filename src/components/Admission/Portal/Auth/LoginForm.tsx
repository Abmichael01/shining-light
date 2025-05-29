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
import Link from "next/link"; // Added import
import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/apiEndpoints";
import { LoginPayload } from "@/types";
import { useRouter } from 'next/navigation';
import {toast} from "sonner"

// 🔧 Define Form Schema
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
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
      autoComplete: "current-password",
    },
  },
];

export default function LoginForm() {
  // 🧠 Setup Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: LoginPayload) => login(data),
    onSuccess: () => {
      router.push('/admission/portal');
      toast.success("Login successful! Redirecting...");
    },
    onError: (error: any) => {
      
    }
  });

  // 🚀 Submit Handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
    mutate({
      email: values.email,
      password: values.password,
    });
  }

  return (
    <div className="w-full mx-auto space-y-8 flex flex-col items-center ">
      <h2 className="text-xs font-bold text-center bg-secondary py-2 px-10 text-white w-fit rounded-full">
        Login
      </h2>

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
                      className="w-full py-6 text-sm bg-white/80"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          {/* New Forgot Password & Register Links */}
          <div className="flex justify-between items-center text-sm">
            <Link
              href="/admission/portal/forgot-password"
              className="text-primary hover:underline"
            >
              Forgot password?
            </Link>

            <Link
              href="/admission/portal/register"
              className="text-primary hover:underline font-medium"
            >
              Create account
            </Link>
          </div>

          <GlidingButton isLoading={isPending} className="w-full">
            Sign In
          </GlidingButton>
        </form>
      </Form>
    </div>
  );
}
