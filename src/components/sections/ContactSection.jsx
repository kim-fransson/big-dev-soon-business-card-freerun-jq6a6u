import EmailIcon from "../../assets/icons/email-icon.svg?react";
import GithubIcon from "../../assets/icons/github-icon.svg?react";
import LinkedinIcon from "../../assets/icons/linkedin-icon.svg?react";

const ContactLink = ({ href, children }) => {
  return (
    <a
      className="text-gray-300 transition-colors hover:text-white outline-none border focus-visible:border-white border-transparent focus-visible:text-white rounded-md"
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
    <section className="bg-green-700 max-w-xs flex-1 text-white text-sm flex flex-col gap-4 px-8 pt-96 pb-12">
      <div className="flex flex-col gap-2">
        <div className="flex gap-1">
          <EmailIcon />
          Email
        </div>
        <ContactLink href="mailto:kim.fransson.22@gmail.com">
          kim.fransson.22@gmail.com
        </ContactLink>
      </div>

      <hr className="border-8 border-gray-100 -mx-10" />

      <div className="flex flex-col gap-2">
        Find me on
        <div className="flex gap-3">
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
