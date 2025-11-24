"use client";

import Hero from "@/app/components/Hero";

export default function AnalyticsPage() {
  const stats = [
    { label: "Total Visits", value: "12,543", change: "+12.5%" },
    { label: "Page Views", value: "48,291", change: "+8.2%" },
    { label: "Bookings", value: "234", change: "+23.1%" },
    { label: "Revenue (AED)", value: "156,780", change: "+15.3%" },
  ];

  return (
    <main>
      <Hero 
        title="Analytics Dashboard" 
        subtitle="View your website performance and statistics" 
        imageUrl="/admin-hero/admin hero.jpeg" 
      />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg shadow p-6">
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
              <p className="text-sm text-green-600 mt-1">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Traffic Overview</h3>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-500">Chart placeholder - Connect analytics service</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Top Pages</h3>
            <div className="space-y-3">
              {[
                { page: "/visas/dubai", views: "2,341" },
                { page: "/tours", views: "1,892" },
                { page: "/visas/schengen", views: "1,543" },
                { page: "/", views: "1,234" },
              ].map((item) => (
                <div key={item.page} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{item.page}</span>
                  <span className="text-sm font-semibold">{item.views} views</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Conversions</h3>
            <div className="space-y-3">
              {[
                { country: "UAE Visa", count: "45" },
                { country: "Schengen Visa", count: "32" },
                { country: "Dubai Tour", count: "28" },
                { country: "Qatar Visa", count: "19" },
              ].map((item) => (
                <div key={item.country} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{item.country}</span>
                  <span className="text-sm font-semibold">{item.count} bookings</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
