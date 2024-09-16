import { cn } from "@/lib/utils";
import { Movie } from "@/type";
import Link from "next/link";
import React from "react";
import { PiFilmStripLight } from "react-icons/pi";

interface Props {
    movies?: Movie[];
    title?: string;
    isVertical?: boolean;
}

export const MovieContainer: React.FC<Props> = ({
    movies,
    title,
    isVertical,
}) => {
    return (
        <div>
            <div
                className={cn(
                    "mx-10 py-2 flex items-center justify-between border-b border-b-gray-500 relative mb-4",
                )}>
                movie container
            </div>
        </div>
    );
};
