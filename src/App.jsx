import { ContactSection, InfoSection } from "./components/sections";
import profileImage from "./assets/images/profile-img.jpeg";

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-indigo-100">
      <main
        className="relative flex min-h-screen w-full max-w-6xl animate-fade-up flex-col overflow-hidden bg-white pb-10 shadow-2xl animate-duration-500 animate-fill-forwards animate-once
        animate-ease-in md:mx-10 md:h-[667px] md:min-h-0 md:flex-row md:rounded-3xl md:pb-0"
      >
        <img
          className="absolute left-80 top-8 z-10 hidden h-[550px] w-[340px] rounded-md object-cover xl:block"
          src={profileImage}
          alt="smiling man with cap standing in front of a tree"
        />
        <Square
          className="left-[220px] top-[120px] z-20 hidden animate-bounce
          bg-rose-600 animate-duration-[2000ms] animate-infinite animate-ease-linear md:block xl:left-[295px] xl:top-[85px]"
        />
        <Square
          className="left-[38px] top-[170px] z-20 hidden animate-wiggle
          bg-rose-600 animate-duration-[2000ms] animate-infinite animate-ease-linear md:block xl:left-[360px] xl:top-[555px]"
        />
        <Rectangle className="left-[183px] top-[50px] z-20 hidden bg-rose-600 md:block xl:left-[640px]" />
        <Circle
          className="left-[291px] top-[622px] hidden bg-rose-600 md:block xl:left-[630px] xl:top-[550px]"
          size="small"
        />
        <Circle
          className="right-0 top-0 hidden -translate-y-1/2 translate-x-1/2 bg-rose-600 md:block"
          size="big"
        />
        <ContactSection />
        <InfoSection />
      </main>
    </div>
  );
}

const Square = ({ className }) => {
  return <div className={`absolute h-12 w-12 bg-gray-200 ${className}`} />;
};

const Rectangle = ({ className }) => {
  return <div className={`absolute h-5 w-12 bg-gray-200 ${className}`} />;
};

const Circle = ({ className, size }) => {
  return (
    <div
      className={`absolute rounded-full bg-green-700 ${
        size === "small" ? "h-14 w-14" : "h-36 w-36"
      } ${className}`}
    />
  );
};
