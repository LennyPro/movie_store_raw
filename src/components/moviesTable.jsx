import React, { Component } from 'react';
import Like from './common/like';

export default class MoviesTable extends Component {

    raisSort = (path) => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path) {
            sortColumn.order = ((sortColumn.order === 'asc') ? 'desc' : 'asc');
        } else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    }

    render() {
        return (
            <table className="table">

                <thead>
                    <tr>
                        <th onClick={() => this.raisSort('title')}>Title</th>
                        <th onClick={() => this.raisSort('genre.name')}>Genre</th>
                        <th onClick={() => this.raisSort('numberInStock')}>Stock</th>
                        <th onClick={() => this.raisSort('dailyRentalRate')}>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.moviesCopyArray.map((movie) => {
                        return (
                            <tr key={movie._id}>

                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>

                                <td> <button onClick={() => this.props.onDelete(movie)}>delete</button> </td>

                                <td> <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} /> </td>

                            </tr>
                        )
                    })}
                </tbody>

            </table>

        );
    }
}



