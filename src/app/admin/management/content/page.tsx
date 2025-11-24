"use client";

import Hero from "@/app/components/Hero";

export default function ContentManager() {
  return (
    <main>
      <Hero 
        title="Content Management" 
        subtitle="Manage blog posts, news, and promotions" 
        imageUrl="/admin-hero/admin hero.jpeg" 
      />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Blog Posts</h3>
            <p className="text-gray-600 mb-4">Manage your blog content</p>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Manage Blogs
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">News</h3>
            <p className="text-gray-600 mb-4">Update news and announcements</p>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Manage News
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Promotions</h3>
            <p className="text-gray-600 mb-4">Create special offers</p>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Manage Promotions
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
