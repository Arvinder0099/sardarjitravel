import { notFound } from "next/navigation";

type TourEntry = {
  title: string;
  description: string;
  activities: string[];
  videoSrc?: string; // if provided, plays at top
  poster?: string; // optional poster image for the video
};

const TOURS: Record<string, TourEntry> = {
  "desert-safari": {
    title: "Desert Safari",
    description:
      "Experience Dubai's desert adventure: dune bashing in 4x4, sunset views, and a traditional camp with dinner and cultural performances.",
    activities: [
      "Pick-up and drop-off (shared/private options)",
      "Dune bashing by professional drivers",
      "Sandboarding and photo stops",
      "Camel ride experience",
      "Optional quad biking (extra charge)",
      "BBQ dinner (veg/non-veg), unlimited soft drinks",
      "Live shows: Tanoura, Fire show, Belly dance (as permitted)",
      "Henna painting and traditional costumes (subject to availability)",
    ],
    videoSrc: "/videos/desert-safari.mp4",
    // poster removed because file doesn't exist in public/videos
  },
  "burj-khalifa": {
    title: "Burj Khalifa – At the Top",
    description:
      "Visit the world's tallest building. Enjoy panoramic views from levels 124/125 with flexible time slots and optional lounge add-ons.",
    activities: [
      "Admission to At the Top (Levels 124/125)",
      "Prime / Non-prime hour tickets",
      "High-speed elevator experience",
      "Observation decks with telescopes",
      "Dubai Mall access and fountain views",
      "Optional At the Top SKY (Level 148) upgrade",
    ],
    videoSrc: "/videos/burj-khalifa.mp4",
    poster: "/videos/burj-khalifa.jpeg",
  },
  "dubai-city-tour": {
    title: "Dubai City Tour",
    description:
      "Guided half-day or full-day city highlights covering old and new Dubai with photo stops at iconic landmarks.",
    activities: [
      "Driver-cum-guide (English/Hindi/Punjabi as available)",
      "Jumeirah Mosque (outside view)",
      "Al Fahidi (Bastakiya) heritage district",
      "Dubai Creek and traditional abras",
      "Gold & Spice Souks (short walk/photo stop)",
      "Dubai Marina & JBR (photo stop)",
      "Palm Jumeirah, Atlantis The Palm (photo stop)",
      "Optional: Dubai Frame / Museum of the Future add-on",
    ],
    videoSrc: "/videos/city-tour.mp4",
    // poster removed because file doesn't exist in public/videos
  },
  "dhow-cruise": {
    title: "Dhow Cruise (Dubai Creek)",
    description:
      "Relax on a traditional wooden dhow as you cruise Dubai Creek with buffet dinner and live entertainment.",
    activities: [
      "2-hour evening cruise",
      "Welcome drinks and buffet dinner",
      "Live Tanoura performance",
      "Ambient music and skyline views",
      "Upper deck open-air seating (subject to availability)",
      "Air-conditioned lower deck",
    ],
    videoSrc: "/videos/dhow-cruise.mp4",
    // poster removed because file doesn't exist in public/videos
  },
  "dubai-marina-cruise": {
    title: "Dubai Marina Cruise",
    description:
      "Sail through Dubai Marina and enjoy a dinner cruise with stunning views of skyscrapers and Bluewaters Island.",
    activities: [
      "2-hour dinner cruise",
      "Buffet dinner (veg/non-veg)",
      "Marina skyline and Ain Dubai views",
      "Live entertainment (as scheduled)",
      "Upper deck open-air seating",
      "Lower deck air-conditioned comfort",
    ],
    videoSrc: "/videos/marina-cruise.mp4",
    // poster removed because file doesn't exist in public/videos
  },
  "museum-of-the-future": {
    title: "Museum of the Future",
    description:
      "Explore Dubai's immersive Museum of the Future with interactive exhibits on innovation, AI, sustainability, and future living. Timed entry tickets available.",
    activities: [
      "Timed entry ticket to Museum of the Future",
      "Interactive exhibits across themed floors",
      "Future of AI, robotics and smart cities",
      "Wellness and ecology experiences",
      "Family-friendly zones and storytelling installations",
      "Located on Sheikh Zayed Road near Emirates Towers",
      "Optional transport add-on: pick-up and drop-off",
      "Average visit duration: 1.5–2 hours",
    ],
    videoSrc: "/videos/furture museum.mp4",
    // poster can be added later when image exists
  },
  "abu-dhabi-city-tour": {
    title: "Abu Dhabi City Tour",
    description:
      "Full-day guided tour from Dubai showcasing Abu Dhabi’s landmarks: Sheikh Zayed Grand Mosque, Qasr Al Watan, Emirates Palace (photo), Corniche, Heritage Village. Optional Louvre Abu Dhabi add-on.",
    activities: [
      "Shared/private transfer from Dubai (pick-up and drop-off)",
      "Visit Sheikh Zayed Grand Mosque (dress code applies: modest attire; women bring scarf; no sleeveless/short shorts; abaya may be available on-site)",
      "Qasr Al Watan Presidential Palace (admission optional depending on package)",
      "Emirates Palace photo stop",
      "Abu Dhabi Corniche panorama and photo stop",
      "Heritage Village visit",
      "Drive past Etihad Towers",
      "Optional Louvre Abu Dhabi add-on",
      "Experienced driver/guide (English/Hindi/Punjabi as available)",
      "Bottled water provided",
    ],
    videoSrc: "/videos/Abu dhabi city tour.mp4",
    // poster can be added later when image exists
  },
};


export function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const entry = TOURS[slug];
  if (!entry) return { title: "Dubai Tourism Details" };
  return { title: `${entry.title} – Dubai Tourism` };
}

export default function DubaiTourDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const entry = TOURS[slug];
  if (!entry) return notFound();

  return (
    <main>
      <section className="bg-white">
        <div className="w-full px-0 py-6">
          <div className="relative w-full h-[60vh] md:h-[68vh] overflow-hidden rounded-lg border border-slate-200 bg-white">
            {/* background fill to avoid empty borders */}
            <img
              src={encodeURI("/visa images/dubai tour thumbnail.jpeg")}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover blur-sm scale-105"
            />
            {/* main hero image (uncropped) */}
            <img
              src={encodeURI(imageMap[slug] ?? "/logo.jpg")}
              alt={entry.title}
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Information below video */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            <img src={encodeURI("/logo.jpg")} alt="Logo" className="inline-block w-6 h-6 mr-2 align-middle" />
            {entry.title}
          </h1>
          <p className="mt-3 text-slate-700">{entry.description}</p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900">Activities & Highlights</h2>
            <ul className="mt-3 list-disc pl-6 text-slate-700">
              {entry.activities.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10 border-t pt-8">
            <h2 className="text-xl font-semibold text-slate-900">Contact & Booking</h2>
            <p className="mt-2 text-slate-700">For bookings and inquiries, reach us via WhatsApp or email below.</p>
            <div className="mt-6 flex gap-3">
              <a href="/visas/prices/activities" className="inline-flex items-center rounded-md border border-amber-700 px-5 py-3 text-slate-800 hover:bg-amber-50">View Tourism Prices</a>
              <a
                href="https://wa.me/971588448225?text=Hi%20Sardar%20ji%2C%20I%20want%20to%20book%20a%20Dubai%20tour."
                target="_blank"
                className="inline-flex items-center rounded-md bg-green-600 px-5 py-3 text-white hover:bg-green-700"
                aria-label="WhatsApp UAE"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-1.5" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.49 0 .15 5.34.15 11.9c0 2.1.55 4.16 1.59 5.97L0 24l6.3-1.65a11.86 11.86 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44ZM12.06 21.2h-.01A9.3 9.3 0 0 1 7.03 19l-.34-.2-3.73.98 1-3.64-.22-.37A9.3 9.3 0 1 1 12.06 21.2Zm5.1-6.96c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.63.14-.19.28-.73.9-.9 1.09-.17.2-.33.21-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.2.05-.35-.02-.49-.07-.14-.63-1.52-.87-2.08-.23-.56-.47-.48-.63-.49h-.54c-.18 0-.49.07-.75.35-.26.28-.98.96-.98 2.35s1 2.72 1.14 2.9c.14.19 1.97 3.02 4.78 4.23.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33Z"/></svg>
                WhatsApp UAE
              </a>
              <a
                href="https://wa.me/918196904340?text=Hi%20Sardar%20ji%2C%20I%20want%20to%20book%20a%20Dubai%20tour."
                target="_blank"
                className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 text-slate-800 hover:bg-slate-100"
                aria-label="WhatsApp India"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-1.5" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.49 0 .15 5.34.15 11.9c0 2.1.55 4.16 1.59 5.97L0 24l6.3-1.65a11.86 11.86 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44ZM12.06 21.2h-.01A9.3 9.3 0 0 1 7.03 19l-.34-.2-3.73.98 1-3.64-.22-.37A9.3 9.3 0 1 1 12.06 21.2Zm5.1-6.96c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.63.14-.19.28-.73.9-.9 1.09-.17.2-.33.21-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.2.05-.35-.02-.49-.07-.14-.63-1.52-.87-2.08-.23-.56-.47-.48-.63-.49h-.54c-.18 0-.49.07-.75.35-.26.28-.98.96-.98 2.35s1 2.72 1.14 2.9c.14.19 1.97 3.02 4.78 4.23.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33Z"/></svg>
                WhatsApp India
              </a>
              <a href="mailto:info@sardarjitravel.ae" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">Email Us</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const imageMap: Record<string, string> = {
  "desert-safari": "/visa images/desert safari tour.jpg",
  "burj-khalifa": "/visa images/burj khalifa tour.jpg",
  "dubai-city-tour": "/visa images/dybai city tour.jpg",
  "dhow-cruise": "/visa images/Dhow Cruise Dubai!.jpeg",
  "dubai-marina-cruise": "/visa images/marina cruise tour.jpg",
  "museum-of-the-future": "/visa images/furture musem tour.jpg",
  "abu-dhabi-city-tour": "/visa images/abu dhabi city tour.jpg",
};