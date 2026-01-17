export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { headers } from "next/headers";

let count = 0;

export async function GET() {
  const h = await headers()

  const ip =
    h.get("x-forwarded-for")?.split(",")[0] ||
    h.get("x-real-ip") ||
    "Unknown";

  const userAgent = h.get("user-agent") || "Unknown";

  const device = /Mobi|Android|iPhone|iPad/i.test(userAgent)
    ? "Mobile"
    : "Desktop";

  let os = "Unknown";
  if (userAgent.includes("Windows")) os = "Windows";
  else if (userAgent.includes("Mac")) os = "MacOS";
  else if (userAgent.includes("Linux")) os = "Linux";
  else if (userAgent.includes("Android")) os = "Android";
  else if (userAgent.includes("iPhone") || userAgent.includes("iPad")) os = "iOS";

  let city = "Unknown";
  let country = "Unknown";

  try {
    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    const geo = await geoRes.json();
    city = geo.city || "Unknown";
    country = geo.country_name || "Unknown";
  } catch (e) {}

  count++;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Visitor from ${city}, ${country}`,
    html: `
      <h2>New Visitor</h2>
      <p>IP: ${ip}</p>
      <p>City: ${city}</p>
      <p>Country: ${country}</p>
      <p>Device: ${device}</p>
      <p>OS: ${os}</p>
      <p>Browser: ${userAgent}</p>
      <p>Time: ${new Date().toLocaleString()}</p>
      <p>Total Visits: ${count}</p>
    `,
  });

  return Response.json({ visitors: count, ip, city, country, device, os });
}