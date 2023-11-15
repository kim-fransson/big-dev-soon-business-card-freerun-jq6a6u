import { ContactSection, InfoSection } from "./components/sections";
import profileImage from "./assets/images/user-photo.jpg";

export default function App() {
  return (
    <div className="bg-green-200 min-h-screen flex items-center justify-center">
      <main
        className="flex md:flex-row flex-col bg-white md:mx-10 md:rounded-3xl max-w-6xl w-full md:h-[667px] md:min-h-0 min-h-screen shadow-2xl overflow-hidden relative
        animate-fade-up animate-once animate-duration-500 animate-ease-in animate-fill-forwards md:pb-0 pb-10"
      >
        <img
          className="xl:block hidden absolute object-cover top-8 left-80 w-[340px] h-[550px] z-10"
          src={profileImage}
          alt=""
        />
        <GraySquare
          className="md:block hidden xl:left-[295px] xl:top-[85px] 
          left-[220px] top-[120px] z-20 animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-linear"
        />
        <GraySquare
          className="md:block hidden xl:left-[360px] xl:top-[555px] 
          left-[38px] top-[170px] z-20 animate-wiggle animate-infinite animate-duration-[2000ms] animate-ease-linear"
        />
        <GrayRectangle className="md:block hidden xl:left-[640px] left-[183px] top-[50px] z-20" />
        <GreenCircle
          className="md:block hidden xl:left-[630px] xl:top-[550px] left-[291px] top-[622px]"
          size="small"
        />
        <GreenCircle
          className="md:block hidden right-0 top-0 translate-x-1/2 -translate-y-1/2"
          size="big"
        />
        <ContactSection />
        <InfoSection />
      </main>
    </div>
  );
}

const GraySquare = ({ className }) => {
  return <div className={`w-12 h-12 bg-gray-200 absolute ${className}`} />;
};

const GrayRectangle = ({ className }) => {
  return <div className={`w-12 h-5 bg-gray-200 absolute ${className}`} />;
};

const GreenCircle = ({ className, size }) => {
  return (
    <div
      className={`bg-green-700 absolute rounded-full ${
        size === "small" ? "h-14 w-14" : "w-36 h-36"
      } ${className}`}
    />
  );
};
