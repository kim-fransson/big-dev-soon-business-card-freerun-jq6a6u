export const InfoSection = () => {
  const fadeIn =
    "animate-fade-left animate-duration-[500ms] animate-once animate-ease-out animate-fill-forwards opacity-0";

  return (
    <section className="flex flex-1 flex-col gap-5 px-10 pt-10 md:pt-20 xl:pl-80">
      <h1
        className={`flex flex-col text-4xl font-semibold uppercase animate-delay-[500ms] md:text-5xl ${fadeIn}`}
      >
        <span className="text-rose-600">Kim</span> Fransson
      </h1>
      <div>
        <h2
          className={`mb-3 flex items-center gap-2 font-semibold animate-delay-[1000ms] md:text-lg ${fadeIn}`}
        >
          <span>Fullstack Developer</span>
          <span>&#x2022;</span>
          <span>Malmö</span>
        </h2>
        <p className={`${fadeIn} text-sm animate-delay-[1500ms] md:text-base`}>
          I&rsquo;m an experienced Fullstack Developer who&rsquo;s all about
          making things run smoothly for developers. I work closely with UX and
          design teams to nail down the details and bring technical plans to
          life for websites and apps. My focus is always on keeping the user and
          developer experience top-notch.
        </p>
      </div>

      <div>
        <h2
          className={`mb-3 font-semibold md:text-lg ${fadeIn} animate-delay-[2000ms]`}
        >
          Working with technologies:
        </h2>
        <ul className="flex flex-col gap-3 pl-1 text-sm md:text-base">
          <li
            className={`${fadeIn} animate-delay-[2500ms] animate-duration-[400ms]`}
          >
            🔥 Javascript
          </li>
          <li
            className={`${fadeIn} animate-delay-[2800ms]  animate-duration-[400ms]`}
          >
            💻 React
          </li>
          <li
            className={`${fadeIn} animate-delay-[3100ms] animate-duration-[400ms]`}
          >
            💅🏻 CSS + PostCSS + Tailwindcss
          </li>
          <li
            className={`${fadeIn} animate-delay-[3400ms] animate-duration-[400ms]`}
          >
            🎨 Storybook
          </li>
        </ul>
      </div>
    </section>
  );
};
