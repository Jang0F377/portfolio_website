import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const AboutComponent = () => {
  return (
    <div id="about" className=" grid md:h-screen lg:grid  ">
      <div className="text-center">
        <div className="text-color-light md:mt-16 md:-mb-16 text-lg md:text-xl">
          Get to Know
        </div>
        <div className="text-color-primary md:mt-16 md:-mb-16 text-3xl md:text-4xl">
          About Me
        </div>
      </div>
      <div className="px-8 lg:flex lg:flex-row md:px-6 xl:w-10/12 xl:h-5/6  mx-auto">
        <div className="flex my-8 lg:basis-1/2 justify-center md:mb-16">
          <div className="flex justify-center h-96 md:h-72 lg:h-96 bg-color-primary rounded-3xl ">
            <img
              className="h-full rotate-12 hover:rotate-0 transition duration-300 rounded-3xl"
              src={require("../assets/IMG_1199.JPG")}
              alt={"PIC HERE"}
            />
          </div>
        </div>
        <div className=" sm:flex sm:flex-col sm:basis-1/2 text-white sm:mr-3  ">
          <div className=" grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:basis-1/3 sm:gap-5 sm:justify-evenly">
            <article className="bg-background-variant border border-2 border-transparent rounded-xl p-8 text-center hover:bg-transparent hover:border-color-primary-variant">
              <FaAward className="mx-auto text-color-primary text-2xl mb-4" />
              <div className="text-base sm:text-xl">Experience</div>
              <small className="text-sm text-color-light">
                2+ years working
              </small>
            </article>
            <article className="bg-background-variant border border-2 border-transparent rounded-xl p-8 text-center hover:bg-transparent hover:border-color-primary-variant">
              <FiUsers className="mx-auto text-color-primary text-2xl mb-4" />
              <div className="text-base sm:text-xl">Clients</div>
              <small className="text-sm text-color-light">20+ Worldwide</small>
              <small className="text-sm text-color-light"></small>
            </article>
            <article className="bg-background-variant border border-2 border-transparent rounded-xl p-8 text-center hover:bg-transparent hover:border-color-primary-variant">
              <VscFolderLibrary className="mx-auto text-color-primary text-2xl mb-4" />
              <div className="text-base sm:text-xl">Projects</div>
              <small className="text-sm text-color-light">20+ Completed</small>
            </article>
          </div>
          <div className="flex flex-col basis-2/3">
            <p className="mt-8 text-white lg:text-lg">
              Hello world, my name is Matt Garrett. I'm a self-taught programmer
              with over 3 years of experience. While I am an experienced
              fullstack MERN developer, I enjoy the front-end a bit more using
              React & React-Native. I truly love and enjoy working with both
              those technologies. My goal is to grow as a dev to be the best I
              can at those two technologies, while staying current with all the
              trending technologies, and improving my backend skills. I pride
              myself in being a loving husband & father(fur-babies) and I enjoy
              working out and gaming out (Apex PSN: NWA_Steele add me) in my
              free time! Feel free to shoot me an email or text or call.
            </p>
            <a
              href={"#contact"}
              className="mx-auto sm:mx-0 w-max mt-4 inline-block bg-color-primary p-3 my-auto
                    rounded-lg cursor-pointer border border-color-primary
                    hover:bg-transparent hover:border-color-primary-variant hover:text-color-primary"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
