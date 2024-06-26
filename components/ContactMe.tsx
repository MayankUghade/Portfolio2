"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/Actions/actions";
import toast from "react-hot-toast";
import { useFormStatus } from "react-dom";
import SubmitBtn from "./Submit_button";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.3);
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      ref={ref}
      className="w-full flex flex-col gap-5 items-center justify-center p-3 scroll-mt-28"
      id="contact"
    >
      <h1 className="text-center font-bold text-3xl">Contact Me</h1>

      <p className="text-center dark:text-gray-400 text-gray-500">
        Feel free to drop me a Hello! at{" "}
        <a className="underline" href="mailto:mayank14.dev@gmail.com">
          mayank14.dev@gmail.com
        </a>{" "}
        or use this form to get in touch.
      </p>

      <form
        className="sm:w-[500px] w-[100%] flex flex-col gap-3"
        action={async (formData) => {
          const response = await sendEmail(formData);

          if (!response) {
            toast.error("Something went wrong, Email not sent");
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="w-full p-3 rounded-md dark:bg-gray-800 border border-black/50 bg-gray-100"
          name="senderName"
          type="text"
          required
          placeholder="Your Name"
          maxLength={500}
        />
        <input
          className="w-full p-3 rounded-md dark:bg-gray-800 border border-black/50 bg-gray-100"
          name="senderEmail"
          type="email"
          required
          placeholder="Your email"
          maxLength={500}
        />
        <textarea
          className="w-full p-3 rounded-md dark:bg-gray-800 bg-gray-100 border border-black/50 h-52"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />

        <SubmitBtn />
      </form>
    </motion.div>
  );
}
