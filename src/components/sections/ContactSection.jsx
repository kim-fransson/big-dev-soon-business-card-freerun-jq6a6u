import EmailIcon from "../../assets/icons/email-icon.svg?react";
import GithubIcon from "../../assets/icons/github-icon.svg?react";
import LinkedinIcon from "../../assets/icons/linkedin-icon.svg?react";

import profileImage from "../../assets/images/profile-img.jpeg";

const ContactLink = ({ href, children }) => {
  return (
    <a
      className="relative inline-block w-fit rounded-md text-white/60 outline-none transition-colors 
        after:absolute after:bottom-0 after:left-0 after:h-1
        after:w-full after:bg-rose-600 after:opacity-0 after:transition-all after:duration-200 after:content-[''] hover:text-white focus-visible:text-white focus-visible:after:translate-y-2 focus-visible:after:opacity-100"
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
      className="grid grid-cols-1 justify-items-center gap-4 bg-indigo-800 px-10 pb-10 pt-10 text-sm text-white
      sm:grid-cols-2 sm:items-center sm:justify-items-start sm:gap-2 sm:pb-20 md:flex md:flex-col md:items-stretch md:justify-end md:text-base xl:w-96"
    >
      <div className="mb-auto h-36 w-36 overflow-hidden rounded-full sm:h-44 sm:w-44 md:h-52 md:w-52 xl:hidden">
        <img
          src={profileImage}
          className="h-full w-full object-cover"
          alt="smiling man with cap standing in front of a tree"
        />
      </div>
      <div className="flex flex-col items-center gap-2 sm:col-start-2 sm:row-start-1 sm:mb-20 sm:items-start md:mb-9">
        <div className="flex gap-1">
          <EmailIcon />
          Email
        </div>
        <ContactLink href="mailto:kim.fransson.22@gmail.com">
          kim.fransson.22@gmail.com
        </ContactLink>
      </div>

      <div className="-mx-10 hidden h-5 bg-white md:block" />

      <div className="flex flex-col items-center gap-3 font-semibold sm:col-start-2 sm:row-start-1 sm:mt-20 sm:items-start md:mt-6">
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
