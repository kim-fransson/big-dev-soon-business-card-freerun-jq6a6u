import EmailIcon from "../../assets/icons/email-icon.svg?react";
import GithubIcon from "../../assets/icons/github-icon.svg?react";
import LinkedinIcon from "../../assets/icons/linkedin-icon.svg?react";

import profileImage from "../../assets/images/user-photo-mobile.jpg";

const ContactLink = ({ href, children }) => {
  return (
    <a
      className="text-white/60 w-fit inline-block transition-colors relative rounded-md outline-none 
        hover:text-white focus-visible:text-white focus-visible:after:opacity-100 focus-visible:after:translate-y-1
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.1em] after:bg-white after:opacity-0 after:transition-all after:duration-300"
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      {children}
    </a>
  );
};

export const ContactSection = () => {
  return (
    <section
      className="bg-green-700 xl:w-96 text-white pt-10 px-10 sm:pb-20 pb-10 md:flex md:flex-col md:justify-end
      md:items-stretch grid sm:grid-cols-2 grid-cols-1 sm:items-center md:text-base text-sm justify-items-center sm:justify-items-start sm:gap-2 gap-4"
    >
      <div className="overflow-hidden md:w-52 md:h-52 sm:w-44 sm:h-44 w-36 h-36 rounded-full mb-auto xl:hidden">
        <img src={profileImage} className="object-cover h-full w-full" alt="" />
      </div>
      <div className="flex flex-col gap-2 md:mb-9 sm:col-start-2 sm:row-start-1 sm:mb-20 items-center sm:items-start">
        <div className="flex gap-1">
          <EmailIcon />
          Email
        </div>
        <ContactLink href="mailto:kim.fransson.22@gmail.com">
          kim.fransson.22@gmail.com
        </ContactLink>
      </div>

      <div className="h-5 bg-gray-300 -mx-10 hidden md:block" />

      <div className="flex flex-col gap-3 font-semibold md:mt-6 sm:col-start-2 sm:row-start-1 sm:mt-20 sm:items-start items-center">
        Find me on
        <div className="flex gap-4">
          <ContactLink href="https://github.com/kim-fransson">
            <GithubIcon />
          </ContactLink>

          <ContactLink href="https://www.linkedin.com/in/kim-fransson-b714ba215/">
            <LinkedinIcon />
          </ContactLink>
        </div>
      </div>
    </section>
  );
};
