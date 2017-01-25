

const app = angular.module('MovieApp', []);

app.controller('MovieList', function ($scope, MovieService){
    $scope.movie = '';
    $scope.movies = MovieService.getMovies();

    $scope.newMovie = function () {
        MovieService.addMovie($scope.movie);
        $scope.movie = '';
    }

});

app.factory('MovieService', function () {
    let movies = [];

    return {
        addMovie: function (title) {
            movies.push(title);
        },
        getMovies: function () {
            return movies;
        },
    };
});