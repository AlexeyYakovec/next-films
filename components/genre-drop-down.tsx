import { cn } from "@/lib/utils";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import { Genres } from "@/type";

interface Props {
    className?: string;
}

export const GenreDropDown: React.FC<Props> = async () => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_KEY}`,
        },
        next: {
            revalidate: 60 * 60 * 24,
        },
    };

    const response = await fetch(url.toString(), options);
    const { genres } = (await response.json()) as Genres;
    // console.log(genres);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="text-white flex items-center text-sm font-medium gap-1">
                Genre
                <MdOutlineKeyboardArrowDown size={24} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {genres.map((genre) => (
                    <DropdownMenuItem key={genre?.id}>
                        <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                            {genre?.name}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
