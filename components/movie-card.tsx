"use client";

import { getImagePath } from "@/lib/getImagePath";
import { Movie } from "@/type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
    movie?: Movie;
}

export const MovieCard = ({ movie }: Props) => {
    const router = useRouter();
    const hanldeRoute = () => {
        router.push(`/movie/${movie?.id}`);
    };

    return (
        <div
            onClick={hanldeRoute}
            className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1A1C29]/80 z-10" />
            <p className="absolute z-20 bottom-5 left-5">
                {movie?.title.trim()}
            </p>
            <Image
                src={getImagePath(
                    movie?.backdrop_path || movie?.poster_path,
                    true,
                )}
                alt={movie?.title ? movie.title : "Image not available"}
                width={1920}
                height={1080}
                className="w-fit lg:min-w-[400px] h-56 object-cover shadow-md shadow-gray-900 drop-shadow-xl"
            />
        </div>
    );
};
