import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./ui/button";
import Link from "next/link";

export default function SmallNav() {
  return (
    <div className="flex sm:hidden">
      <Sheet>
        <SheetTrigger>
          <GiHamburgerMenu className=" text-2xl" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription className="py-2 mr-auto text-left w-full mt-3">
              <div className="flex items-center  gap-3 mb-5">
                <Image src="/letter-m.png" alt="logo" width={20} height={20} />
                <h1 className=" font-bold text-md text-white">Mayank Ughdae</h1>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="text-md font-semibold hover:text-gray-400 cursor-pointer p-3 hover:bg-gray-900 w-full rounded-lg">
                  Projects
                </h1>
                <h1 className="text-md font-semibold hover:text-gray-400 cursor-pointer p-3 hover:bg-gray-900 w-full rounded-lg">
                  Experience
                </h1>
                <h1 className="text-md font-semibold hover:text-gray-400 cursor-pointer p-3 hover:bg-gray-900 w-full rounded-lg">
                  About Me
                </h1>
                <h1 className="text-md font-semibold hover:text-gray-400 cursor-pointer p-3 hover:bg-gray-900 w-full rounded-lg">
                  Contact
                </h1>

                <Button
                  className="flex gap-2 items-center"
                  variant="outline"
                  asChild
                >
                  <Link
                    href="https://github.com/MayankUghade"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-2xl" />
                    <h1>Github</h1>
                  </Link>
                </Button>
                <Button
                  className="flex gap-2 items-center "
                  variant="outline"
                  asChild
                >
                  <Link
                    href="https://www.linkedin.com/in/mayank-ughade-63aab7229/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-2xl" />
                    <h1>Linkedin</h1>
                  </Link>
                </Button>
                <Button
                  className="flex gap-2 items-center"
                  variant="outline"
                  asChild
                >
                  <Link
                    href="https://x.com/MayankUghade3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-2xl" />
                    <h1>Twitter</h1>
                  </Link>
                </Button>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
