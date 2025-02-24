import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "@/emails/contact-form-submission";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const country = request.headers.get("x-vercel-ip-country") || "unknown";
    const city = request.headers.get("x-vercel-ip-country-city") || "unknown";
    const region =
      request.headers.get("x-vercel-ip-country-region") || "unknown";
    const timezone = request.headers.get("x-vercel-ip-timezone") || "unknown";
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    const { name, email, company, services, project, message } =
      await request.json();

    const date = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kathmandu",
    });

    let userData = "";

    if (country !== "unknown") {
      userData += `Country: ${country}\n`;
    }

    if (city !== "unknown") {
      userData += `City: ${city}\n`;
    }

    if (region !== "unknown") {
      userData += `Region: ${region}\n`;
    }

    if (timezone !== "unknown") {
      userData += `Timezone: ${timezone}\n`;
    }

    if (ip !== "unknown") {
      userData += `IP: ${ip}\n`;
    }

    if (userAgent !== "unknown") {
      userData += `User Agent: ${userAgent}\n`;
    }

    if (!userData) {
      userData = "No user data available";
    }

    // Create email content
    const textEmail = `
        New Contact Form Submission

        Date: ${date} - (Nepal Time)
        Name: ${name}
        Company: ${company}
        Email: ${email}
        Services Interested In: ${services.join(", ")}

        Project Details:
        ${project}

        User Data:
        ${userData}
    `;

    const { data, error } = await resend.emails.send({
      from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_EMAIL}>`,
      to: ["raju@lunover.com", "razaanstha2017@gmail.com"],
      subject: "Contact Form Submission Received",
      text: textEmail,
      react: ContactFormEmail({
        name,
        email,
        company,
        services,
        project,
        date,
        userData,
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
