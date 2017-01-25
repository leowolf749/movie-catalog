

const app = angular.module('MovieApp', []);

app.controller('MovieList', function ($scope, MovieService){
    $scope.movie = '';
    $scope.movies = MovieService.getMovies();

    $scope.newMovie = function () {
        MovieService.addMovie($scope.movieTitle, $scope.movieDirector, $scope.movieRelease, $scope.movieGenre);
        $scope.movieTitle = '';
        $scope.movieDirector = '';
        $scope.movieRelease = '';
        $scope.movieGenre = '';
    }
    
});

app.factory('MovieService', function () {
    let movies = [];

    return {
        addMovie: function (title, director, release, genre) {
            movies.push({
                title: title,
                director: director,
                release: release,
                genre: genre,
            });
        },
        getMovies: function () {
            return movies;
        },
    };
});