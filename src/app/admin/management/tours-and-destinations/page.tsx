"use client";

import Hero from "@/app/components/Hero";

export default function ToursDestinationsManager() {
  return (
    <main>
      <Hero 
        title="Tours & Destinations" 
        subtitle="Manage tours and country visa packages" 
        imageUrl="/admin-hero/admin hero.jpeg" 
      />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Tour Packages</h3>
            <p className="text-gray-600 mb-4">Add, edit, or remove tour packages</p>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 bg-gray-50 rounded hover:bg-gray-100">
                Dubai City Tours
              </button>
              <button className="w-full text-left px-4 py-2 bg-gray-50 rounded hover:bg-gray-100">
                Desert Safari Packages
              </button>
              <button className="w-full text-left px-4 py-2 bg-gray-50 rounded hover:bg-gray-100">
                Abu Dhabi Tours
              </button>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add New Tour Package
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Visa Destinations</h3>
            <p className="text-gray-600 mb-4">Manage visa options by country</p>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 bg-gray-50 rounded hover:bg-gray-100">
                UAE Visas
              </button>
              <button className="w-full text-left px-4 py-2 bg-gray-50 rounded hover:bg-gray-100">
                Schengen Visas
              </button>
              <button className="w-full text-left px-4 py-2 bg-gray-50 rounded hover:bg-gray-100">
                GCC Visas
              </button>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add New Destination
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
