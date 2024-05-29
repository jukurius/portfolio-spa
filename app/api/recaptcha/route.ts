import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const scretKey = process.env.RECAPTCHA_SECRET_KEY;
  const postData = await req.json();

  const { gRecaptchaToken } = postData;

  var res;

  const formData = `secret=${scretKey}&response=${gRecaptchaToken}`;

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      }
    );
    res = await response.json();
  } catch (error) {
    return NextResponse.json({ success: false });
  }

  if (res && res.success && res.score > 0.5) {
    console.log("res.data?.score:", res.score);

    return NextResponse.json({ success: true, score: res.data?.score });
  } else {
    return NextResponse.json({ success: false });
  }
}
