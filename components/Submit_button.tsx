import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="group flex items-center justify-center gap-2 w-fit outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <>
          <ReloadIcon className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
          Please wait
        </>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </Button>
  );
}
