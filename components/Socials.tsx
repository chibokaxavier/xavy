import Link from "next/link";
import path from "path";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

type Props = {
  containerStyles: string;
  iconStyles: string;
};

const socials = [
  { icon: <FaTwitter />, path: "" },
  { icon: <FaInstagram />, path: "" },
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
];

const Socials: React.FC<Props> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
