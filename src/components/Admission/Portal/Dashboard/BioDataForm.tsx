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
import { Input } from "@/components/ui/input";
import GlidingButton from "@/components/CustomUi/GlidingButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation, useQuery } from "@tanstack/react-query";
import { BioDataFormData } from "@/types";
import { getBioData, submitBioData } from "@/api/apiEndpoints";
import { toast } from "sonner";
import { LoaderIcon } from "lucide-react";

// 🔧 Define Form Schema
const formSchema = z.object({
  // Student Info
  first_name: z.string().min(2, "First name too short"),
  last_name: z.string().min(2, "Last name too short"),
  middle_name: z.string().optional(),
  date_of_birth: z
    .string()
    .min(10, "Invalid date format"),
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Please select a gender" }),
  }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  address: z.string().min(10, "Address too short"),
  city: z.string().min(3, "City name too short"),
  state: z.string().min(3, "State name too short"),

  // Parent Info
  guardians_name: z.string().min(5, "Guardian's name too short"),
  guardians_phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  guardians_email: z.string().email("Invalid email").optional(),
  guardians_address: z.string().min(10, "Address too short"),
});

// 📦 Dynamic Form Fields Configuration
const formSections = [
  {
    title: "Student Information",
    fields: [
      {
        name: "first_name",
        label: "First Name",
        type: "text",
        placeholder: "John",
        grid: "md:col-span-1",
      },
      {
        name: "last_name",
        label: "Last Name",
        type: "text",
        placeholder: "Doe",
        grid: "md:col-span-1",
      },
      {
        name: "middle_name",
        label: "Middle Name (Optional)",
        type: "text",
        placeholder: "Ola",
        grid: "md:col-span-1",
      },
      {
        name: "date_of_birth",
        label: "Date of Birth",
        type: "date",
        grid: "md:col-span-1",
      },
      {
        name: "gender",
        label: "Gender",
        type: "select",
        options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
          { value: "other", label: "Other" },
        ],
        grid: "md:col-span-1",
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "text",
        placeholder: "+1234567890",
        grid: "md:col-span-1",
      },
      {
        name: "address",
        label: "Home Address",
        type: "textarea",
        placeholder: "123 Main St, City",
        grid: "md:col-span-2",
      },
      {
        name: "city",
        label: "City",
        type: "text",
        placeholder: "Lagos",
        grid: "md:col-span-1",
      },
      {
        name: "state",
        label: "State of Origin",
        type: "text",
        placeholder: "Lagos",
        grid: "md:col-span-1",
      },
    ],
  },
  {
    title: "Parent/Guardian Information",
    fields: [
      {
        name: "guardians_name",
        label: "Full Name",
        type: "text",
        placeholder: "Mr. John Smith",
        grid: "md:col-span-2",
      },
      {
        name: "guardians_phone",
        label: "Phone Number",
        type: "text",
        placeholder: "+1234567890",
        grid: "md:col-span-1",
      },
      {
        name: "guardians_email",
        label: "Email (Optional)",
        type: "email",
        placeholder: "parent@example.com",
        grid: "md:col-span-1",
      },
      {
        name: "guardians_address",
        label: "Home Address",
        type: "textarea",
        placeholder: "123 Main St, City",
        grid: "md:col-span-2",
      },
    ],
  },
];

export default function BioDataForm() {
  const  { data, isLoading } = useQuery({
    queryKey: ["bioData"],
    queryFn: getBioData
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: data?.first_name || "",
      last_name: data?.last_name || "",
      middle_name: data?.middle_name || "",
      date_of_birth: data?.date_of_birth || "",
      gender: data?.gender || "male",
      phone: data?.phone || "",
      address: data?.address || "",
      city: data?.city || "",
      state: data?.state || "",
      guardians_name: data?.guardians_name || "",
      guardians_phone: data?.guardians_phone || "",
      guardians_email: data?.guardians_email || "",
      guardians_address: data?.guardians_address || "",
    },
  });
  
  const { mutate, isPending } = useMutation({
    mutationFn: (data: BioDataFormData) => submitBioData(data),
    onSuccess: () => {
      console.log("BioData submitted successfully!");
      toast.success("BioData submitted successfully!");
    },
    onError: (error) => {
      console.error("Error submitting BioData:", error);
      // Handle error (e.g., show error message)
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("BioData submitted:", values);
    const formattedValues = {
      ...values,
      date_of_birth: new Date(values.date_of_birth)
    };
    mutate(values);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-5 items-center justify-center h-screen">
        <div>
          <LoaderIcon className="size-6 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto space-y-8 flex flex-col items-center bg-white border rounded-xl p-6 md:p-10">
      <h2 className="text-xs font-bold text-center bg-secondary py-2 px-10 text-white w-fit rounded-full">
        Bio Data
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-10 w-full"
        >
          {/* 🔄 Dynamic Sections */}
          {formSections.map((section) => (
            <div
              key={section.title}
              className="space-y-6 bg-white/40 rounded-lg"
            >
              <h3 className="text-sm font-semibold text-primary border-b pb-2">
                {section.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.fields.map((field) => (
                  <FormField
                    key={field.name}
                    control={form.control}
                    name={field.name as keyof z.infer<typeof formSchema>}
                    render={({
                      field: formField,
                    }: {
                      field: {
                        value: unknown;
                        onChange: (...event: any[]) => void;
                        onBlur: () => void;
                        name: string;
                        ref: React.Ref<any>;
                      };
                    }) => {
                      // Ensure value is always a string for textarea, select, and input
                      let value: string = "";
                      if (formField.value instanceof Date) {
                        value = formField.value.toISOString().split("T")[0];
                      } else if (typeof formField.value === "string") {
                        value = formField.value;
                      } else if (typeof formField.value === "number") {
                        value = formField.value.toString();
                      } else {
                        value = "";
                      }

                      return (
                        <FormItem className={field.grid}>
                          <FormLabel>{field.label}</FormLabel>
                          <FormControl>
                            {field.type === "textarea" ? (
                              <textarea
                                {...formField}
                                value={value}
                                placeholder={field.placeholder}
                                className="w-full px-3 py-6 text-sm bg-white/60 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            ) : field.type === "select" ? (
                              <Select
                                onValueChange={formField.onChange}
                                value={value}
                              >
                                <SelectTrigger className="w-full px-3 py-6 text-sm">
                                  <SelectValue
                                    placeholder={
                                      field.placeholder || "Select an option"
                                    }
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  {field.options?.map((option) => (
                                    <SelectItem
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            ) : (
                              <Input
                                type={field.type}
                                placeholder={field.placeholder}
                                {...formField}
                                value={
                                  formField.value instanceof Date
                                    ? formField.value
                                        .toISOString()
                                        .split("T")[0]
                                    : typeof formField.value === "string" ||
                                      typeof formField.value === "number"
                                    ? formField.value
                                    : ""
                                }
                                className="w-full py-6 text-sm bg-white/60"
                              />
                            )}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
          <GlidingButton isLoading={isPending} className="w-fit float-right">
            Save & Continue
          </GlidingButton>
        </form>
      </Form>
    </div>
  );
}
