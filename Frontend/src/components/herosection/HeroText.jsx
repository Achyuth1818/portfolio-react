const HeroText = () => {
  return (
    <div className="flex flex-col h-full  justify-center md:text-left sm:text-center ">
      <div className=" md:justify-between text-start ">
        <div>
          <h1 className="md:text-[1.5rem]  lg:text-6xl sm:text-4xl text-orange font-bold uppercase sm:ml-6 mt-4 md:text-start ">
            Achyuth Reddy
          </h1>
          <h2 className="lg:text-2xl sm:text-xl uppercase text-white sm:ml-6  md:text-start">
            Full Stack Web Developer
          </h2>

          <p className="text-lg mt-4 sm:mb-8 md:max-w-[70%] text-start text-lightGrey md:ml-8">
            A Passionate Web Developer with Strong foundation and understanding
            of MERN Stack and DSA Problem Solving. Adept at building scalable
            and efficient web applications using the latest technologies and
            best practices. Experienced in designing and implementing robust
            backend systems, crafting intuitive user interfaces, and solving
            complex algorithmic challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
