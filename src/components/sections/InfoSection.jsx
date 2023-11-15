export const InfoSection = () => {
  const fadeIn =
    "animate-fade-left animate-duration-[500ms] animate-once animate-ease-out animate-fill-forwards opacity-0";

  return (
    <section className="flex flex-col xl:pl-80 md:pt-20 pt-10 px-10 flex-1 gap-5">
      <h1
        className={`md:text-5xl text-4xl font-semibold flex flex-col uppercase animate-delay-[500ms] ${fadeIn}`}
      >
        <span className="text-green-700">Kim</span> Fransson
      </h1>
      <div>
        <h2
          className={`font-semibold mb-3 md:text-lg flex items-center gap-2 animate-delay-[1000ms] ${fadeIn}`}
        >
          <span>Fullstack Developer</span>
          <span>&#x2022;</span>
          <span>Malmö</span>
        </h2>
        <p className={`${fadeIn} animate-delay-[1500ms] md:text-base text-sm`}>
          Experienced Fullstack Developer, dedicated to streamlining developer
          workflows. Adept at collaborating with UX and design teams to
          meticulously craft and execute technical specifications for websites
          and applications, consistently upholding a standard of uncompromising
          quality in user experience.
        </p>
      </div>

      <div>
        <h2
          className={`font-semibold mb-3 md:text-lg ${fadeIn} animate-delay-[2000ms]`}
        >
          Working with technologies:
        </h2>
        <ul className="flex flex-col gap-3 list-disc list-inside pl-1 md:text-base text-sm">
          <li
            className={`${fadeIn} animate-duration-[400ms] animate-delay-[2500ms]`}
          >
            JavaScript
          </li>
          <li
            className={`${fadeIn} animate-duration-[400ms]  animate-delay-[2800ms]`}
          >
            React
          </li>
          <li
            className={`${fadeIn} animate-duration-[400ms] animate-delay-[3100ms]`}
          >
            Tailwindcss
          </li>
          <li
            className={`${fadeIn} animate-duration-[400ms] animate-delay-[3400ms]`}
          >
            Storybook
          </li>
        </ul>
      </div>
    </section>
  );
};
