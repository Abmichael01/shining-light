// components/CustomUi/FileUpload.tsx
"use client";

import React from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";

interface FileUploadProps {
  value: string | undefined;
  onChange: (file: File | null) => void;
  accept?: { [key: string]: string[] };
  maxSize?: number;
}

export default function FileUpload({ 
  value, 
  onChange,
  accept = {
    'image/*': ['.png', '.jpg', '.jpeg'],
    'application/pdf': ['.pdf']
  },
  maxSize = 5 * 1024 * 1024 // 5MB
}: FileUploadProps) {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    accept,
    maxSize,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onChange(acceptedFiles[0]);
      }
    }
  });

  const currentFile = value || (acceptedFiles.length > 0 ? acceptedFiles[0].name : "");

  return (
    <div 
      {...getRootProps()} 
      className={`border-2 border-dashed p-4 rounded-md text-center cursor-pointer transition-colors ${
        isDragActive ? 'bg-primary/5 border-primary' : 'border-gray-300 hover:border-primary/50'
      }`}
    >
      <input {...getInputProps()} />
      
      <div className="flex flex-col items-center gap-2">
        <Upload className="w-8 h-8 text-gray-400" />
        
        {currentFile ? (
          <p className="text-sm text-green-600">{currentFile}</p>
        ) : (
          <p className="text-sm text-gray-500">
            Drag & drop or click to upload
          </p>
        )}
      </div>
    </div>
  );
}