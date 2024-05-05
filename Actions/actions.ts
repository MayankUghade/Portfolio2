"use server";

import ContactFormEmail from "@/email/contactFormEmail";
import { validateString } from "@/lib/vaslidateString";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const sendersName = formData.get("senderName");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    const data = await resend.emails.send({
      from: "From the Portfolio <onboarding@resend.dev>",
      to: "mayank14.dev@gmail.com",
      subject: `Message from ${sendersName}`,
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error) {
    return {
      error,
    };
  }

  return {
    data,
  };
};
