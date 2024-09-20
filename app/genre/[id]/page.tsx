import { MovieContainer } from "@/components/movie-container";
import { getDiscoverMovies } from "@/lib/getMovies";

interface Props {
    params: {
        id: string;
    };
    searchParams: {
        genre: string;
    };
}

const GenrePage = async ({
    params: { id },
    searchParams: { genre },
}: Props) => {
    const movies = await getDiscoverMovies(id);
    console.log(`getDiscoverMovies: ${id}`);

    movies.forEach((movie) => {
        console.log(`Movie title: ${movie.title} ids: `, movie.genre_ids);
    });

    return (
        <div className="py-10 max-w-screen-xl mx-auto">
            <h2 className="text-4xl font-bold px-10 mb-5">
                Results for {genre}
            </h2>
            <MovieContainer movies={movies} title="Genre" isVertical />
        </div>
    );
};

export default GenrePage;
