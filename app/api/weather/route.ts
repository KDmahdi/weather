import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // ۱. اسم شهری که فرانت‌اندمون فرستاده رو از آدرس لینک بیرون می‌کشیم
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city") || "london,uk";

  // ۲. کلیدهای مخفی رو از فایل .env که در قدم اول ساختی می‌خوانیم
  const clientId = process.env.XWEATHER_CLIENT_ID;
  const clientSecret = process.env.XWEATHER_CLIENT_SECRET;

  try {
    // ۳. حالا خودِ سرور نکست‌جی‌اس پشت صحنه به ای‌پی‌آی اصلی زنگ می‌زنه
    const res = await fetch(
      `https://data.api.xweather.com/conditions/${city}?format=json&plimit=1&filter=1min&client_id=${clientId}&client_secret=${clientSecret}`
    );
    const data = await res.json();

    // ۴. دیتای دریافتی رو تر و تمیز می‌فرستیم برای فرانت‌آند
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ success: false, error: "خطا در سرور بک‌آند" }, { status: 500 });
  }
}