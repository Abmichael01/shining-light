// components/admission/DocumentUploadForm.tsx
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
import FileUpload from "@/components/CustomUi/FileUpload";

// 🔧 Define Form Schema
const formSchema = z.object({
  birthCertificate: z.string().min(1, "Birth certificate is required"),
  academicResult: z.string().min(1, "Academic result is required"),
  passportPhoto: z.string().min(1, "Passport photo is required"),
  parentID: z.string().optional(),
  schoolReport: z.string().optional()
});

// 📦 Dynamic Document Fields Configuration
const documentSections = [
  {
    title: "Required Documents",
    description: "These documents are mandatory for admission",
    fields: [
      {
        name: "birthCertificate",
        label: "Birth Certificate",
        description: "PDF or image file",
        optional: false
      },
      {
        name: "academicResult",
        label: "Last Academic Result",
        description: "Primary 6 or JSS 3 result (PDF or image)",
        optional: false
      },
      {
        name: "passportPhoto",
        label: "Passport Photo",
        description: "Recent passport size photo (JPG/PNG)",
        optional: false
      }
    ]
  },
  {
    title: "Optional Documents",
    description: "These documents are not required but helpful",
    fields: [
      {
        name: "parentID",
        label: "Parent ID Card",
        description: "National ID, Driver's License, or Voter's card",
        optional: true
      },
      {
        name: "schoolReport",
        label: "School Report Card",
        description: "Optional for scholarship consideration",
        optional: true
      }
    ]
  }
];

export default function DocumentUploadForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      birthCertificate: "",
      academicResult: "",
      passportPhoto: "",
      parentID: "",
      schoolReport: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Documents submitted:", values);
    // Replace with your save logic
  };

  return (
    <div className="w-full mx-auto space-y-8 flex flex-col items-center bg-white border rounded-xl p-6 md:p-10">
      <h2 className="text-xs font-bold text-center bg-secondary py-2 px-10 text-white w-fit rounded-full">
        Document Upload
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 w-full">
          {/* 🔄 Dynamic Sections */}
          {documentSections.map((section) => (
            <div key={section.title} className="space-y-8 bg-white/40 rounded-lg">
              <div>
                <h3 className="text-sm font-semibold text-primary border-b pb-2">
                  {section.title}
                </h3>
                {section.description && (
                  <p className="text-xs text-gray-500 mt-1">
                    {section.description}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.fields.map((field) => (
                  <FormField
                    key={field.name}
                    control={form.control}
                    name={field.name as keyof z.infer<typeof formSchema>}
                    render={({ field: formField }) => (
                      <FormItem className="md:col-span-1">
                        <FormLabel>
                          {field.label} <span className="text-secondary">{field.optional ? "(Optional)" : "*"}</span>
                        </FormLabel>
                        <FormControl>
                          <FileUpload
                            value={formField.value}
                            onChange={(file) => formField.onChange(file?.name || "")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center text-sm pt-4">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="text-primary hover:underline"
            >
              ← Back
            </button>

            <GlidingButton className="w-fit">
              Save & Continue
            </GlidingButton>
          </div>
        </form>
      </Form>
    </div>
  );
}