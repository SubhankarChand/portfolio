import React from 'react';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-[#0f172a] border-slate-800 text-slate-300">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © Developer Portfolio by <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/subhankarchand/" className="text-cyan-400 hover:underline">Subhankar Chand</a>
          </p>
          <div className="flex items-center gap-5">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/SubhankarChand"
              className="flex items-center gap-2 uppercase hover:text-cyan-400 transition-colors"
            >
              <IoStar />
              <span>Star</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/SubhankarChand"
              className="flex items-center gap-2 uppercase hover:text-cyan-400 transition-colors"
            >
              <CgGitFork />
              <span>Fork</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;