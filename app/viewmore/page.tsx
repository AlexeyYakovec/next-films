import { MovieContainer } from "@/components/index";
import {
    getNowPlayingMovies,
    getPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies,
} from "@/lib/getMovies";

interface Props {
    searchParams: { title: string };
}

const ViewMore = async ({ searchParams: { title } }: Props) => {
    let movies: any = null;

    if (title === "Now Playing") {
        movies = await getNowPlayingMovies();
    } else if (title === "Upcoming") {
        movies = await getUpcomingMovies();
    } else if (title === "Top Rated") {
        movies = await getTopRatedMovies();
    } else if (title === "Popular Movies") {
        movies = await getPopularMovies();
    }

    return (
        <div className="mt-8">
            <h2 className="text-4xl font-bold px-10 mb-5">
                Results of {title}
                <MovieContainer movies={movies} isVertical={true} />
            </h2>
        </div>
    );
};

export default ViewMore;
