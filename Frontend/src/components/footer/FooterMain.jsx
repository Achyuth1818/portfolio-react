const FooterMain = () => {
  return (
    <div className="px-4 bg-darkBrown text-white py-10">
      <div className="w-full h-[1px] bg-lightGrey mb-6"></div>
      <div className="flex flex-col items-center text-center max-w-[1200px] mx-auto">
        <p className="text-4xl text-lightGrey font-special mb-4">
          Achyuth Reddy
        </p>
        <p className="text-lg text-lightBrown max-w-[800px]">
          Passionate Software Developer | MERN Stack Developer | Problem Solver
        </p>
      </div>
      <p className="max-w-[1200px] mx-auto text-center mt-6 text-sm text-lightBrown">
        © 2024 Achyuth Reddy | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
