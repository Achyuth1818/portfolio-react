import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/achyuth-reddy-a69106232/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/Achyuth1818?tab=repositories"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/achyuth1818/"
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
