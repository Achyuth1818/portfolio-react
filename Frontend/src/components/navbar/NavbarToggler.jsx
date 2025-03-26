import { GiHamburgerMenu } from "react-icons/gi";

const NavbarToggler = ({ onClick }) => {
  return (
    <button
      className="text-2xl p-3 border border-orange rounded-full"
      onClick={onClick}
    >
      <GiHamburgerMenu color="white" />
    </button>
  );
};

export default NavbarToggler;
