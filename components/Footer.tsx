import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { PiFilmStripLight } from "react-icons/pi";
import { infoArray, contactArray } from "./models";

const Information = ({ contact }: { contact?: boolean }) => {
    return (
        <div className="flex flex-col text-gray-300">
            {contact
                ? contactArray.map((item) => (
                      <Link
                          href={item?.href}
                          key={item?.title}
                          className="hover:text-white text-sm mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 flex items-center gap-x-3 group">
                          <span className="w-2 h-2 rounded-full inline-flex border border-red-700 group-hover:bg-red-700 duration-200" />
                          {item?.title}
                      </Link>
                  ))
                : infoArray.map((item) => (
                      <Link
                          href={item?.href}
                          key={item?.title}
                          className="hover:text-white text-sm mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 flex items-center gap-x-3 group">
                          <span className="w-2 h-2 rounded-full inline-flex border border-red-700 group-hover:bg-red-700 duration-200" />
                          {item?.title}
                      </Link>
                  ))}
        </div>
    );
};
export const Footer = () => {
    return (
        <div
            className={cn(
                "bg-[#191919] px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10",
            )}>
            {/* About us */}
            <div>
                <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
                    about us{" "}
                    <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10"></span>
                </h2>
                <Link href={"/"} className="flex items-center cursor-pointer">
                    <PiFilmStripLight size={24} color="white" />
                    <span className="text-2xl font-bold ml-2 text-white mb-2">
                        como films
                    </span>
                </Link>
                <p className="text-gray-200 text-sm leading-6 tracking-wide mt-5 max-w-72">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum ut, facilis quia eum distinctio magnam molestiae.
                    Natus laudantium consequuntur esse est, quasi officiis
                    repellendus beatae distinctio aut accusantium! Ut, impedit!
                </p>
            </div>

            {/* Information */}
            <div>
                <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
                    information
                    <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10"></span>
                </h2>
                <Information />
            </div>

            {/* Category */}
            <div>
                <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
                    Category
                    <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10"></span>
                </h2>
                <Information contact={true} />
            </div>

            {/* Connect with us */}
            <div>
                <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
                    Connect with Us
                    <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
                </h2>
                <div className="text-gray-300 text-sm flex flex-col gap-2">
                    <p className="flex gap-1">
                        Phone:
                        <span className="text-white font-medium">
                            + 7 (919) 406-62-18
                        </span>
                    </p>
                    <p className="flex gap-1">
                        Email:
                        <span className="text-white font-medium">
                            alekseyyakovets8952@gmail.com
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};
