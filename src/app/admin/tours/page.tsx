"use client";

import { useState, useEffect } from "react";
import Hero from "@/app/components/Hero";

export default function ToursManager() {
  const [tours, setTours] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editSlug, setEditSlug] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    duration: "",
    price: "",
    imageUrl: "",
    description: "",
  });

  const loadTours = async () => {
    try {
      const res = await fetch('/api/admin/tours');
      const data = await res.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTours();
  }, []);

  const handleAdd = () => {
    setFormData({ title: "", slug: "", duration: "", price: "", imageUrl: "", description: "" });
    setEditSlug(null);
    setShowModal(true);
  };

  const handleEdit = (tour: any) => {
    setFormData(tour);
    setEditSlug(tour.slug);
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editSlug) {
        await fetch('/api/admin/tours', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug: editSlug, tour: formData }),
        });
      } else {
        await fetch('/api/admin/tours', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }
      
      setShowModal(false);
      loadTours();
    } catch (error) {
      alert('Failed to save tour');
    }
  };

  const handleDelete = async (slug: string) => {
    if (confirm('Are you sure you want to delete this tour?')) {
      try {
        await fetch('/api/admin/tours', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug }),
        });
        loadTours();
      } catch (error) {
        alert('Failed to delete tour');
      }
    }
  };

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
          <button 
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
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
                  <button 
                    onClick={() => handleEdit(tour)}
                    className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(tour.slug)}
                    className="flex-1 bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white rounded-lg p-8 max-w-md w-full m-4">
            <h3 className="text-xl font-bold mb-4">
              {editSlug ? 'Edit Tour' : 'Add New Tour'}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full border rounded px-3 py-2"
                    placeholder="Tour title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Slug</label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({...formData, slug: e.target.value})}
                    className="w-full border rounded px-3 py-2"
                    placeholder="tour-slug"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Duration</label>
                  <input
                    type="text"
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    className="w-full border rounded px-3 py-2"
                    placeholder="3 Days / 2 Nights"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Price (AED)</label>
                  <input
                    type="text"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    className="w-full border rounded px-3 py-2"
                    placeholder="1500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Image URL</label>
                  <input
                    type="text"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                    className="w-full border rounded px-3 py-2"
                    placeholder="/tours/image.jpg"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  {editSlug ? 'Update' : 'Add'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
