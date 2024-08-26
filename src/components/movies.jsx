import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
import lodash from 'lodash';


class Movies extends Component {

    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        sortColumn: { path: 'title', order: 'asc' },
    }

    componentDidMount() {
        const genres = [{ _id: "", name: 'All Genres' }, ...getGenres()];


        this.setState({
            movies: getMovies(),
            genres: genres,
        })
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter((m) => m._id !== movie._id);
        this.setState({ movies: movies, });
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies: movies, });
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    }

    handleGenreSelect = (genre) => {
        console.log('genre: ', genre);
        this.setState({
            selectedGenre: genre,
            currentPage: 1,
        });
    }

    handleSort = (sortColumn) => {
        console.log("path:", sortColumn);
        this.setState({
            sortColumn: sortColumn,
        });
    }


    render() {
        if (this.state.movies.length === 0) return <p>"There are no movies in db"</p>;

        const { movies, currentPage, pageSize, selectedGenre, sortColumn } = this.state;

        const filteredMovies = selectedGenre && selectedGenre._id
            ? movies.filter((m) => m.genre._id === selectedGenre._id)
            : movies;

        const sortedMovies = lodash.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order]);

        const moviesCopyArray = paginate(sortedMovies, currentPage, pageSize);

        return (

            <div className='mt-4'>
                <p>movies.jsx</p>

                <div className="row">
                    <div className="col-2">
                        <ListGroup
                            items={this.state.genres}
                            onItemSelect={this.handleGenreSelect}
                            selectedItem={this.state.selectedGenre}
                        />
                    </div>

                    <div className="col">
                        <p>Showing {filteredMovies.length} movies in database</p>
                        <MoviesTable
                            moviesCopyArray={moviesCopyArray}
                            sortColumn={sortColumn}
                            onDelete={this.handleDelete}
                            onLike={this.handleLike}
                            onSort={this.handleSort}
                        />
                        <Pagination
                            itemsCount={filteredMovies.length}
                            pageSize={this.state.pageSize}
                            onPageChange={this.handlePageChange}
                            currentPage={this.state.currentPage}
                        />
                    </div>
                </div>

            </div>
        );
    }
}

export default Movies;