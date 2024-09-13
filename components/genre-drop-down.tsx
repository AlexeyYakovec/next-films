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

const genryArray = [
    {
        id: 1,
        name: "Horror",
    },
    {
        id: 2,
        name: "Comedy",
    },
    {
        id: 3,
        name: "Fantasy",
    },
];

interface Props {
    className?: string;
}

export const GenreDropDown: React.FC<Props> = ({ className }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="text-white flex items-center text-sm font-medium gap-1">
                Genre
                <MdOutlineKeyboardArrowDown size={24} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
                {genryArray.map((genre) => (
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
