"use client";

import { useState, useEffect } from "react";
import Hero from "@/app/components/Hero";

export default function ToursManager() {
  const [tours, setTours] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/lib/data/tours.json')
      .then(res => res.json())
      .then(data => {
        setTours(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <main>
      <Hero 
        title="Tours Management" 
        subtitle="Manage tours and packages" 
        imageUrl="/admin-hero/admin hero.jpeg" 
      />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">All Tours</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add New Tour
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <div key={tour.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={tour.imageUrl} 
                alt={tour.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{tour.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{tour.duration}</p>
                <p className="text-lg font-bold text-blue-600 mt-2">AED {tour.price}</p>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700">
                    Edit
                  </button>
                  <button className="flex-1 bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
