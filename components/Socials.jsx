import { socialsLink } from "@/lib/socials";
import Link from "next/link";

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialsLink.map((item, index) => {
        return (
          <Link href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
