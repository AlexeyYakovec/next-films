import { CarouselBanner } from "@/components/index";
import {
    getNowPlayingMovies,
    getPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies,
} from "@/lib/getMovies";
import Image from "next/image";

export default async function Home() {
    const nowPlayingMovies = await getNowPlayingMovies();
    const upComingMovies = await getUpcomingMovies();
    const topRatedMovies = await getTopRatedMovies();
    const popularMovies = await getPopularMovies();

    return (
        <>
            <CarouselBanner />
        </>
    );
}
