import { CarouselBanner, MovieContainer } from "@/components/index";
import {
    getNowPlayingMovies,
    getPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
    const nowPlayingMovies = await getNowPlayingMovies();
    const upComingMovies = await getUpcomingMovies();
    const topRatedMovies = await getTopRatedMovies();
    const popularMovies = await getPopularMovies();

    return (
        <>
            <CarouselBanner />
            <div className="flex flex-col space-y-2 mt-18">
                <MovieContainer movies={nowPlayingMovies} title="Now Playing" />
                <MovieContainer movies={upComingMovies} title="Upcoming" />
                <MovieContainer movies={topRatedMovies} title="Top Rated" />
                <MovieContainer movies={popularMovies} title="Popular Movies" />
            </div>
        </>
    );
}
