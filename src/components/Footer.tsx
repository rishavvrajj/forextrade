import { Command } from "lucide-react";
import { BsFacebook, BsLinkedin, BsInstagram, BsLink } from "react-icons/bs";

import { footerLinks } from "../assets/data.jsx";

const Footer = () => {
  return (
    <footer className="py-12 w-[90%] mx-auto">
      <div className="container mx-auto">
        <div className="bg-[#0A0A0A]/80  border border-white/10 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:flex justify-between">
            <div className="space-y-2 lg:space-y-4">
              <div className="centered-row gap-2 cursor-pointer hover:-translate-y-1 transition2">
                <Command className="w-4 lg:w-6 h-4 lg:h-6 text-indigo-400" />

                <h3 className="clash-display text-md lg:text-lg text-zinc-100 hover:text-indigo-200">
                  ForexTrade
                </h3>
              </div>
              <p className="text-xs lg:text-sm text-zinc-400/90">
                Empowering traders with advanced forex trading solutions.
              </p>
              <div className="flex space-x-4 my-4">
                <button type="button" className="rounded-full hover:bg-white/5">
                  <BsLinkedin className="w-6 h-6 hover:text-indigo-300 hover:-translate-y-1 transition2" />
                </button>
                <button type="button" className="rounded-full hover:bg-white/5">
                  <BsFacebook className="w-6 h-6 hover:text-indigo-300 hover:-translate-y-1 transition2" />
                </button>
                <button type="button" className="rounded-full hover:bg-white/5">
                  <BsInstagram className="w-6 h-6 hover:text-indigo-300 hover:-translate-y-1 transition2" />
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              {footerLinks.map(({ _id, title, links }) => (
                <div key={_id} className="lg:space-y-4">
                  <h4 className="clash-display text-sm lg:text-base text-zinc-200">
                    {title}
                  </h4>
                  <ul className="lg:space-y-2">
                    {links.map((item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="inline-block text-xs lg:text-sm text-zinc-400 hover:text-indigo-300 hover:translate-x-1 transition-transform duration-200"                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 lg:mt-8 pt-4 lg:pt-8 border-t border-white/10">
            <p className="text-xs lg:text-sm text-zinc-400/80 text-center clash-display">
              &copy; {new Date().getFullYear()} Footprint Arts. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
