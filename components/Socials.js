import Link from "next/link";
import { RiLinkedinBoxFill, RiInstagramLine, RiGithubFill, RiTelegramLine,RiTwitterXLine } from 'react-icons/ri';
import { MdOutlineEmail } from "react-icons/md";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href="" className="hover:text-accent transition-all duration-300">
        <RiLinkedinBoxFill />
      </Link>
      <Link href="" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href="" className="hover:text-accent transition-all duration-300">
        <RiGithubFill />
      </Link>
      <Link href="" className="hover:text-accent transition-all duration-300">
        <RiTelegramLine />
      </Link>
      <Link href="" className="hover:text-accent transition-all duration-300">
        <MdOutlineEmail />
      </Link>
      <Link href="" className="hover:text-accent transition-all duration-300">
        <RiTwitterXLine />
      </Link>
    </div>
  );
};

export default Socials;
