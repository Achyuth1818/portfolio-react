import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <a href="mailto:paramayolla.achyuth.reddy@gmail.com">
        <SingleInfo
          text="paramayolla.achyuth.reddy@gmail.com"
          Image={HiOutlineMail}
        />
      </a>
      <a href="tel:+919392777253">
        <SingleInfo text="+91 9392777253" Image={FiPhone} />
      </a>
      <SingleInfo
        text="Hyderabad, Telangana, 509217"
        Image={IoLocationOutline}
      />
    </div>
  );
};

export default ContactInfo;
