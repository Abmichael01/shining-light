import SectionPadding from '@/components/General/SectionPadding';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: 'What are the admission requirements?',
      answer:
        'Admission requirements vary by program but generally include completed application forms, transcripts, recommendation letters, and proof of English proficiency.',
    },
    {
      question: 'How do I apply for a scholarship?',
      answer:
        'Scholarships are available based on merit and financial need. You can apply during the application process by submitting the required documents and indicating your interest in scholarships.',
    },
    {
      question: 'What is the application deadline?',
      answer:
        'Deadlines vary depending on the semester and program. For fall intake, the deadline is typically June 1st, while spring intake applications close around November 1st.',
    },
    {
      question: 'Can I visit the campus before applying?',
      answer:
        'Yes, we welcome prospective students to join our campus tours. You can schedule a visit via our website or contact the admissions office directly.',
    },
    {
      question: 'What are the admission requirements?',
      answer:
        'Admission requirements vary by program but generally include completed application forms, transcripts, recommendation letters, and proof of English proficiency.',
    },
    {
      question: 'How do I apply for a scholarship?',
      answer:
        'Scholarships are available based on merit and financial need. You can apply during the application process by submitting the required documents and indicating your interest in scholarships.',
    },
    {
      question: 'What is the application deadline?',
      answer:
        'Deadlines vary depending on the semester and program. For fall intake, the deadline is typically June 1st, while spring intake applications close around November 1st.',
    },
    {
      question: 'Can I visit the campus before applying?',
      answer:
        'Yes, we welcome prospective students to join our campus tours. You can schedule a visit via our website or contact the admissions office directly.',
    },
  ];

  return (
    <SectionPadding className="space-y-10 mt-[100px]">
      <h2 className="font-fancy text-2xl sm:text-3xl font-semibold text-center">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto w-full space-y-4">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-left text-sm sm:text-[16px] px-5 py-3 bg-background hover:bg-primary/10 hover:text-primary transition-all data-[state=open]:bg-primary/10 data-[state=open]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-5 py-3 text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionPadding>
  );
}