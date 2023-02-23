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
          <LinkedInIcon className="scale-125" />
          <GitHubIcon className="scale-125" />
          <EmailIcon className="scale-125" />
        </div>
      </div>

      {/* <div className="flex ">
        <CgFacebook className="mr-12 scale-150" />
        <FaInstagram className="mr-12 scale-150" />
        <FaTwitter className="mr-12 scale-150" />
        <FaYoutube className="mr-12 scale-150" />
      </div>

      <div className="my-8 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4  gap-y-6 text-xs text-gray-500 flex-wrap">
        {footer.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
      <div>
        <div className="border-2 border-gray-500 inline py-1 px-2 text-gray-500">
          Service Code
        </div>
        <div className="text-xs text-gray-500 my-4">
          1997-2023 Watcher, Inc.
        </div>
      </div> */}
    </section>
  );
};

export default Footer;
