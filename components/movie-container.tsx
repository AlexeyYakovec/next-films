"use client";

import { cn } from "@/lib/utils";
import { Movie } from "@/type";
import Link from "next/link";
import React from "react";
import { PiFilmStripLight } from "react-icons/pi";
import { MovieCard } from "./index";

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
                <h2 className="text-sm uppercase font-bold tracking-wider">
                    {title}
                </h2>

                <Link
                    href={{
                        pathname: "/viewmore",
                        query: { title: title },
                    }}
                    className="bg-gray-800 text-xs text-white uppercase px-2 py-1 rounded-md border-indigo-600 font-semibold hover:bg-black duration-300">
                    View more
                </Link>
                <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
            </div>
            <div
                className={cn(
                    "flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide",
                    isVertical && "flex-col space-x-0 space-y-12",
                )}>
                {isVertical
                    ? movies?.map((movie) => (
                          <div
                              key={movie.id}
                              className={cn(
                                  isVertical &&
                                      "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5",
                              )}>
                              <MovieCard movie={movie} />
                              <div className="max-w-2xl">
                                  <p className="font-bold text-lg flex gap-2">
                                      {movie?.title}
                                      <span>
                                          ({movie?.release_date.split("-")[0]})
                                      </span>
                                  </p>
                                  <hr className="mb-3 bg-gray-700" />
                                  <p className="text-base font-normal">
                                      {movie?.overview}
                                  </p>
                              </div>
                          </div>
                      ))
                    : movies?.map((movie) => (
                          <MovieCard key={movie.id} movie={movie} />
                      ))}
            </div>
        </div>
    );
};
