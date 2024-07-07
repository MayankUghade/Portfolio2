import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="border-b bg-black z-50 relative bg-opacity-50 ">
      <div className="flex items-center justify-between p-5 lg:container">
        <div className="flex items-center gap-5 ">
          <Link href="/">
            <Image src="/letter-m.png" alt="Logo" width={27} height={27} />
          </Link>
          <div className="sm:flex hidden items-center gap-5">
            <h1 className="text-sm hover:text-gray-400 cursor-pointer">
              Projects
            </h1>
            <h1 className="text-sm hover:text-gray-400 cursor-pointer">
              Experience
            </h1>
            <h1 className="text-sm hover:text-gray-400 cursor-pointer">
              About Me
            </h1>
            <h1 className="text-sm hover:text-gray-400 cursor-pointer">
              Contact
            </h1>
          </div>
        </div>
        <div className="flex items-center sm:gap-5 gap-3">
          <FaGithub className="text-2xl" />
          <FaLinkedin className="text-2xl" />
          <FaTwitter className="text-2xl" />
        </div>
      </div>
    </div>
  );
}
