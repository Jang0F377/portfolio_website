import { BsPatchCheckFill } from "react-icons/bs";

const ExperienceComponent = () => {
  return (
    <div id="experience" className="h-screen ">
      <div className="flex flex-col">
        <div className="flex basis-1/5 text-center md:mt-16 md:-mb-16">
          <div className="text-color-light  text-lg md:text-xl">
            What Skills I Have
          </div>
          <div className="text-color-primary text-2xl md:text-3xl">
            My Experience
          </div>
        </div>
        <div className="flex basis-4/5 border border-white">
          <div className="">
            <div className="text-3xl text-center text-color-primary">
              Frontend Development
            </div>
            <div>
              <article>
                <BsPatchCheckFill />
                <div className="text-2xl">HTML</div>
                <small>Experienced</small>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;
