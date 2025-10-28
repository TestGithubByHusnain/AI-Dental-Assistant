"use server";

import resend from "./resend";
import AppointmentConfirmationEmail from "@/components/emails/AppointmentConfirmationEmail";

export interface SendAppointmentEmailInput {
  userEmail: string;
  doctorName: string;
  appointmentDate: string;
  appointmentTime: string;
  appointmentType?: string;
  duration?: string;
  price?: string;
}

export async function sendAppointmentEmail(input: SendAppointmentEmailInput) {
  try {
    const { userEmail, doctorName, appointmentDate, appointmentTime, appointmentType, duration, price } = input;

    const res = await resend.emails.send({
      from: "DentWise <no-reply@resend.dev>",
      to: [userEmail],
      subject: "Appointment Confirmation - DentWise",
      react: AppointmentConfirmationEmail({
        doctorName,
        appointmentDate,
        appointmentTime,
        appointmentType: appointmentType || "General Consultation",
        duration: duration || "30 min",
        price: price || "$0",
      }),
    });

    return { success: true, id: (res as any)?.id, raw: res };
  } catch (error) {
    console.error("sendAppointmentEmail error:", error);
    return { success: false, error };
  }
}
