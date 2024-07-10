"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { sendEmail } from "./actions";
import toast from "react-hot-toast";
import SubmitBtn from "../Submit_button";

export default function Contact() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-[180px] p-2">
      <h1 className="text-center font-bold text-3xl">Contact Me</h1>
      <p className="text-center mb-10 text-sm mt-2 text-muted-foreground">
        Feel free to fill out the form below to get in touch or just say hello
        at{" "}
        <span className="text-white underline">
          <Link
            href="mailto:mayank14ughade@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            mayank14ughade@gmail.com
          </Link>
        </span>
      </p>
      <form
        className="flex flex-col gap-3"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <Textarea
          name="message"
          placeholder="Enter your message"
          className="min-h-[150px]"
          required
        />
        <SubmitBtn />
      </form>
    </div>
  );
}
