import { MovieContainer } from "@/components/index";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
    params: {
        term: string;
    };
}

const SearchPage: React.FC<Props> = async ({ params: { term } }) => {
    const termToUse = decodeURI(term);

    const movies = await getSearchedMovies(termToUse);
    const popularMovies = await getPopularMovies();

    return (
        <div className="py-10 max-w-screen-xl mx-auto">
            <h2 className="text-4xl font-bold px-10 mb-5">
                Results for {termToUse}
            </h2>
            <MovieContainer movies={movies} title="Search Movies" isVertical />
            <MovieContainer movies={popularMovies} title="You may also like" />
        </div>
    );
};

export default SearchPage;
