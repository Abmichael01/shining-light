import { cn } from '@/lib/utils';
import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Parent",
      image: "https://i.pravatar.cc/150?img=1 ",
      quote:
        "My child has grown so much since joining Shinning Light School. The teachers are caring and the curriculum is both modern and challenging.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Parent",
      image: "https://i.pravatar.cc/150?img=2 ",
      quote:
        "The school provides a safe and nurturing environment that encourages learning and creativity. I highly recommend it to other parents.",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Student (Grade 8)",
      image: "https://i.pravatar.cc/150?img=3 ",
      quote:
        "I love going to school every day! We get to learn in fun ways and there are lots of activities to choose from.",
    },
    {
      id: 4,
      name: "Emily Johnson",
      role: "Teacher",
      image: "https://i.pravatar.cc/150?img=4 ",
      quote:
        "Working at Shinning Light School is a joy. The students are eager to learn and the collaborative spirit among staff makes this place special.",
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Alumni Parent",
      image: "https://i.pravatar.cc/150?img=5 ",
      quote:
        "My son graduated last year and is now thriving in university. Shinning Light gave him the confidence and skills he needed to succeed.",
    },
    {
      id: 6,
      name: "Sophia Lee",
      role: "School Counselor",
      image: "https://i.pravatar.cc/150?img=6 ",
      quote:
        "We focus on the whole child — academically, emotionally, and socially. It’s amazing to see how they grow during their time here.",
    },
  ];

  return (
    <section className="mt-[150px]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-fancy font-bold text-center mb-4">What Our Community Says</h2>
        <p className="text-center max-w-xl mx-auto mb-12 text-secondary">
          Hear from our students, parents, and educators about the impact of Shinning Light School.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300 overflow-hidden",
                index > 2 && "hidden sm:block"
              )}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-gray-700">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}