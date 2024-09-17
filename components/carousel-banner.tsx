import { getDiscoverMovies } from "@/lib/getMovies";
import { cn } from "@/lib/utils";
import React from "react";
import { HeroCarousel } from "@/components/index";

interface Props {
    id?: string;
    keywords?: string;
}

export const CarouselBanner = async ({ id, keywords }: Props) => {
    const movies = await getDiscoverMovies(id, keywords);
    // console.log("movies: ", movies);

    return <HeroCarousel movies={movies} />;
};
