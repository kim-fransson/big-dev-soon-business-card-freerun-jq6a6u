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
    <section className="bg-green-700 xl:w-96 text-white pt-10 px-10 pb-20 flex flex-col justify-end">
      <div className="overflow-hidden w-52 h-52 rounded-full mb-auto xl:hidden">
        <img src={profileImage} className="object-cover h-full w-full" alt="" />
      </div>
      <div className="flex flex-col gap-2 mb-9">
        <div className="flex gap-1">
          <EmailIcon />
          Email
        </div>
        <ContactLink href="mailto:kim.fransson.22@gmail.com">
          kim.fransson.22@gmail.com
        </ContactLink>
      </div>

      <div className="h-5 bg-gray-300 -mx-10" />

      <div className="flex flex-col gap-3 font-semibold mt-6">
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
