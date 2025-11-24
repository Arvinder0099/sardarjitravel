export type WorldwideCountry = {
  title: string;
  slug: string;
  img?: string; // optional card image; fallback will be used if missing
};

// Single source of truth for Worldwide Visit Visa countries
export const WORLDWIDE_COUNTRIES: WorldwideCountry[] = [
  { title: "USA", slug: "usa", img: "/visa images/usa b1 b2 visa.jpeg" },
  { title: "UK", slug: "uk", img: "/visa images/uk visa.jpeg" },
  { title: "Australia", slug: "australia", img: "/visa images/Australia visa.jpeg" },
  { title: "Canada", slug: "canada", img: "/visa images/canada visa.jpeg" },
  { title: "New Zealand", slug: "new-zealand", img: "/visa images/New Zealand visa.jpeg" },
  { title: "Peru", slug: "peru", img: "/visa images/Peru visa.jpeg" },
  { title: "Brazil", slug: "brazil", img: "/visa images/Brazil visa.jpeg" },
  { title: "Mexico", slug: "mexico", img: "/visa images/mexico visa.jpeg" },
  { title: "Russia", slug: "russia", img: "/visa images/Russia visa.jpeg" },
  { title: "Montenegro", slug: "montenegro", img: "/visa images/montenegro visa.jpeg" },
  { title: "Ireland", slug: "ireland", img: "/visa images/ireland visa.jpeg" },
  { title: "Colombia", slug: "colombia", img: "/visa images/columbia visa.jpeg" },
];