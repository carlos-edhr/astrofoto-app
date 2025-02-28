// // app/api/analytics/route.ts
// import { VercelRequest, VercelResponse } from "@vercel/node";

// export async function GET() {
//   const VERCEL_ANALYTICS_ID = process.env.VERCEL_ANALYTICS_ID;

//   const response = await fetch(
//     `https://api.vercel.com/v1/analytics/${VERCEL_ANALYTICS_ID}`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.VERCEL_AUTH_TOKEN}`,
//       },
//     },
//   );

//   interface CountryData {
//     name: string;
//     count: number;
//     lat: number;
//     lng: number;
//   }

//   interface AnalyticsData {
//     totalVisits: number;
//     countries: CountryData[];
//   }

//   const data: AnalyticsData = await response.json();

//   return Response.json({
//     totalVisits: data.totalVisits,
//     countries: data.countries.map((c: CountryData) => ({
//       country: c.name,
//       value: c.count,
//       lat: c.lat,
//       lng: c.lng,
//     })),
//   });
// }
