import React from "react";
import { CgFacebook } from "react-icons/cg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { footer } from "../utils/footerOptions";

const Footer = () => {
  return (
    <section className="mt-28 mb-8 sm:mx-32 md:mx-48 lg:mx-20 xl:mx-20 flex justify-center">
      <div className="">
        <p className="text-gray-500 text-center mb-4">
          Made by Shruti Shrivastava
        </p>
        <div className="flex justify-between">
          <a
            href="https://www.linkedin.com/in/shruti-shrivastava-676606228/"
            target="_blank"
          >
            <LinkedInIcon className="scale-125" />
          </a>
          <a href="https://github.com/shrutishri2208" target="_blank">
            <GitHubIcon className="scale-125" />
          </a>
          <a
            href="mailto:shrutishri2208@gmail.com?body=Hello%20there%20profile%20viewer%20:)"
            target="_blank"
          >
            <EmailIcon className="scale-125" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
