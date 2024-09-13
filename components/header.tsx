import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiFilmStripLight } from "react-icons/pi";
import { GenreDropDown, SearchInput, ThemeToggle } from "./index";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                "w-full flex items-center justify-between background-blur-2xl transition-colors p-5 bg-[#12121280] gap-4 md:gap-0 sticky top-0 z-50",
                className,
            )}>
            <Link href={"/"} className="flex items-center cursor-pointer">
                <PiFilmStripLight size={24} color="white" />
                <span className="text-2xl font-bold ml-2 text-white mb-2">
                    como films
                </span>
            </Link>
            <div className="flex items-center gap-2">
                <GenreDropDown />
                <SearchInput />
                <ThemeToggle />
            </div>
        </div>
    );
};