"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { sendEmail } from "./actions";
import toast from "react-hot-toast";
import SubmitBtn from "../Submit_button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="w-full max-w-3xl mx-auto mt-[180px] p-2 scroll-mt-28"
      id="contact"
    >
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
    </motion.div>
  );
}
