const HeaderComponent = () => {
  const CallToAction = () => {
    return (
      <div className="mt-10 md:my-10 flex gap-6 justify-center">
        <button
          className="w-max inline-block bg-background-primary p-3
                    rounded-lg cursor-pointer border border-color-primary
                    hover:bg-white hover:border-transparent hover:text-background-primary"
        >
          Download CV
        </button>
        <a
          href={"#contact"}
          className="w-max inline-block bg-color-primary p-3
                    rounded-lg cursor-pointer border border-color-primary
                    hover:bg-white hover:border-transparent hover:text-color-primary"
        >
          Let's Talk
        </a>
      </div>
    );
  };

  return (
    <header id="#">
      <div className="h-screen pt-16 md:pt-28  text-center h-full text-white">
        <div className="font-medium mt-1 md:text-xl md:my-2">Hello I'm</div>
        <div className="font-bold text-3xl py-1 md:text-6xl md:py-2">
          Matt Garrett
        </div>
        <div className="font-medium md:text-xl my-1 md:my-2">
          Fullstack Developer
        </div>
        <CallToAction />
        <div className="bg-color-primary w-fit rounded-xl bg-gradient-to-r from-color-primary mt-8 sm:mt-0 sm:absolute sm:inset-x-0 sm:bottom-48 md:bottom-32 to-background-variant md:static md:px-6 md:py-6 mx-auto">
          <img
            className="h-80 md:h-96 lg:h-96 rounded-full"
            src={require("../assets/IMG_1199.JPG")}
            alt="ME"
          />
        </div>
        <div className="absolute xl:bottom-12 xl:right-0 bottom-12 right-0 rotate-90">
          Scroll Down
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
