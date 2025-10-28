import { NextResponse } from "next/server";
import { sendAppointmentEmail } from "@/lib/emails";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      userEmail,
      doctorName,
      appointmentDate,
      appointmentTime,
      appointmentType,
      duration,
      price,
    } = body;

    // validate required fields
    if (!userEmail || !doctorName || !appointmentDate || !appointmentTime) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const result = await sendAppointmentEmail({
      userEmail,
      doctorName,
      appointmentDate,
      appointmentTime,
      appointmentType,
      duration,
      price,
    });

    if (!result.success) {
      console.error("Email send failed:", result.error || result.raw || result);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully", emailId: result.id }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}