import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function SmallNav() {
  return (
    <div className="sm:hidden flex ">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full">
            <HamburgerMenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="p-3">
          <div className="flex items-center gap-2 p-2">
            <div className="grid gap-0.5 leading-none">
              <div className="font-semibold">Mayank Ughade</div>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              href="/myprojects"
              className="flex items-center gap-2"
              prefetch={false}
            >
              <div className="h-4 w-4" />
              <span>Projects</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/#experience"
              className="flex items-center gap-2"
              prefetch={false}
            >
              <div className="h-4 w-4" />
              <span>Experience</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/about_me"
              className="flex items-center gap-2"
              prefetch={false}
            >
              <div className="h-4 w-4" />
              <span>About Me</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/#contact"
              className="flex items-center gap-2"
              prefetch={false}
            >
              <div className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex items-center sm:gap-5 ml-3 gap-3">
              <Link
                href="https://github.com/MayankUghade"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mayank-ughade-63aab7229/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl" />
              </Link>
              <Link
                href="https://x.com/MayankUghade3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl" />
              </Link>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
