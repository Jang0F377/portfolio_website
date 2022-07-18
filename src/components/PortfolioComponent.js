import { PORTFOLIODATA } from "../data/portfolioData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const PortfolioComponent = () => {
  const RenderCard = ({ item }) => {
    const RenderCarousel = ({ item }) => {
      return (
        <Carousel
          centerMode
          centerSlidePercentage={100}
          autoPlay
          infiniteLoop
          showThumbs={false}
          dynamicHeight={false}
          className="h-96"
        >
          <div className="h-96">
            <img
              src={item.imageUrl}
              alt={"PIC"}
              className="object-fill rounded-2xl "
            />
          </div>
          <div className="h-96">
            <img
              src={item.imageUrl2}
              alt={"PIC"}
              className="object-fill rounded-2xl"
            />
          </div>
          <div className="h-96">
            <img
              src={item.imageUrl3}
              alt={"PIC"}
              className="object-fill rounded-2xl"
            />
          </div>
        </Carousel>
      );
    };

    return (
      <div className="bg-background-variant text-white lg:m-2 rounded-3xl m-4 ">
        <RenderCarousel item={item} />
        <div>
          <div className="text-center lg:text-xl text-lg my-1 text-color-primary">
            {item.name}
          </div>
          <div className="px-2 lg:px-1.5 text-center lg:mb-0.5 text-white">
            {item.technologies}
          </div>
          <div className="px-2 lg:px-1.5 text-color-primary">
            {item.briefDescription}
          </div>
        </div>
        <div className="flex justify-end">
          <a
            href={item.githubUrl}
            className="flex w-max m-2 mb-3 mr-3 inline-block bg-color-primary p-3
                    rounded-lg cursor-pointer border border-color-primary
                    hover:bg-transparent hover:border-color-primary-variant hover:text-color-primary"
          >
            View GitHub
          </a>
        </div>
      </div>
    );
  };

  return (
    <div id="portfolio" className="h-fit">
      <div className="flex flex-col px-1  lg:w-9/12 mx-auto">
        <div className="text-center mb-7 mt-10">
          <div className="text-color-light  text-lg md:text-xl">Projects</div>
          <div className="text-color-primary text-2xl md:text-3xl">
            My Portfolio
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-x-10">
          {PORTFOLIODATA.map((item) => (
            <RenderCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
